function slider() {
	const swiper = new Swiper(".swiper", {
		direction: "horizontal",

		spaceBetween: 50,

		speed: 800,

		slidesPerView: "auto",

		navigation: {
			nextEl: ".buttons-feedbacks__next",
			prevEl: ".buttons-feedbacks__prev",
		},
	});
}

slider();