// Hide Menu

const closeButton = document.querySelectorAll('.close-menu');

function hideMenu() {
  document.querySelector('.app-menu').classList.replace('menu-show', 'menu-hide');
}

closeButton.forEach((btn) => btn.addEventListener('click', hideMenu));

// Show menu

const burgerMenu = document.querySelector('.burger-menu');

function showMenu() {
  document.querySelector('.app-menu').classList.replace('menu-hide', 'menu-show');
}

burgerMenu.addEventListener('click', showMenu);