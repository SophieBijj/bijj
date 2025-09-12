// script.js - Version adaptée pour Sophie Bijjani

// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page chargée, début du chargement JSON...');
    chargerContenuJSON();
    
    // Garder vos fonctions existantes
    setupExistingFunctions();
});

// Fonction principale pour charger le contenu JSON
async function chargerContenuJSON() {
    try {
        console.log('Tentative de chargement du fichier JSON...');
        
        const response = await fetch('./data/contenu.json');
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const donnees = await response.json();
        console.log('Données JSON chargées avec succès:', donnees);
        
        // Appliquer le contenu à la page
        appliquerContenu(donnees);
        
    } catch (erreur) {
        console.log('Erreur lors du chargement JSON:', erreur);
        console.log('Le site fonctionne avec le contenu HTML original');
        // Le site continue de fonctionner avec le HTML existant
    }
}

// Appliquer le contenu JSON à la page
function appliquerContenu(donnees) {
    console.log('Application du contenu...');
    
    // 1. Mettre à jour le titre principal (header)
    const titreHeader = document.querySelector('.brand h1');
    if (titreHeader && donnees.site?.titre) {
        titreHeader.textContent = donnees.site.titre;
        console.log('✅ Titre header mis à jour');
    }
    
    // 2. Mettre à jour le tagline
    const taglineElement = document.querySelector('.tagline');
    if (taglineElement && donnees.site?.tagline) {
        taglineElement.textContent = donnees.site.tagline;
        console.log('✅ Tagline mis à jour');
    }
    
    // 3. Mettre à jour le titre héro de la page d'accueil
    const heroTitre = document.querySelector('.hero h2');
    if (heroTitre && donnees.accueil?.hero?.titre) {
        heroTitre.textContent = donnees.accueil.hero.titre;
        console.log('✅ Titre héro mis à jour');
    }
    
    // 4. Mettre à jour la description héro
    const heroDescription = document.querySelector('.hero p');
    if (heroDescription && donnees.accueil?.hero?.description) {
        heroDescription.textContent = donnees.accueil.hero.description;
        console.log('✅ Description héro mise à jour');
    }
    
    console.log('🎉 Contenu appliqué avec succès !');
}

// Garder toutes vos fonctions existantes
function setupExistingFunctions() {
    // Ces fonctions restent exactement comme dans votre HTML original
    
    // Fonction pour changer de page
    window.showPage = function(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));
        
        document.getElementById(pageId).classList.add('active');
        
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => link.classList.remove('active'));
        
        const activeLink = document.querySelector(`nav a[onclick="showPage('${pageId}')"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        window.scrollTo(0, 0);
    };
    
    // Fonction pour la newsletter
    window.handleNewsletter = function(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        alert(`Merci ! Votre inscription à la newsletter avec l'email ${email} a été prise en compte.`);
        event.target.reset();
    };
    
    // Fonction pour le contact (garde celle-ci au cas où)
    window.handleContact = function(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        
        // Note: Vous pourriez modifier ceci pour rediriger vers Instagram par exemple
        const mailtoLink = `mailto:bijj.inspire@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
        
        alert('Votre client email va s\'ouvrir avec le message pré-rempli. Merci !');
    };
    
    console.log('✅ Fonctions existantes configurées');
}

// Animation du header (de votre code original)
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (!header) return;
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// Ajouter la transition au header
window.addEventListener('load', function() {
    const header = document.querySelector('header');
    if (header) {
        header.style.transition = 'transform 0.3s ease-in-out';
    }
});
