(function () {
  var toggle = document.getElementById('themeToggle');
  var html = document.documentElement;

  var saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);
  updateIcon(saved);

  toggle.addEventListener('click', function () {
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  });

  function updateIcon(theme) {
    toggle.innerHTML = theme === 'dark'
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  }
})();

/* ── Navbar brand text scramble ────────────────────────────
   Cycles through interest-area words with a HUD scramble effect.
   Letters resolve left-to-right; spaces are preserved so multi-word
   phrases stay readable during the transition.
   ─────────────────────────────────────────────────────────── */
(function () {
  var WORDS = [
    'UJJWAL',
    'ROBOTICS',
    'DATA SCIENCE',
    'MACHINE LEARNING',
    'EMBODIED AI',
    'PERCEPTION',
    'INTELLIGENCE',
    'NEURAL NETS',
    'PHYSICAL AI',
    'DEEP LEARNING',
    'LOCALIZATION',
    'UJJWAL',
  ];

  var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
  var FRAME_MS = 28;
  var SCRAMBLE_MS = 650;  // time to fully resolve each word
  var HOLD_MS = 2400;     // time a word stays visible before next scramble

  function scrambleTo(el, target, onDone) {
    var totalFrames = Math.round(SCRAMBLE_MS / FRAME_MS);
    var frame = 0;

    var id = setInterval(function () {
      var progress = frame / totalFrames;
      var lockedCount = Math.floor(progress * target.length);
      var out = '';

      for (var i = 0; i < target.length; i++) {
        if (target[i] === ' ') {
          out += ' ';
        } else if (i < lockedCount) {
          out += target[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      el.textContent = out;
      frame++;

      if (frame > totalFrames) {
        clearInterval(id);
        el.textContent = target;
        if (onDone) onDone();
      }
    }, FRAME_MS);
  }

  function init() {
    var brand = document.querySelector('#mainNav .navbar-brand');
    if (!brand) return;

    var idx = 0;

    function cycle() {
      idx = (idx + 1) % WORDS.length;
      scrambleTo(brand, WORDS[idx], function () {
        setTimeout(cycle, HOLD_MS);
      });
    }

    setTimeout(cycle, 2000);
  }

  // Script is at bottom of body — DOM is already ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
