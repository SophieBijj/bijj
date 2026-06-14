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


/* ===== 7. INNER PAGE HERO — letter animation + social icons ===== */
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('heroAnimation')) return; // skip landing page

    var pageHero = document.querySelector('.page-hero');
    if (!pageHero) return;

    // — Social icons (same as landing) —
    var social = document.createElement('div');
    social.className = 'hero-social-vertical';
    social.innerHTML =
        '<a href="https://www.instagram.com/sophiebijj" target="_blank" title="Instagram">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>' +
        '</a>' +
        '<a href="https://www.youtube.com/c/SophieBijjani" target="_blank" title="YouTube">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' +
        '</a>' +
        '<a href="https://open.spotify.com/artist/2gWI0fgWg1LXt6S2y0LZMu/" target="_blank" title="Spotify">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.295.421-1.02.599-1.559.3z"/></svg>' +
        '</a>';
    pageHero.appendChild(social);

    // — Title letter animation —
    var h1 = pageHero.querySelector('h1');
    if (!h1) return;

    var text = h1.textContent;
    h1.textContent = '';
    h1.style.display = 'flex';
    h1.style.justifyContent = 'flex-end';
    h1.style.flexWrap = 'wrap';
    h1.style.gap = '0';

    var animIdx = 0;
    text.split('').forEach(function (letter) {
        var span = document.createElement('span');
        span.textContent = letter === ' ' ? ' ' : letter;
        span.style.display = 'inline-block';
        if (letter !== ' ') {
            span.style.opacity = '0';
            span.style.animation = 'fadeInFromCenter 0.5s ease forwards';
            span.style.animationDelay = (animIdx * 70 + 100) + 'ms';
            animIdx++;
        }
        h1.appendChild(span);
    });

    // — Subtitle fade-in after title finishes —
    var subtitle = pageHero.querySelector('.subtitle');
    if (subtitle) {
        subtitle.style.opacity = '0';
        subtitle.style.animation = 'fadeInUp 0.6s ease forwards ' + (animIdx * 70 + 500) + 'ms';
    }
});


/* ===== 8. HERO ANIMATION (index.html only) ===== */
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
