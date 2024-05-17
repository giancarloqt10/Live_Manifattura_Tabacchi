// SWIPER JS
let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
    // },
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
});


// let formGroup= document.querySelector('.form-group');
// let casella = formGroup.querySelectorAll('input');

// casella.addEventListener('click', function() {
//   // Rimuovi i bordi dell'input
//   casella.style.border = 'none';
//   casella.style.brackground = 'transparent';
// });