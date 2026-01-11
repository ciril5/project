// all swiper sliders


const mainSwiper = new Swiper(".main-slider", {
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },

  pagination: {
    el: ".main-slider .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".main-slider .swiper-button-next",
    prevEl: ".main-slider .swiper-button-prev",
  },
});


const trendingSlider = new Swiper(".trending-slider", {
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,

  pagination: {
    el: ".trending-slider .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".trending-slider .swiper-button-next",
    prevEl: ".trending-slider .swiper-button-prev",
  },
});


const logoSwiper = new Swiper(".logo-slider", {
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },



  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});








const kitsSwiper = new Swiper(".kits-slider", {
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },

  pagination: {
    el: ".kits-slider .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".kits-slider .swiper-button-next",
    prevEl: ".kits-slider .swiper-button-prev",
  },
});

const pcSwiper = new Swiper(".pc-slider", {
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30
    },
  },

  pagination: {
    el: ".pc-slider .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".pc-slider .swiper-button-next",
    prevEl: ".pc-slider .swiper-button-prev",
  },
});





