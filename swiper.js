import Swiper from "./node_modules/swiper/swiper-bundle.min.mjs";

let button = document.querySelector('.switch');
let wrapper = document.querySelector('.swiper');
let text = document.querySelector('.switch__text');
let fl = true;

function swiperInit() {
  var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

button.addEventListener('click', function () {
  if (fl === true) {
    wrapper.classList.add('active');
    text.textContent = 'Скрыть';
    fl = false;
  }
  else {
    wrapper.classList.remove('active');
    text.textContent = 'Показать все';
    fl = true;
  }
});

if (window.screen.width <= 320) {
  console.log(window.screen.width);
  swiperInit();
}