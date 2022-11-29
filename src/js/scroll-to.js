(() => {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const header = document.getElementsByTagName('header')[0];

    function scrollToSection(element) {
        const elementToNavigate = document.querySelector(`#${element.target.dataset.navLink}`);

        scrollTo(0, elementToNavigate.offsetTop - 100);
    } 

    navLinks.forEach((navLink) => navLink.addEventListener('click', scrollToSection));

    window.onscroll = (event) => {
        if (window.scrollY > 0) {
            header.classList.add('header--border');
        } else {
            header.classList.remove('header--border');
        }
    }
})();
