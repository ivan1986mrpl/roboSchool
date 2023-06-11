// Подключение свайпера
import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.treiners__content', {
  //slidesPerView: 'auto',
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,

  scrollbar: {
    el: '.treiners__scroll',
    draggable: true,
  },

  navigation: {
    nextEl: '.treiners__slider-btn_next',
    prevEl: '.treiners__slider-btn_prew',
  },

  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

});
