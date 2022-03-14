const menubars = document.querySelector('#menubars');
const menu = document.querySelector('#slidemenu');
const close = document.querySelector('#close');
const navItems = document.querySelectorAll('.menuitems li');

menubars.addEventListener('click', toggleMenu);
close.addEventListener('click', removeClass);


function toggleMenu() {
  menu.classList.add('show');
  navItems.forEach(item => item.classList.add('show'));
}

function removeClass() {
  menu.classList.remove('show');
  navItems.forEach(item => item.classList.remove('show'));
}
