var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navList = document.querySelector('.main-nav__list');
var mediaWidth = window.matchMedia('(min-width: 1200px)');

navList.classList.add('main-nav__list--closed');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('main-nav__list--closed')) {
    navList.classList.remove('main-nav__list--closed');
    navList.classList.add('main-nav__list--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
    navMain.classList.add('main-nav--opened');

  } else {
    navList.classList.add('main-nav__list--closed');
    navList.classList.remove('main-nav__list--opened');
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
    navMain.classList.remove('main-nav--opened');
  }
});

function windowCheck(e) {
  if (e.matches && navList.classList.contains('main-nav__list--opened')) {
    navMain.classList.remove('main-nav--opened');
  }
  else if (!e.matches && navList.classList.contains('main-nav__list--opened')) {
    navMain.classList.add('main-nav--opened');
  }
}

mediaWidth.addListener(windowCheck);
