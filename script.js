document.addEventListener("DOMContentLoaded", function() {
    // Animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            const offsetTop = target.offsetTop;

            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Hervorheben des aktiven Navigationslinks beim Scrollen
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes('#' + current)) {
                link.classList.add('active');
            }
        });
    });
});
