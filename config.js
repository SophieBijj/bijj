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
        description: "Mi-fée, mi-femme mystique, Sophie Bijjani explore le terrain des mots, de la musique et du somatique, curieuse du potentiel créatif de sa condition d'humaine.",
        photo: "Nomis Sophie Cercle Enchanté 2025.jpeg"
    },

    // Photos
    photos: {
        landing: "PhotoLanding.jpg",
        quote: "PhotoQuote.jpg"
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
        description: "Recevez mes actualités créatives, découvrez mes prochains concerts et explorez avec moi l'univers de l'expression vocale.",
        descriptionMusique: "Restez connectés avec mes nouvelles créations, mes prochains concerts et mes réflexions sur la voix."
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

    // PAGE MUSIQUE
    musique: {
        titreHero: "Ma Musique",
        spotifyAlbum: {
            titre: 'Album "Feu d\'grand vent"',
            id: "7a0fS2k5bagVzAGGyLxVNf"
        },
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
        ctaYoutube: "Voir plus sur YouTube"
    },

    // PAGE SERVICES
    services: {
        titre: "Mes Services",
        intro: "J'ouvre des espaces de jeu où je cultive l'étincelle créative, en instaurant un cadre d'exploration sécuritaire pour inviter l'expression authentique de chaque individu. Je travaille avec un public varié : enfants, adolescents, adultes - débutants comme avancés.",
        
        spectacles: {
            titre: "Spectacles ༄",
            description: "Des performances intimistes où les chansons se révèlent sous un autre jour, créant des moments de connexion authentique avec le public.",
            liste: [
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
            pdfLien: "BIJJ_Spectacles.pdf",
            pdfTexte: "📄 Télécharger le catalogue PDF"
        },

        animation: {
            titre: "Animation & Maître de cérémonie ༅",
            description: "J'anime vos événements avec clarté, bienveillance et humour, créant une atmosphère chaleureuse et engageante.",
            liste: [
                "Maître de cérémonie pour galas et événements corporatifs",
                "Porte-parole de festivals",
                "Animation de conférences"
            ],
            temoignage: {
                texte: "Sophie, tu rends les informations pratiques excitantes à écouter. Je me levais à chaque jour du festival en joie d'entendre ton 'Point Info!' Tu offres un cadre clair avec compassion et humour.",
                auteur: "Participant",
                titre: "Festival du Cercle Enchanté"
            },
            pdfLien: "BIJJ_Animation.pdf",
            pdfTexte: "📄 Télécharger la fiche PDF"
        },

        ateliers: {
            titre: "Ateliers & Accompagnement ༄",
            description: "Des espaces privilégiés pour explorer votre voix dans une approche holistique corps-cœur-esprit, libérer des blocages et raffiner votre perception.",
            ateliersGroupe: [
                "Flow Musical (1h30, tous niveaux) - Musique vocale et corporelle improvisée",
                "Circlesong 101 (4×3h, intermédiaire) - Fondements de la circlesong",
                "Bases Musicales en Impro Vocale (3h, débutants) - Par où commencer",
                "Corps Sonores (2h, tous niveaux) - Approche somatique"
            ],
            accompagnementIndividuel: [
                "Exploration somatique liée à la voix",
                "Technique vocale adaptée à vos besoins",
                "Composition et création musicale",
                "Clarté de la voix dans une approche holistique",
                "Libération de blocages émotionnels"
            ],
            temoignage: {
                texte: "L'atelier m'a aidée à comprendre comment improviser vocalement et comment les impros peuvent être structurées, le tout dans une atmosphère accueillante, amicale et sans pression.",
                auteur: "Amélie C."
            },
            pdfLien: "BIJJ_Ateliers_PRÉSENTATION.pdf",
            pdfTexte: "📄 Télécharger le catalogue d'ateliers PDF"
        },

        ctaContact: {
            titre: "Discutons de votre projet",
            description: "Que ce soit pour un spectacle, une animation ou un atelier, je suis là pour vous accompagner.",
            boutonTexte: "Me contacter"
        }
    },

    // MENU DE NAVIGATION
    navigation: [
        { nom: "Accueil", id: "accueil" },
        { nom: "Musique", id: "musique" },
        { nom: "Services", id: "services" },
        { nom: "Contact", lien: "https://docs.google.com/forms/d/e/1FAIpQLScVyGLATRRlaKO5cdvQBqITP71xnL9Ahgj4SkxXt-Sed5sCDw/viewform?usp=dialog" }
    ],

    // FOOTER
    footer: {
        copyright: "2024 Sophie Bijjani. Tous droits réservés."
    }
};
