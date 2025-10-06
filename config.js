 // ===== CONFIGURATION ÉDITABLE =====
        const SITE_CONFIG = {
            // Informations générales
            nom: "Sophie Bijjani",
            tagline: "Inspire ༅ Exprime",
            
            // Hero section
            hero: {
                mot1: "Inspire",
                mot2: "exprime",
                titre: "Donnez voix à votre inspiration,<br>donnez vie à votre projet.",
                description: "Créatrice d'expériences vocales, maître de cérémonie et artiste collaborative. J'apporte authenticité et magie à vos événements et créations musicales."
            },

            // Ce que je fais
            activites: [
                "Je chante mes chansons, les vôtres, en spectacle ou en studio.",
                "J'anime vos événements avec les mots justes et les propositions adaptées.",
                "Je co-crée avec ou pour vous des moments de rencontres significatifs.",
                "J'accompagne votre déploiement individuel de manière holistique (voix, mouvement, écoute active).",
                "Je transmets ma passion pour la Circlesong par des ateliers pédagogiques et ludiques.",
                "Je conférence sur la créativité et l'empuissancement."
            ],

            // Témoignages
            temoignages: [
                {
                    texte: "Sophie Bijjani sang for Rush Creek Lodge through this past summer, and she was both a joy to listen to, and a joy to work with. She is professional, punctual, and to top it all off, an amazing musician and singer to boot.",
                    auteur: "Rush Creek Lodge",
                    titre: "Yosemite, California"
                },
                {
                    texte: "Je me sens inspiré par l'assertivité de Sophie et sa capacité à tenir le gouvernail avec cœur quel que soit le stress du moment.",
                    auteur: "Participant",
                    titre: "Festival du Cercle Enchanté"
                }
            ],

            // Section artiste
            artiste: {
                description: "Mi-fée, mi-femme mystique, Sophie Bijjani explore le terrain des mots, de la musique et du somatique, curieuse du potentiel créatif de sa condition d'humaine."
            },

            // CTA Final
            ctaFinal: {
                titre: "L'inspiration vient en jouant!",
                description: "Que vous ayez une vision claire ou simplement une étincelle d'idée, parlons-en. Alors, on joue?",
                boutonTexte: "Play"
            },

            // Newsletter
            newsletter: {
                titre: "Inspirations Vocales",
                description: "Recevez mes actualités créatives, découvrez mes prochains concerts et explorez avec moi l'univers de l'expression vocale."
            },

            // Liens
            liens: {
                contact: "https://docs.google.com/forms/d/e/1FAIpQLScVyGLATRRlaKO5cdvQBqITP71xnL9Ahgj4SkxXt-Sed5sCDw/viewform?usp=dialog",
                instagram: "https://www.instagram.com/sophiebijj",
                youtube: "https://www.youtube.com/c/SophieBijjani",
                spotify: "https://open.spotify.com/artist/2gWI0fgWg1LXt6S2y0LZMu/",
                deezer: "https://www.deezer.com/en/artist/14124551",
                appleMusic: "https://music.apple.com/artist/sophie-bijjani"
            },

            // Spectacles
            spectacles: [
                {
                    titre: "Mosaïque Mainstream ༄",
                    description: "Une fresque musicale aux mille reflets : des chansons qui ont traversé frontières et générations, de Dalida à Metallica.",
                    meta: "Solo intimiste • Ambiance café-concert • Répertoire multilingue"
                },
                {
                    titre: "À la carte : Jukebox Humain ༅",
                    description: "Vous programmez, Sophie joue ! Un concert sur mesure où le public compose sa playlist en direct.",
                    meta: "Concert interactif • Playlist live • Animation participative"
                },
                {
                    titre: "Rouge Somptueux : Compositions ༄",
                    description: "Plongée intime et poétique dans mes compositions originales qui explorent les nuances de l'expérience humaine.",
                    meta: "Créations originales • Univers poétique • Concert intime"
                },
                {
                    titre: "Chœur ouvert : Chants de reliance ༅",
                    description: "Chansons glanées au fil de mes voyages. Un moment de connexion collective où les voix se joignent.",
                    meta: "Expérience participative • Chants de différentes traditions • Cercles"
                }
            ],

            // Vidéos YouTube
            videos: [
                {
                    id: "phUMrUfYd2c",
                    titre: "Composition originale",
                    description: "Découvrez mes créations musicales originales"
                },
                {
                    id: "RRzKRhQC1TA",
                    titre: "Reprise revisitée",
                    description: "Grands classiques, version Bijj"
                }
            ],

            // Spotify embed
            spotifyAlbum: "7a0fS2k5bagVzAGGyLxVNf"
        };

        // ===== FIN DE LA CONFIGURATION =====

        // Fonctions de navigation
        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            window.scrollTo(0, 0);
        }

        function openMenu() {
            document.getElementById('menuOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            document.getElementById('menuOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('.hero-content').classList.add('active');

            const logoSpans = document.querySelectorAll('.logo span');
            const logo = document.querySelector('.logo');

            logo.addEventListener('mouseenter', () => {
                logoSpans.forEach((span, index) => {
                    setTimeout(() => {
                        span.style.animation = 'wave 0.6s ease-in-out';
                    }, index * 50);
                });
            });

            logo.addEventListener('mouseleave', () => {
                logoSpans.forEach(span => span.style.animation = '');
            });

            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                document.querySelector('.header').classList.toggle('scrolled', scrollTop > 50);
            });
        });

