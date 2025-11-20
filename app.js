// ===== APP.JS - SOPHIE BIJJANI SITE =====

// État global
let animationTriggered = false;
let animationComplete = false;

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    initHero();
    initBiographie();
    initUniversGrid();
    initMusique();
    initCTACollaboration();
    initTestimonials();
    initNewsletter();
    initMenu();
    initHeaderSocial();
    initFooter();
    initScrollBehavior();
    initSmoothScrolling();
});

// ===== HERO ANIMATION =====
function initHero() {
    const wrapper = document.getElementById('heroAnimation');
    
    // Ligne INSPIRE
    const lineInspire = document.createElement('div');
    lineInspire.className = 'line-inspire';
    const inspire = SITE_CONFIG.hero.mot1;
    
    inspire.split('').forEach((char, i) => {
        const span = document.createElement('span');
        // Seul le 2e "i" (index 4 dans "Inspire") doit être outline
        span.className = (i === 4 && char.toLowerCase() === 'i') ? 'letter i-inspire' : 'letter';
        span.textContent = char;
        lineInspire.appendChild(span);
    });
    
    // Ligne EXPRIME (commence invisible)
    const lineExprime = document.createElement('div');
    lineExprime.className = 'line-exprime';
    const exprime = SITE_CONFIG.hero.mot2;
    
    exprime.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.className = (char.toLowerCase() === 'i') ? 'letter i-exprime' : 'letter';
        span.textContent = char;
        lineExprime.appendChild(span);
    });
    
    wrapper.appendChild(lineInspire);
    wrapper.appendChild(lineExprime);
    
    // Initialiser le scroll hijacking
    initScrollHijacking();
}

