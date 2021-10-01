const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav__menu');
const navLogo = document.querySelector('#nav__logo');
// display mobile menu 

const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Sow Active menu

const highLightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');

    let scrollPos = window.scrollY


    // adds 'highlight' class to my menu items

    if(window.innerWidth > 960 && scrollPos <600 ){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return

    }
    else if (window.innerWidth >960 && scrollPos <1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth >960 && scrollPos <2345){
        aboutMenu.classList.remove('highlight')
        
        servicesMenu.classList.add('highlight')
        return
    }
    if((window.innerWidth > 960 && scrollPos <600) || elem) {
        elem.classList.remove('highlight')
    } 

}

window.addEventListener('scroll', highLightMenu)
window.addEventListener('click', highLightMenu)

const hideMobileMenu = () => {
    const menuBars = document.querySelector('is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);