// Меню для мобилбных устройств
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuFooter = document.querySelector(".menu__footer");
iconMenu.addEventListener("click", function (e) {
  document.body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  menuFooter.classList.toggle("_active");
});
const btnDarkMode = document.querySelector(".dark-mode-btn");

// Проверка темы на уровне системы
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("_active");
  document.body.classList.add("dark");
}

// Проверка темы в local storage
if (localStorage.getItem("darkMode") == "dark") {
  btnDarkMode.classList.add("_active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") == "light") {
  btnDarkMode.classList.remove("_active");
  document.body.classList.remove("dark");
}
// Смена темы на сайта
btnDarkMode.addEventListener("click", function (e) {
  btnDarkMode.classList.toggle("_active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",

  spaceBetween: 50,

  slidesPerView: 'auto',

  navigation: {
    nextEl: ".feedbacks-button-next",
    prevEl: ".feedbacks-button-prev",
  },
});
