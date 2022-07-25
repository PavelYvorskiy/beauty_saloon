const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
const swiperTwo = new Swiper(".mySwiperTwo", {
  loop: true,
  autoplay: {
    delay: 1,
  },
  speed: 8000,
  breakpoints: {
    // when window width is >= 320px
    310: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 4,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 4,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 4,
    },
  },
});

const swiperThree = new Swiper(".mySwiperThree", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 6000,
});
const swiperFour = new Swiper(".mySwiperFour", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 1,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 8000,
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 4,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 4,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 4,
    },
  },
});

const swiperFive = new Swiper(".mySwiperFive", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
  },
});