// ===== ANIMATION AUTOMATIQUE AVEC SCROLL HIJACKING =====
function initScrollHijacking() {
    const exprimeContainer = document.querySelector('.line-exprime');
    const letterSpans = exprimeContainer.querySelectorAll('.letter');
    let currentIndex = 0;

    // Rendre le header visible immédiatement (pas d'animation de menu)
    const header = document.getElementById('header');
    header.classList.add('animation-complete');

    // Bloquer le scroll dès le chargement
    document.body.style.overflow = 'hidden';

    // Attendre 0.6 seconde puis démarrer "exprime"
    setTimeout(() => {
        startAnimation();
    }, 600);

    function setupScrollBlocker() {
        function handleWheelOrTouch(e) {
            if (!animationComplete) {
                e.preventDefault();
            }
        }

        window.addEventListener('wheel', handleWheelOrTouch, { passive: false });
        window.addEventListener('touchmove', handleWheelOrTouch, { passive: false });
        window.addEventListener('keydown', (e) => {
            if (!animationComplete && [32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    function startAnimation() {
        if (animationTriggered) return;

        animationTriggered = true;
        setupScrollBlocker();

        typeNextLetter();
    }

    function typeNextLetter() {
        if (currentIndex < letterSpans.length) {
            letterSpans[currentIndex].classList.add('visible');
            currentIndex++;
            setTimeout(typeNextLetter, 80);
        } else {
            setTimeout(() => {
                animationComplete = true;
                document.body.style.overflow = 'auto';
            }, 200);
        }
    }
}

// ===== BIOGRAPHIE =====
function initBiographie() {
    document.getElementById('biographieNom').textContent = SITE_CONFIG.biographie.nom;
    document.getElementById('biographieTitre').textContent = SITE_CONFIG.biographie.titre;
    document.getElementById('biographieTexteResume').textContent = SITE_CONFIG.biographie.texteResume;
    document.getElementById('biographieTexteFull').textContent = SITE_CONFIG.biographie.texte;
}

function toggleBio() {
    const fullText = document.getElementById('biographieTexteFull');
    const resume = document.getElementById('biographieTexteResume');
    const button = document.getElementById('bioToggle');
    const icon = button.querySelector('.bio-toggle-icon');
    const text = button.querySelector('.bio-toggle-text');

    const isOpen = fullText.classList.contains('open');

    if (isOpen) {
        fullText.classList.remove('open');
        resume.style.display = 'block';
        icon.textContent = '+';
        text.textContent = 'Lire la suite';
    } else {
        fullText.classList.add('open');
        resume.style.display = 'none';
        icon.textContent = '−';
        text.textContent = 'Réduire';
    }
}

// ===== MES UNIVERS =====
function initUniversGrid() {
    const grid = document.getElementById('universGrid');
    
    SITE_CONFIG.univers.forEach(univers => {
        const card = document.createElement('div');
        card.className = 'univers-card';
        card.setAttribute('data-univers-id', univers.id);
        
        card.innerHTML = `
            <div class="univers-card-header">
                <span class="univers-symbole">${univers.symbole}</span>
                <h3>${univers.titre}</h3>
                <p class="univers-soustitre">${univers.soustitre}</p>
            </div>
            <p class="univers-description">${univers.description}</p>
            <button class="univers-toggle" onclick="toggleUnivers('${univers.id}')">
                <span class="toggle-text">Explorer</span>
                <span class="toggle-icon">+</span>
            </button>
            <div class="univers-details" id="${univers.id}-details">
                ${renderUniversDetails(univers)}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function renderUniversDetails(univers) {
    let html = '';
    
    univers.sections.forEach(section => {
        html += `<div class="univers-section">`;
        html += `<h4>${section.categorie}</h4>`;
        
        if (Array.isArray(section.items[0]) || typeof section.items[0] === 'string') {
            html += `<ul class="univers-list">`;
            section.items.forEach(item => {
                if (typeof item === 'string') {
                    html += `<li>${item}</li>`;
                } else {
                    html += `
                        <li class="univers-item-detail">
                            <strong>${item.titre}</strong>
                            <p>${item.description}</p>
                            ${item.meta ? `<span class="item-meta">${item.meta}</span>` : ''}
                        </li>
                    `;
                }
            });
            html += `</ul>`;
        }
        
        html += `</div>`;
    });
    
    if (univers.pdfLien) {
        html += `<a href="${univers.pdfLien}" class="pdf-download" target="_blank">${univers.pdfTexte}</a>`;
    }
    
    // Gérer témoignages multiples (nouveau format) ou simple (ancien format)
    if (univers.temoignages && Array.isArray(univers.temoignages)) {
        univers.temoignages.forEach(temoignage => {
            html += `
                <div class="univers-temoignage">
                    <p class="temoignage-text">"${temoignage.texte}"</p>
                    <p class="temoignage-author">— ${temoignage.auteur}${temoignage.titre ? `, ${temoignage.titre}` : ''}</p>
                </div>
            `;
        });
    } else if (univers.temoignage) {
        // Ancien format (pour compatibilité)
        html += `
            <div class="univers-temoignage">
                <p class="temoignage-text">"${univers.temoignage.texte}"</p>
                <p class="temoignage-author">— ${univers.temoignage.auteur}${univers.temoignage.titre ? `, ${univers.temoignage.titre}` : ''}</p>
            </div>
        `;
    }
    
    return html;
}

function toggleUnivers(universId) {
    const details = document.getElementById(`${universId}-details`);
    const card = document.querySelector(`[data-univers-id="${universId}"]`);
    const button = card.querySelector('.univers-toggle');
    const icon = button.querySelector('.toggle-icon');
    const text = button.querySelector('.toggle-text');
    
    const isOpen = details.classList.contains('open');
    
    // Fermer tous les autres univers d'abord
    document.querySelectorAll('.univers-details.open').forEach(detail => {
        if (detail.id !== `${universId}-details`) {
            detail.classList.remove('open');
            const otherCard = detail.closest('.univers-card');
            const otherButton = otherCard.querySelector('.univers-toggle');
            otherButton.querySelector('.toggle-icon').textContent = '+';
            otherButton.querySelector('.toggle-text').textContent = 'Explorer';
        }
    });
    
    // Toggle l'univers actuel
    if (isOpen) {
        details.classList.remove('open');
        icon.textContent = '+';
        text.textContent = 'Explorer';
    } else {
        details.classList.add('open');
        icon.textContent = '−';
        text.textContent = 'Fermer';
        
        // Scroll smooth vers la carte
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    }
}

// ===== MUSIQUE =====
let currentVideoIndex = 1; // Démarre sur la vidéo 1 (index 1) pour voir les deux autres de chaque côté

function initMusique() {
    document.getElementById('musiquetitre').textContent = SITE_CONFIG.musique.titre;
    document.getElementById('spotifyTitre').textContent = SITE_CONFIG.musique.spotifyAlbum.titre;

    // Spotify embed
    const spotifyEmbed = document.getElementById('spotifyEmbed');
    spotifyEmbed.src = `https://open.spotify.com/embed/album/${SITE_CONFIG.musique.spotifyAlbum.id}?utm_source=generator`;

    // Video Carousel avec thumbnails visibles
    const videoCarousel = document.getElementById('videoCarousel');
    SITE_CONFIG.musique.videos.forEach((video, index) => {
        const videoSlide = document.createElement('div');
        videoSlide.className = 'video-slide';
        videoSlide.innerHTML = `
            <img
                src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg"
                alt="Video thumbnail"
                class="video-thumbnail"
                onclick="goToVideo(${index})">
            <iframe
                src="https://www.youtube.com/embed/${video.id}"
                title="Video YouTube"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="video-iframe">
            </iframe>
        `;
        videoCarousel.appendChild(videoSlide);
    });

    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.video-slide');
    const carousel = document.getElementById('videoCarousel');

    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'next');

        if (index === currentVideoIndex) {
            slide.classList.add('active');
        } else if (index === (currentVideoIndex - 1 + slides.length) % slides.length) {
            slide.classList.add('prev');
        } else if (index === (currentVideoIndex + 1) % slides.length) {
            slide.classList.add('next');
        }
    });

    // Calculer le décalage pour centrer la vidéo active
    // Avec slides de 70% + gap de 30px, on calcule: (70% + gap) * index
    const slideWidth = 70; // pourcentage
    const gapSize = 30; // pixels
    const offset = currentVideoIndex * (slideWidth + 5); // 5% approximatif pour le gap
    carousel.style.transform = `translateX(calc(-${offset}% + 15%))`;
}

function nextVideo() {
    const slides = document.querySelectorAll('.video-slide');
    if (slides.length === 0) return;

    currentVideoIndex = (currentVideoIndex + 1) % slides.length;
    updateCarousel();
}

function prevVideo() {
    const slides = document.querySelectorAll('.video-slide');
    if (slides.length === 0) return;

    currentVideoIndex = (currentVideoIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToVideo(index) {
    currentVideoIndex = index;
    updateCarousel();
}

// ===== CTA COLLABORATION =====
function initCTACollaboration() {
    document.getElementById('ctaCollabTitre').textContent = SITE_CONFIG.ctaCollaboration.titre;
    document.getElementById('ctaCollabDescription').textContent = SITE_CONFIG.ctaCollaboration.description;
    document.getElementById('ctaCollabButton').textContent = SITE_CONFIG.ctaCollaboration.boutonTexte;
    document.getElementById('ctaCollabButton').href = SITE_CONFIG.liens.contact;
}

// ===== TÉMOIGNAGES =====
function initTestimonials() {
    const container = document.getElementById('temoignagesContainer');

    SITE_CONFIG.temoignages.forEach((temoignage, index) => {
        const div = document.createElement('div');
        div.className = index === 0 ? 'testimonial testimonial-left' : 'testimonial testimonial-right';

        div.innerHTML = `
            <p class="testimonial-text">${temoignage.texte}</p>
            <div class="testimonial-author">${temoignage.auteur}</div>
            <div class="testimonial-title">${temoignage.titre}</div>
        `;

        container.appendChild(div);
    });
}

// ===== MENU =====
function initMenu() {
    const menuNav = document.getElementById('menuNav');
    const menuSocial = document.getElementById('menuSocial');
    
    // Icônes SVG
    const socialIcons = {
        instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
        youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
        spotify: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.295.421-1.02.599-1.559.3z"/>',
        deezer: '<path d="M18.81 16.83v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5zm-7.32 2.37v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5zm0-2.37h5.13v1.5h-5.13v-1.5zm-7.32 4.74v1.5h5.13v-1.5H4.17zm0-2.37h5.13v1.5H4.17v-1.5zm0-2.37h5.13v1.5H4.17v-1.5zm0-2.37h5.13v1.5H4.17v-1.5zm7.32 0v1.5h5.13v-1.5h-5.13zm7.32 0v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5z"/>'
    };
    
    // Navigation
    SITE_CONFIG.navigation.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.nom;
        
        if (item.lien) {
            a.href = item.lien;
            a.target = '_blank';
        } else if (item.ancre) {
            a.href = item.ancre;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                closeMenu();
                setTimeout(() => {
                    document.querySelector(item.ancre).scrollIntoView({ behavior: 'smooth' });
                }, 300);
            });
        }
        
        li.appendChild(a);
        menuNav.appendChild(li);
    });
    
    // Social links avec icônes SVG
    menuSocial.innerHTML = `
        <a href="${SITE_CONFIG.liens.instagram}" target="_blank" title="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${socialIcons.instagram}</svg>
        </a>
        <a href="${SITE_CONFIG.liens.youtube}" target="_blank" title="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${socialIcons.youtube}</svg>
        </a>
        <a href="${SITE_CONFIG.liens.spotify}" target="_blank" title="Spotify">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${socialIcons.spotify}</svg>
        </a>
        <a href="${SITE_CONFIG.liens.deezer}" target="_blank" title="Deezer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${socialIcons.deezer}</svg>
        </a>
    `;
}

function openMenu() {
    const overlay = document.getElementById('menuOverlay');
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    const overlay = document.getElementById('menuOverlay');
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }, 600);
}

