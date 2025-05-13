// Animation au scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Gestion du formulaire de contact avec EmailJS
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupération des valeurs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Paramètres pour EmailJS
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Envoi de l'email
    emailjs.send('service_tfqkaea', 'template_n10326d', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            // Réinitialisation du formulaire
            contactForm.reset();
            // Feedback utilisateur
            alert('Message envoyé avec succès !');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        });
});

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 