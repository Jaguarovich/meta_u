// анимация старт

// ждем полной загрузки страницы
window.onload = () => {
  // устанавливаем настройки
  const options = {
    // родитель целевого элемента - область просмотра
    root: null,
    // отступ снизу
    rootMargin: "-40px",
    // процент пересечения - половина изображения
    threshold: 1,
  };

  // создаем наблюдатель
  const observer = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach((entry) => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting) {
        //       // добавить ему CSS-класс
        entry.target.classList.add("anime-active");
      }
    });
  }, options);
  // выбираем обьект слежения по классу
  observer.observe(document.querySelector(".logo1"));
  observer.observe(document.querySelector(".logo2"));
  observer.observe(document.querySelector(".logo3"));
  observer.observe(document.querySelector(".token_info"));
  observer.observe(document.querySelector("#tokenomica_1"));
  observer.observe(document.querySelector("#tokenomica_2"));
  observer.observe(document.querySelector("#tokenomica_3"));
  observer.observe(document.querySelector("#tokenomica_4"));
  observer.observe(document.querySelector("#tokenomica_5"));
  observer.observe(document.querySelector("#tokenomica_6"));
  observer.observe(document.querySelector("#partners_logo_1"));
  observer.observe(document.querySelector("#partners_logo_2"));
  observer.observe(document.querySelector(".background_mobile"));
  observer.observe(document.querySelector(".future_logo"));
  observer.observe(document.querySelector(".goals_container > img"));

};

// Слайдер начало
const swiper = new Swiper(".swiper", {
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    456: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 1.8,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
    1920: {
      spaceBetween: 90,
    },
  },
  autoplay: {
    disableOnInteraction: false,
    delay: 3000,
  },
  // mousewheel: {
  //   sensitivity: 5,
  //   eventsTarget: ".swiper-wrapper",
  // },
  touchRatio: 1.5,
  slidesPerView: 3,
  centeredSlides: true,
  direction: "horizontal",
  effect: "coverflow",
  longSwipesMs: 100,
  speed: 600,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slideToClickedSlide: true,
});

const swiper2 = new Swiper(".swiper2", {
  autoplay: {
    delay: 800,
    disableOnInteraction: false,
  },
  mousewheel: {
    sensitivity: 5,
    eventsTarget: ".swiper-wrapper",
  },

  touchRatio: 1,
  slidesPerView: "auto",
  direction: "horizontal",
  longSwipesMs: 100,
  speed: 800,
  spaceBetween: 47,
  slideToClickedSlide: true,
  loop: true,
});

$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(
      ".header_burger, .menu_mobile, .lang_mobile, .header_burger_line1, .header_burger_line2, .header_burger_line3, .block_mobile_menu > span, .main_container, body"
    ).toggleClass("active");
  });
});