// ===== HEADER SOCIAL =====
function initHeaderSocial() {
    const socialIcons = {
        instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
        youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
        spotify: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.295.421-1.02.599-1.559.3z"/>',
        deezer: '<path d="M18.81 16.83v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5zm-7.32 2.37v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5zm0-2.37h5.13v1.5h-5.13v-1.5zm-7.32 4.74v1.5h5.13v-1.5H4.17zm0-2.37h5.13v1.5H4.17v-1.5zm0-2.37h5.13v1.5H4.17v-1.5zm0-2.37h5.13v1.5H4.17v-1.5zm7.32 0v1.5h5.13v-1.5h-5.13zm7.32 0v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5z"/>'
    };

    const headerSocial = document.getElementById('headerSocial');
    if (headerSocial) {
        headerSocial.innerHTML = `
            <a href="${SITE_CONFIG.liens.instagram}" target="_blank" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${socialIcons.instagram}</svg>
            </a>
            <a href="${SITE_CONFIG.liens.youtube}" target="_blank" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${socialIcons.youtube}</svg>
            </a>
            <a href="${SITE_CONFIG.liens.spotify}" target="_blank" title="Spotify">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${socialIcons.spotify}</svg>
            </a>
            <a href="${SITE_CONFIG.liens.deezer}" target="_blank" title="Deezer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${socialIcons.deezer}</svg>
            </a>
        `;
    }
}

