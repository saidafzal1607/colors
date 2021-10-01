"use strict";

var menu = document.querySelector('#mobile-menu');
var menuLinks = document.querySelector('.nav__menu');
var navLogo = document.querySelector('#nav__logo'); // display mobile menu 

var mobileMenu = function mobileMenu() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu); // Sow Active menu

var highLightMenu = function highLightMenu() {
  var elem = document.querySelector('.highlight');
  var homeMenu = document.querySelector('#home-page');
  var aboutMenu = document.querySelector('#about-page');
  var servicesMenu = document.querySelector('#services-page');
  var scrollPos = window.scrollY; // adds 'highlight' class to my menu items

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.classList.remove('highlight');
    servicesMenu.classList.add('highlight');
    return;
  }

  if (window.innerWidth > 960 && scrollPos < 600 || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highLightMenu);
window.addEventListener('click', highLightMenu);

var hideMobileMenu = function hideMobileMenu() {
  var menuBars = document.querySelector('is-active');

  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);