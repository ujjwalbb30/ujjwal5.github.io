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
   Sets CSS custom property --hp (0→1) on <html> each frame,
   driving flex-basis, opacity, and scaleY directly in CSS so
   the transition is perfectly smooth at any scroll speed.
   ─────────────────────────────────────────────────────────── */
(function () {
  var heroInner = document.querySelector('.hero-inner');
  var masthead  = document.querySelector('.masthead');
  if (!heroInner || !masthead) return;

  var rafPending = false;

  function smoothStep(x) {
    x = x < 0 ? 0 : x > 1 ? 1 : x;
    return x * x * (3 - 2 * x);
  }

  function update() {
    rafPending = false;
    var scrollZone = masthead.offsetHeight - window.innerHeight;
    var raw        = scrollZone > 0 ? window.scrollY / scrollZone : 0;
    var hp         = smoothStep(raw);

    document.documentElement.style.setProperty('--hp', hp.toFixed(4));
  }

  window.addEventListener('scroll', function () {
    if (!rafPending) { rafPending = true; requestAnimationFrame(update); }
  }, { passive: true });

  update(); // set initial state
})();

/* ── Animated favicon — rotating gold arc around Iron Man icon ─── */
(function () {
  var SIZE   = 32;
  var CX     = SIZE / 2;
  var CY     = SIZE / 2;
  var R      = 13;           // ring radius
  var SPEED  = 0.04;         // radians per frame
  var ARC    = Math.PI * 1.3; // arc length

  var canvas = document.createElement('canvas');
  canvas.width  = SIZE;
  canvas.height = SIZE;
  var ctx = canvas.getContext('2d');

  var faviconLink = document.querySelector("link[rel='icon']");
  if (!faviconLink) {
    faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    document.head.appendChild(faviconLink);
  }

  var img = new Image();
  img.src = 'img/iconfinder_ironman.png';
  img.onload = function () {
    var angle = 0;
    var lastTick = 0;

    function tick(ts) {
      if (ts - lastTick < 40) { requestAnimationFrame(tick); return; } // ~25 fps
      lastTick = ts;

      ctx.clearRect(0, 0, SIZE, SIZE);

      // Gold glow arc (behind icon)
      ctx.save();
      ctx.shadowColor = '#c9a644';
      ctx.shadowBlur  = 7;
      ctx.strokeStyle = '#c9a644';
      ctx.lineWidth   = 2.5;
      ctx.lineCap     = 'round';
      ctx.beginPath();
      ctx.arc(CX, CY, R, angle, angle + ARC);
      ctx.stroke();

      // Dim trailing arc on opposite side
      ctx.globalAlpha = 0.25;
      ctx.shadowBlur  = 0;
      ctx.beginPath();
      ctx.arc(CX, CY, R, angle + ARC, angle + Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Iron Man icon on top
      ctx.drawImage(img, 3, 3, SIZE - 6, SIZE - 6);

      faviconLink.href = canvas.toDataURL('image/png');
      angle += SPEED;
      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  };
})();
