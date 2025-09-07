
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' de todos os links
            navLinks.forEach(l => l.classList.remove('active'));

            // Remove 'show' de todas as seções
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('show');
            });

            // Adiciona 'active' no link clicado
            this.classList.add('active');

            // Mostra a seção correspondente
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.classList.add('show');
            }
        });
    });
});
