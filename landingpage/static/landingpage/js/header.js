console.log('Script loaded!');

document.addEventListener("DOMContentLoaded", function() {
    let menuOpen = false;
    const menuButton = document.querySelector('#menuButton');
    const mobileMenu = document.querySelector('#mobileMenu');

    menuButton.addEventListener('click', function() {
        menuOpen = !menuOpen;
        if (menuOpen) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    });
});