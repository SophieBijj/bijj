/* ===================================================
   SOPHIE BIJJANI — common.js
   Shared JS for all pages
   =================================================== */

/* ===== 1. HEADER SCROLL ===== */
(function () {
    var header = document.getElementById('header');
    if (!header) return;

    function updateHeader() {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
})();


/* ===== 2. MOBILE MENU ===== */
function openMenu() {
    var overlay = document.getElementById('menuOverlay');
    if (!overlay) return;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    var overlay = document.getElementById('menuOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close on overlay background click (not on nav links)
document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('menuOverlay');
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeMenu();
        });
    }
});


/* ===== 3. FOOTER NEWSLETTER FORM ===== */
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.footer-form[data-netlify]');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data).toString()
        })
        .then(function () {
            showNewsletterPopup();
            form.reset();
        })
        .catch(function () {
            showNewsletterPopup(); // show anyway; Netlify usually handles it
        });
    });
});


/* ===== 4. NEWSLETTER POPUP ===== */
function showNewsletterPopup() {
    var popup = document.getElementById('newsletterPopup');
    if (!popup) return;
    popup.classList.add('active');
}

function closeNewsletterPopup() {
    var popup = document.getElementById('newsletterPopup');
    if (!popup) return;
    popup.classList.remove('active');
}

// Close popup on background click
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('newsletterPopup');
    if (popup) {
        popup.addEventListener('click', function (e) {
            if (e.target === popup) closeNewsletterPopup();
        });
    }
});


/* ===== 5. FOOTER BIRD → SCROLL TO TOP ===== */
document.addEventListener('DOMContentLoaded', function () {
    var bird = document.getElementById('footerBird');
    if (bird) {
        bird.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});


/* ===== 6. ACTIVE NAV LINK ===== */
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.header-nav .nav-link, .menu-nav li a');
    var path  = window.location.pathname;

    links.forEach(function (link) {
        var href = link.getAttribute('href');
        if (!href) return;

        // strip leading slashes for comparison
        var normalPath = path.replace(/^\//, '') || 'index.html';
        var normalHref = href.replace(/^\//, '');

        if (normalPath === normalHref ||
            (normalPath === '' && normalHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});


/* ===== 7. HERO ANIMATION (index.html only) ===== */
document.addEventListener('DOMContentLoaded', function () {
    var wrapper = document.getElementById('heroAnimation');
    if (!wrapper) return;

    var animationComplete = false;

    /* -- Build INSPIRE spans -- */
    var inspireWord = 'Inspire';
    var outlineIndex = 4; // the letter at index 4 ('r' in Inspire, 0-based) gets i-inspire

    var inspireContainer = document.createElement('div');
    inspireContainer.className = 'line-inspire';

    inspireWord.split('').forEach(function (letter, idx) {
        var span = document.createElement('span');
        span.textContent = letter;

        if (idx === outlineIndex) {
            span.classList.add('i-inspire');
        }

        // stagger delay
        var delay = idx * 80 + 100;
        span.style.animationDelay = delay + 'ms';

        inspireContainer.appendChild(span);
    });

    /* -- Build EXPRIME spans -- */
    var expresseWord = 'exprime';

    var expresseContainer = document.createElement('div');
    expresseContainer.className = 'line-exprime';

    expresseWord.split('').forEach(function (letter) {
        var span = document.createElement('span');
        span.textContent = letter;
        expresseContainer.appendChild(span);
    });

    wrapper.appendChild(inspireContainer);
    wrapper.appendChild(expresseContainer);

    /* -- Animate exprime letters -- */
    var expresseSpans = expresseContainer.querySelectorAll('span');
    var totalInspireTime = inspireWord.length * 80 + 100 + 500; // last letter anim + 500ms buffer

    setTimeout(function () {
        expresseSpans.forEach(function (span, idx) {
            setTimeout(function () {
                span.classList.add('visible');
                if (idx === expresseSpans.length - 1) {
                    animationComplete = true;
                }
            }, idx * 80);
        });
    }, totalInspireTime);
});
