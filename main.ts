document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = (event.target as HTMLAnchorElement).getAttribute('href')!.substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection?.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
