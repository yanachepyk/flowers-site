import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles

const blogSLiderPrevBtn = document.querySelector('.blog__button-prev');
const blogSLiderNextBtn = document.querySelector('.blog__button-next');

const blogSwiper = new Swiper('.blog-swiper', {
  modules: [Navigation, Pagination],
  // Default parameters
  slidesPerView: 3,
  spaceBetween: '6%',
  // Responsive breakpoints
  navigation: {
    nextEl: blogSLiderNextBtn,
    prevEl: blogSLiderPrevBtn,
  },
  //loop: true,
  initialSlide: 1,
  breakpoints: {
    // when window width is >= 768px
    768: {
      spaceBetween: 60,
    },
    // when window width is >= 1280px
    1280: {
      spaceBetween: 68,
    },
  },
});
