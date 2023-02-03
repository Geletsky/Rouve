//! Меню для мобилбных устройств для header
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuFooter = document.querySelector(".menu__footer");
iconMenu.addEventListener("click", function (e) {
  document.body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  menuFooter.classList.toggle("_active");
});

//! Темная тема для сайта
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

//! Слайдер для секции feedbacks
const swiper = new Swiper(".swiper", {
  direction: "horizontal",

  spaceBetween: 50,

  slidesPerView: "auto",

  navigation: {
    nextEl: ".feedbacks-button-next",
    prevEl: ".feedbacks-button-prev",
  },
});

//! Валидация формы для секции connection
const formConnection = document.querySelector(".connection__form");
const inputsConnection = document.querySelectorAll(".connection__form-input");
const checkboxConnection = document.querySelector("input[type='checkbox']");

// Ставим событие на отправку формы
if (formConnection) {
  formConnection.addEventListener("submit", function (event) {
    // Проверяем если пользователь поставил флажок на checkbox
    if (!checkboxConnection.checked) {
      event.preventDefault();
      alert("Пожалуйста, установите флажок перед отправкой формы.");
    }
  });
}

// Проходимся по каждому input
for (let i = 0; i < inputsConnection.length; i++) {
  // Берем текущий input
  const input = inputsConnection[i];

  // Берем следущий элемент полсе input
  const label = input.nextElementSibling;

  // Ставим событие focus на текущий input
  input.addEventListener("focus", function () {
    label.style.display = "none";
  });

  // Ставим событие blur на текущий input
  input.addEventListener("blur", function () {
    if (!input.value) {
      label.style.display = "block";
    }
  });
}

//! Плавный переход к секциям
const sectionLinks = document.querySelectorAll(".section-link");
for (let i = 0; i < sectionLinks.length; i++) {
  sectionLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    let targetId = this.getAttribute("href");
    let target = document.querySelector(targetId);
    let top = target.offsetTop;
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
    menuFooter.classList.remove("_active");
  });
}

//! Фиксация шапки сверху
window.onscroll = function showHeader() {
  const header = document.querySelector(".header");

  if (window.pageYOffset > 200) {
    header.classList.add("_fixed");
  } else {
    header.classList.remove("_fixed");
  }
};

const tabsLinkTickets = document.querySelectorAll(".tabs-portfolio__link");
const tabsItemsTickets = document.querySelectorAll(".tabs-portfolio__block");

tabsLinkTickets.forEach(onTabClickTickets);

function onTabClickTickets(item) {
  item.addEventListener("click", function () {
    let currentLink = item;
    let linkId = currentLink.getAttribute("href");
    let currentBlock = document.querySelector(linkId);

    if (!currentLink.classList.contains("active")) {
      tabsLinkTickets.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItemsTickets.forEach(function (item) {
        item.classList.remove("active");
      });

      currentLink.classList.add("active");
      currentBlock.classList.add("active");
    }
  });
}

document.querySelector(".tabs-portfolio__link").click();