// ===== NEWSLETTER =====
function initNewsletter() {
    document.getElementById('newsletterTitre').textContent = SITE_CONFIG.newsletter.titre;
    document.getElementById('newsletterDescription').textContent = SITE_CONFIG.newsletter.description;

    // Gestion du formulaire newsletter
    initNewsletterForm();
}

// ===== FOOTER (dans Newsletter) =====
function initFooter() {
    // Icônes SVG (mêmes que le header)
    const socialIcons = {
        instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
        youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
        spotify: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.295.421-1.02.599-1.559.3z"/>',
        deezer: '<path d="M18.81 16.83v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5zm-7.32 2.37v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5zm0-2.37h5.13v1.5h-5.13v-1.5zm-7.32 4.74v1.5h5.13v-1.5H4.17zm0-2.37h5.13v1.5H4.17v-1.5zm0-2.37h5.13v1.5H4.17v-1.5zm0-2.37h5.13v1.5H4.17v-1.5zm7.32 0v1.5h5.13v-1.5h-5.13zm7.32 0v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5z"/>'
    };

    // Social links footer (sans bordure, comme le header)
    const footerSocial = document.getElementById('footerSocial');
    if (footerSocial) {
        footerSocial.innerHTML = `
            <a href="${SITE_CONFIG.liens.instagram}" target="_blank" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${socialIcons.instagram}</svg>
            </a>
            <a href="${SITE_CONFIG.liens.youtube}" target="_blank" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${socialIcons.youtube}</svg>
            </a>
            <a href="${SITE_CONFIG.liens.spotify}" target="_blank" title="Spotify">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${socialIcons.spotify}</svg>
            </a>
            <a href="${SITE_CONFIG.liens.deezer}" target="_blank" title="Deezer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${socialIcons.deezer}</svg>
            </a>
        `;
    }

    // Click sur l'oiseau pour scroll to top
    const newsletterBird = document.getElementById('newsletterBird');
    if (newsletterBird) {
        newsletterBird.style.cursor = 'pointer';
        newsletterBird.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ===== SCROLL BEHAVIOR =====
function initScrollBehavior() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.classList.remove('animation-complete');
        } else {
            header.classList.remove('scrolled');
            if (animationComplete) {
                header.classList.add('animation-complete');
            }
        }
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    // Fermer le menu mobile si ouvert
                    const menuOverlay = document.getElementById('menuOverlay');
                    if (menuOverlay && menuOverlay.classList.contains('active')) {
                        closeMenu();
                        setTimeout(() => {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                    } else {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });
}

// ===== LOGO SCROLL TO TOP =====
document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// ===== NEWSLETTER FORM =====
function initNewsletterForm() {
    const form = document.querySelector('form[name="newsletter"]');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitButton = form.querySelector('button[type="submit"]');
            const emailInput = form.querySelector('input[name="email"]');
            const originalButtonText = submitButton.textContent;

            // Feedback visuel
            submitButton.textContent = 'Envoi...';
            submitButton.disabled = true;

            // Préparer les données du formulaire
            const formData = new FormData(form);

            try {
                // Soumettre à Netlify
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                });

                if (response.ok) {
                    // Succès : afficher le popup
                    showNewsletterPopup();
                    // Réinitialiser le formulaire
                    emailInput.value = '';
                } else {
                    // Erreur
                    alert('Une erreur est survenue. Veuillez réessayer.');
                }
            } catch (error) {
                console.error('Erreur:', error);
                alert('Une erreur est survenue. Veuillez réessayer.');
            } finally {
                // Réactiver le bouton
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        });
    }
}

function showNewsletterPopup() {
    const popup = document.getElementById('newsletterPopup');
    if (popup) {
        popup.classList.add('active');
        // Fermer automatiquement après 3 secondes
        setTimeout(() => {
            closeNewsletterPopup();
        }, 3000);
    }
}

function closeNewsletterPopup() {
    const popup = document.getElementById('newsletterPopup');
    if (popup) {
        popup.classList.remove('active');
    }
}
