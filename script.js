// ======== HEADER ========== //
// Cattura del DOM
let banner= document.getElementById('banner');
let navbar= document.getElementById('navbar');
let navLinks= document.querySelector('.nav-links');
let logoImg= document.getElementById('logo-img');
let navIcon= document.getElementById('nav-icon');

// Cattura delle altezze
let bannerHeight= banner.clientHeight;
let navbarHeight= navbar.clientHeight;

let banNavHeight= bannerHeight + navbarHeight;

// Gestione eventi
navIcon.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains("active")) {
        navIcon.textContent = "✕";
    } else {
        navIcon.textContent = "☰";
    }
})

if(window.innerWidth < 1050){
    logoImg.src= "./media/logo_black.svg";
}

window.addEventListener('scroll', ()=>{
    if(window.innerWidth < 1050){
        if(window.scrollY > banNavHeight){
            logoImg.src= './media/logo_black.svg';
        }
    }
    else{
        if(window.scrollY > banNavHeight){
            navbar.classList.add('scrolled');
            logoImg.src= './media/logo_black.svg';
        }
        else{
            navbar.classList.remove('scrolled');
            logoImg.src= './media/logo_white.svg';
        }
    }
})


// SWIPER JS
let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    breakpoints: {
        // when window width is >= 320px
        660: {
          spaceBetween: 45
        },
        1681: {
            slidesPerView: 2,
            spaceBetween: 45
        },
        1920:{
           slidesPerView: 2.5,
           spaceBetween: 45
        }
    },
    navigation: {
        nextEl: '.swiper-custom-button-next',
        prevEl: '.swiper-custom-button-prev',
    },
});

// ANIMAZIONE SERVIZI
let swiper2 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".soluzioni-abitative .swiper-custom-button-next",
      prevEl: ".soluzioni-abitative .swiper-custom-button-prev",
    },
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        660: {
          spaceBetween: 45
        },
        1681: {
            slidesPerView: 2,
            spaceBetween: 45
        },
        1920:{
           slidesPerView: 2.5,
           spaceBetween: 45
        }
    }
});