// Laptop animation

const laptopScreen = window.matchMedia('(min-width: 992px)');

if (laptopScreen.matches) {
	const tl = gsap.timeline();

	tl
		.set('.header, .intro__container', { visibility: 'visible' })
		.from('.header__logo', .4, { x: -20, opacity: 0 })
		.from('.menu__list li', .4, { x: -20, opacity: 0, stagger: .2 }, '-=.2')
		.from('.menu__dark-mode', .4, { x: -20, opacity: 0 }, '-=.6')


	//! Section - footer
	gsap.fromTo('.footer__logo', { x: -50, opacity: 0 }, {
		x: 0,
		opacity: 1,
		duration: 1,
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			toggleActions: "play restart play reverse",
		},
	});

	gsap.fromTo('.footer__social', { y: 20, opacity: 0 }, {
		y: 0,
		opacity: 1,
		duration: .5,
		stagger: .2,
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			toggleActions: "play restart play reverse",
		},
	});

	gsap.fromTo('.privacy-footer__link', { y: 20, opacity: 0 }, {
		y: 0,
		opacity: 1,
		duration: .5,
		stagger: .2,
		delay: .5,
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			toggleActions: "play restart play reverse",
		},
	});
}





