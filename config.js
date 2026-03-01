// ===== CONFIGURATION ÉDITABLE =====
const SITE_CONFIG = {
    // Informations générales
    nom: "Sophie Bijjani",
    tagline: "Inspire ༅ Exprime",
    
    // Hero section
    hero: {
        mot1: "Inspire",
        mot2: "exprime"
    },

    // Biographie (nouvelle section après hero)
    biographie: {
        nom: "Sophie Bijjani",
        titre: "Biographie",
        texte: "Artiste multidisciplinaire originaire de l'Outaouais, Sophie Bijjani façonne des univers où la musique sert de pont entre les êtres. Formée en chant jazz au Cégep Saint-Laurent, elle plonge ensuite corps et cœur dans diverses pratiques d'improvisation : Circlesong, Contact Improvisation et approches somatiques. Portée par ses racines libanaises et une curiosité pour l'ailleurs, elle voyage et se forme sur plusieurs territoires — France, Colombie, États-Unis, Colombie-Britannique — en  explorant le terrain des mots, de la musique et du mouvement. Ses créations dévoilent une vision intuitive et lumineuse, entre vulnérabilité, quête identitaire et transcendance. En 2024, elle débute l'écriture du conte Chenilleville. Une première adaptation scénique prend forme lors de la résidence 3e Oeil en novembre 2025. En parallèle, elle débute le projet musical Oui Dentelle avec l'auteur-compositeur-interprète Maxime Galand.",
        texteResume: "Un élément déclencheur. Passeuse de permission — d'oser, de jouer, de se montrer — dans la rencontre avec soi et avec l'autre."
    },

    // Mes Univers (remplace "activités")
    univers: [
        {
            id: "voix-scene",
            symbole: "🎤",
            titre: "Au Micro",
            soustitre: "Spectacles • Conférences • Maître de cérémonie",
            description: "Je porte l'énergie et tiens le fil d'un événement — en spectacle, en animation ou en prise de parole. Je lis la salle et crée les conditions pour que quelque chose de vrai se passe.",
            sections: [
                {
                    categorie: "En spectacle",
                    items: [
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
                    ]
                },
                {
                    categorie: "En parole",
                    items: [
                        "Conférences sur la créativité",
                        "Conférences sur l'empuissancement",
                        "Keynotes inspirants pour événements"
                    ]
                },
                {
                    categorie: "En animation",
                    items: [
                        "Maître de cérémonie pour galas corporatifs",
                        "Porte-parole de festivals",
                        "Animation de conférences"
                    ]
                }
            ],
            pdfLien: "BIJJ_Spectacles.pdf",
            pdfTexte: "📄 Télécharger le catalogue PDF",
            temoignage: {
                texte: "Sophie Bijjani [...] was both a joy to listen to, and a joy to work with. [...] an amazing musician and singer.",
                auteur: "Bethany Kindiger",
                titre: "Manager at Rush Creek Lodge, California"
            }
        },
        {
            id: "espaces-rencontre",
            symbole: "༅",
            titre: "En cercle",
            soustitre: "Ateliers circlesong • Cercles de chant • Facilitation de groupe",
            description: "J'ouvre la permission de jouer avec la voix et le corps — collectivement. Des espaces où les gens se découvrent autrement, ensemble.",
            sections: [
                {
                    categorie: "Ateliers de groupe",
                    items: [
                        "Flow Musical (1h30, tous niveaux) - Musique vocale et corporelle improvisée",
                        "Circlesong 101 (4×3h, intermédiaire) - Fondements de la circlesong",
                        "Bases Musicales en Impro Vocale (3h, débutants) - Par où commencer",
                        "Corps Sonores (2h, tous niveaux) - Approche somatique"
                    ]
                }
            ],
            pdfLien: "BIJJ_Ateliers_PRÉSENTATION.pdf",
            pdfTexte: "📄 Télécharger le catalogue d'ateliers PDF",
            temoignage: {
                texte: "L'atelier m'a aidée à comprendre comment improviser vocalement et comment les impros peuvent être structurées, le tout dans une atmosphère accueillante, amicale et sans pression.",
                auteur: "Amélie C."
            }
        },
        {
            id: "accompagnement",
            symbole: "❋",
            titre: "En tête-à-tête",
            soustitre: "Exploration vocale • Technique • Libération • Création",
            description: "Un espace privé pour aller chercher ce qui est vrai en toi — à travers la voix, le corps et le jeu. Pour les praticiens et artistes qui veulent approfondir leur pratique.",
            sections: [
                {
                    categorie: "Accompagnement individuel",
                    items: [
                        "Exploration somatique liée à la voix",
                        "Technique vocale adaptée à vos besoins",
                        "Composition et création musicale",
                        "Clarté de la voix dans une approche holistique",
                        "Libération de blocages émotionnels"
                    ]
                }
            ],
            temoignage: {
                texte: "Notre session m'a fait prendre conscience de l'importance de la détente dans le travail de la voix, et m'a fait résonner des zones que je n'avais pas l'habitude de sentir. Sophie m'a aidée à conscientiser des espaces de résonance nouveaux chez moi. C'est une très bonne pédagogue.",
                auteur: "Patricia"
            }
        }
    ],

    // Musique (section intégrée)
    musique: {
        titre: "Ma Musique",
        spotifyAlbum: {
            titre: 'Album "Feu d\'grand vent"',
            id: "7a0fS2k5bagVzAGGyLxVNf"
        },
        videos: [
            { id: "G7eTt8gkWjg" },
            { id: "phUMrUfYd2c" },  // Au centre
            { id: "RRzKRhQC1TA" }
        ]
    },

    // CTA Collaboration
    ctaCollaboration: {
        titre: "Vous avez un cadre. Je m'occupe de ce qui fait vibrer.",
        description: "Vous organisez une retraite, un festival, un événement — vous avez un thème, une vision, mais vous cherchez ce qui va faire que ça vibre vraiment. Écrivez-moi. Je travaille en français et en anglais.",
        boutonTexte: "Parlons-en!"
    },

    // Témoignages
    temoignages: [
        {
            texte: "Sophie Bijjani [...] was both a joy to listen to, and a joy to work with. [...] an amazing musician and singer.",
            auteur: "Bethany Kindiger",
            titre: "Manager at Rush Creek Lodge, California"
        },
        {
            texte: "Je me sens inspiré par l'assertivité de Sophie et sa capacité à tenir le gouvernail avec cœur quel que soit le stress du moment.",
            auteur: "Pierre",
            titre: "Participant au Festival du Cercle Enchanté"
        }
    ],

    // Photos
    photos: {
        quote: "PhotoQuote.jpg",
        profile: "sophie-profile-2025.jpeg"
    },

    // Newsletter (intégrée au footer)
    newsletter: {
        titre: "Oyé!",
        description: "Veux-tu faire partie des premières personnes que j'informe des initiatives qui germent de mon côté?"
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

    // MENU DE NAVIGATION (simplifié - ancres de scroll)
    navigation: [
        { nom: "Accueil", ancre: "#hero" },
        { nom: "Mes univers", ancre: "#univers" },
        { nom: "Musique", ancre: "#musique" },
        { nom: "Contact", lien: "https://docs.google.com/forms/d/e/1FAIpQLScVyGLATRRlaKO5cdvQBqITP71xnL9Ahgj4SkxXt-Sed5sCDw/viewform?usp=dialog" }
    ],

    // FOOTER
    footer: {
        copyright: "Fait avec amour et concentration\n2025 Sophie Bijjani. Inspire ༅ Exprime - Tous droits réservés."
    }
};
