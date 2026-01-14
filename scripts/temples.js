document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent =
    `Last Modified: ${document.lastModified}`;

// Toggle navigation menu on small screens
const menuButton = document.querySelector('#menu');
const menuItems = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('open');
    menuButton.classList.toggle('open');
})