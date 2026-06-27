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
    'DATA SCIENCE',
    'MACHINE LEARNING',
    'DEEP LEARNING',
    'PERCEPTION',
    'LOCALIZATION',
    'INTELLIGENCE',
    'NEURAL NETS',
    'ROBOTICS',
    'PHYSICAL AI',
    'EMBODIED AI',
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

/* ── Hero split animation on scroll ───────────────────────
   The masthead is 200vh tall with a sticky inner panel.
   As the user scrolls through the first 100vh of the hero,
   the layout transitions from centered → split two-column.
   ─────────────────────────────────────────────────────────── */
(function () {
  var heroInner = document.querySelector('.hero-inner');
  var masthead  = document.querySelector('.masthead');
  if (!heroInner || !masthead) return;

  function onScroll() {
    var scrollY      = window.scrollY;
    var viewportH    = window.innerHeight;
    // scroll zone = the extra 100vh we added beyond the sticky panel
    var scrollZone   = masthead.offsetHeight - viewportH;
    var progress     = scrollZone > 0 ? Math.min(1, scrollY / scrollZone) : 0;

    if (progress > 0.15) {
      heroInner.classList.add('hero-split');
    } else {
      heroInner.classList.remove('hero-split');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
