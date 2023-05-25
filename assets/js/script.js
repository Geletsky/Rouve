window.onscroll = () => {
	const header = document.querySelector('.header');

	if (window.pageYOffset > 200) {
		header.classList.add('_fixed');
	} else {
		header.classList.remove('_fixed');
	}
}

function menuBurger() {
	const menuButton = document.querySelector('.menu__icon');
	const menuBody = document.querySelector('.menu__body');
	const menuActions = document.querySelector('.menu__actions');

	function toggleMenu() {
		document.body.classList.toggle('_lock');
		menuButton.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		menuActions.classList.toggle('_active');
	}

	menuButton.addEventListener('click', toggleMenu);

	window.addEventListener('scroll', () => {
		if (menuBody.classList.contains('_active')) {
			toggleMenu();
		}
	});
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

	btnDarkMode.addEventListener("click", function (event) {
		event.preventDefault();
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

			document.querySelector(".gallery__link").click();
		}
	}
}

tabs();

function activeSection() {
	if (document.querySelectorAll(".section-target").length > 0) {
		const sections = document.querySelectorAll('.section-target');
		const sectionsLinks = document.querySelectorAll('.section-link');
		window.addEventListener("scroll", () => {

			currentIndex = 0;
			sections.forEach((section, index) => {
				if (section.offsetTop -60 <= window.scrollY) {
					currentIndex = index;
				}
			});

			const currentSectionId = sections[currentIndex].getAttribute('id');

			sectionsLinks.forEach((link) => {
				const linkId = link.getAttribute('href').replace('#', '');
				if (linkId == currentSectionId) {
					link.classList.add('_active');
				} else {
					link.classList.remove('_active');
				}
			});
		});
	}
}

activeSection();

function scrollToSections() {
	document.querySelectorAll('.section-link').forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			const href = this.getAttribute('href').substring(1);
			const section = document.getElementById(href);

			const topOffset = (window.innerWidth <= 480) ? 60 : 0;
			const sectionPosition = section.getBoundingClientRect().top;
			const offsetPosition = sectionPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			})
		})
	})
}

scrollToSections();