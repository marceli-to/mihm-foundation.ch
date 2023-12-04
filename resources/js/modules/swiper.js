import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
  },
});

swiper.on('slideChange', function (swiper) {
  const activeSlide = swiper.slides[swiper.activeIndex];
  // get data attributes from active slide
  const slideTitle = activeSlide.getAttribute('data-slide-title');
  const slideText = activeSlide.getAttribute('data-slide-text');

  // update data-project-title and data-project-text
  // get elements by querySelector
  const projectTitle = document.querySelector('[data-project-title]');
  const projectText = document.querySelector('[data-project-text]');
  // update elements
  projectTitle.textContent = slideTitle;
  projectText.textContent = slideText;

});