function menuBurger() {
	const menuButton = document.querySelector('.menu__icon');
	const menuBody = document.querySelector('.menu__body');
	const menuActions = document.querySelector('.menu__actions');

	menuButton.addEventListener('click', () => {
		document.body.classList.toggle("_lock");
		menuButton.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		menuActions.classList.toggle('_active');
	})
}

menuBurger();

function darkMode() {
	const btnDarkMode = document.querySelector(".menu__dark-mode");

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
	const contactForm = document.querySelector(".form-contact");
	const contactInput = document.querySelectorAll(".form-contact__input");
	const contactChechbox = document.querySelector("input[type='checkbox']");

	if (contactForm) {
		contactForm.addEventListener("submit", function (event) {
			event.preventDefault();
			if (!contactChechbox.checked) {
				alert("Пожалуйста, установите флажок перед отправкой формы.");
			}
		});

		for (let i = 0; i < contactInput.length; i++) {
			const input = contactInput[i];

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
}

formValidation();

function tabs() {
	if (document.querySelectorAll(".gallery__link").length > 0) {
		const tabsLinkTickets = document.querySelectorAll(".gallery__link");
		const tabsItemsTickets = document.querySelectorAll(".gallery__content");

		if (tabsLinkTickets && tabsItemsTickets) {
			tabsLinkTickets.forEach(onTabClickTickets);

			function onTabClickTickets(item) {
				item.addEventListener("click", function (event) {
					event.preventDefault();
					let currentLink = item;
					let linkId = currentLink.getAttribute("href");
					let currentBlock = document.querySelector(linkId);

					if (!currentLink.classList.contains("_active")) {
						tabsLinkTickets.forEach(function (item) {
							item.classList.remove("_active");
						});

						tabsItemsTickets.forEach(function (item) {
							item.classList.remove("_active");
						});

						currentLink.classList.add("_active");
						currentBlock.classList.add("_active");
					}
				});
			}

			document.querySelector(".tabs-portfolio__link").click();
		}
	}
}

tabs();