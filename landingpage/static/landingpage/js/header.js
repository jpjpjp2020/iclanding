document.addEventListener("DOMContentLoaded", function() {
    let menuOpen = false;
    const menuButton = document.querySelector('#menuButton');
    const closeButton = document.querySelector('#menuButtonClose');
    const mobileMenu = document.querySelector('#mobileMenu');

    function toggleMenu() {
        menuOpen = !menuOpen;
        if (menuOpen) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }

    menuButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);
});
