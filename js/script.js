function menuBurger() {
	const iconMenu = document.querySelector(".menu__icon");
	const menuBody = document.querySelector(".menu__body");
	const menuFooter = document.querySelector(".menu__footer");
	const digitalButton = document.querySelector(".digital__button")
	iconMenu.addEventListener("click", function () {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
		menuFooter.classList.toggle("_active");
		digitalButton.classList.toggle("none");
	});

}

menuBurger();

function darkMode() {
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
}

darkMode();

function formValidation() {
	const formConnection = document.querySelector(".connection__form");
	const inputsConnection = document.querySelectorAll(".connection__form-input");
	const checkboxConnection = document.querySelector("input[type='checkbox']");

	if (formConnection) {
		formConnection.addEventListener("submit", function (event) {
			// Проверяем если пользователь поставил флажок на checkbox
			if (!checkboxConnection.checked) {
				event.preventDefault();
				alert("Пожалуйста, установите флажок перед отправкой формы.");
			}
		});
	}

	for (let i = 0; i < inputsConnection.length; i++) {
		const input = inputsConnection[i];

		const label = input.nextElementSibling;

		input.addEventListener("focus", function () {
			label.style.display = "none";
		});

		input.addEventListener("blur", function () {
			if (!input.value) {
				label.style.display = "block";
			}
		});
	}
}

formValidation();

function activeSection() {
	if (document.querySelectorAll(".section").length > 0) {
		const sections = document.querySelectorAll('.section');
		const sectionsLinks = document.querySelectorAll('.section-link');
		window.addEventListener("scroll", () => {

			currentIndex = 0;
			sections.forEach((section, index) => {
				if (section.offsetTop <= window.scrollY) {
					currentIndex = index;
				}
			});

			const currentSectionId = sections[currentIndex].getAttribute('id');
			let sectionFound = false;

			sectionsLinks.forEach((link) => {
				const linkId = link.getAttribute('href').replace('#', '');
				if (linkId == currentSectionId) {
					link.classList.add('active');
					sectionFound = true;
				} else {
					link.classList.remove('active');
				}
			});

			if (!sectionFound) {
				sectionsLinks.forEach((link) => {
					link.classList.remove('active');
				});
			}
		});
	}
}

activeSection();

function scrollToSection() {
	const iconMenu = document.querySelector(".menu__icon");
	const menuBody = document.querySelector(".menu__body");
	const menuFooter = document.querySelector(".menu__footer");
	const sectionsLinks = document.querySelectorAll('.section-link');
	sectionsLinks.forEach(function (link) {
		link.addEventListener("click", (event) => {
			event.preventDefault();
			const targetId = link.getAttribute('href');
			const targetPosition = document.querySelector(targetId).offsetTop;

			window.scrollTo({
				top: targetPosition,
				behavior: "smooth"
			});

			document.body.classList.remove("_lock");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
			menuFooter.classList.remove("_active");
		});
	});

}

scrollToSection();

window.onscroll = function showHeader() {
	const header = document.querySelector('.header');

	if (window.pageYOffset > 200) {
		header.classList.add('_fixed');
	} else {
		header.classList.remove('_fixed');
	}
}

function tabs() {
	if (document.querySelectorAll(".tabs-portfolio__link").length > 0) {
		const tabsLinkTickets = document.querySelectorAll(".tabs-portfolio__link");
		const tabsItemsTickets = document.querySelectorAll(".tabs-portfolio__block");

		if (tabsLinkTickets && tabsItemsTickets) {
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
		}
	}
}

tabs();