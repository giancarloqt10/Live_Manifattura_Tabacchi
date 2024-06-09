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

// Aggiungi gestore eventi per il click sul logo
document.querySelector('.logo a').addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    // Scorri fluidamente all'elemento
    smoothScroll(targetElement, navbarHeight);
});

// Gestione eventi
navIcon.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains("active")) {
        navIcon.textContent = "✕";
    } else {
        navIcon.textContent = "☰";
    }
})

// Funzione per scorrimento fluido
function smoothScroll(target, offset) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Aggiungi gestore eventi per i link della navbar
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        // Chiudi la navbar mobile se è aperta
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navIcon.textContent = "☰";
        }

        // Scorri fluidamente all'elemento
        smoothScroll(targetElement, navbarHeight);
    });
});

if(window.innerWidth < 1050){
    logoImg.src= "./media/logo_black.svg";
}

// Cambiare logo quando si scrolla
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

// ======= PROGETTO ======== //
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


// ====== SOLUZIONI ABITATIVE ========
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

// ====== CONTATTI ======= //
// Invia dati del form
let form= document.getElementById('form');
let submit= document.getElementById('submit');

form.addEventListener('submit', function (event){
    event.preventDefault();
    let formData= new FormData(form);

     // Iterare attraverso i dati del form
    formData.forEach((value, key) => {
        // Visualizzare i dati nella console
        console.log(key + ': ' + value);
    });
    // Svuotare i campi del form
    form.reset();
})