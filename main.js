// Hide Menu

const closeButton = document.querySelectorAll('.close-menu');

function hideMenu() {
  document.querySelector('.app-menu').classList.replace('menu-show', 'menu-hide');
}

closeButton[0].addEventListener('click', hideMenu);
closeButton[1].addEventListener('click', hideMenu);
closeButton[2].addEventListener('click', hideMenu);
closeButton[3].addEventListener('click', hideMenu);

// Show menu

const burgerMenu = document.querySelector('.burger-menu');

function showMenu() {
  document.querySelector('.app-menu').classList.replace('menu-hide', 'menu-show');
}

burgerMenu.addEventListener('click', showMenu);