const swiper = new Swiper(".swiper", {
	direction: "horizontal",

	spaceBetween: 50,

	slidesPerView: "auto",

	navigation: {
		nextEl: ".feedbacks-button-next",
		prevEl: ".feedbacks-button-prev",
	},
});