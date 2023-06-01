// Laptop animation

const laptopScreen = window.matchMedia('(min-width: 992px)');
const touchScreen = window.matchMedia('(min-width: 320px) and (max-width: 991.98px)');

if (laptopScreen.matches) {
	const tl = gsap.timeline();

	tl
		.set('.header, .intro__container', { visibility: 'visible' })
		.set(".intro__button", { opacity: 0, scale: 0, })
		.from('.header__logo', .4, { x: -20, opacity: 0 })
		.from('.menu__list li', .4, { x: -20, opacity: 0, stagger: .2 }, '-=.2')
		.from('.menu__dark-mode', .4, { x: -20, opacity: 0 }, '-=.6')
		.from('.intro__mask-text', 1, { y: 100, opacity: 0, stagger: .2 }, '-=1.3')
		.from('.intro__decor', 1, { height: 0, opacity: 0 }, '-=1.3')
		.from('.intro__subtitle', 1, { y: 50, opacity: 0 }, '-=.7')
		.to(".intro__button", .8, { y: -100, opacity: 1, scale: 1, ease: "power2.out" }, '-=1.3')
		.to(".intro__button", .7, { y: 0, ease: "bounce.out" }, '-=.8')


	//! Section - gallery
	gsap.fromTo('.gallery__link', { y: 50, opacity: 0 }, {
		y: 0,
		opacity: 1,
		stagger: .5,
		duration: 1.5,
		scrollTrigger: {
			trigger: '.gallery',
			start: '-5% center',
			toggleActions: "play restart play reverse"
		}
	});

	const tabLinks = document.querySelectorAll('.gallery__link');
	tabLinks.forEach((link) => {
		link.addEventListener('click', () => {
			
			const portfolioItemsLeft = document.querySelectorAll('.gallery__items-left .item-gallery');

			portfolioItemsLeft.forEach((item) => {
				gsap.fromTo(item, { x: -800, opacity: 0 }, {
					x: 0,
					opacity: 1,
					duration: 1.5,
					scrollTrigger: {
						trigger: item,
						start: '-70% center',
						toggleActions: "play restart play reverse"
					}
				});
			});

			const portfolioItemsRight = document.querySelectorAll('.gallery__items-right .item-gallery');

			portfolioItemsRight.forEach((item) => {
				gsap.fromTo(item, { x: 800, opacity: 0 }, {
					x: 0,
					opacity: 1,
					duration: 1.5,
					scrollTrigger: {
						trigger: item,
						start: '-70% center',
						toggleActions: "play restart play reverse"
					}
				});
			});

			//! Section - contact
			gsap.fromTo('.contact__media', { x: -50, opacity: 0 }, {
				x: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '.contact',
					start: '-5% center',
					toggleActions: "play restart play reverse"

				}
			});

			gsap.fromTo('.contact__header', { y: 100, opacity: 0 }, {
				y: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '.contact__header',
					start: '-150% center',
					toggleActions: "play restart play reverse"
				}
			});

			gsap.fromTo('.form-contact__line', { y: 50, opacity: 0 }, {
				y: 0,
				opacity: 1,
				stagger: .2,
				duration: 1,
				scrollTrigger: {
					trigger: '.contact',
					start: '20% center',
					toggleActions: "play restart play reverse"
				},
			});

			gsap.fromTo('.form-contact__privacy', { y: 50, opacity: 0 }, {
				y: 0,
				opacity: 1,
				duration: 1, delay: 1,
				scrollTrigger: {
					trigger: '.contact',
					start: '20% center',
					toggleActions: "play restart play reverse"
				},
			});

			gsap.fromTo('.form-contact__button', { x: 60, opacity: 0 }, {
				x: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '.contact',
					start: '20% center',
					toggleActions: "play restart play reverse",
				},
			});


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
		});
	});

	const portfolioItemsLeft = document.querySelectorAll('.gallery__items-left .item-gallery');

	portfolioItemsLeft.forEach((item) => {
		gsap.fromTo(item, { x: -800, opacity: 0 }, {
			x: 0,
			opacity: 1,
			duration: 1.5,
			scrollTrigger: {
				trigger: item,
				start: '-70% center',
				toggleActions: "play restart play reverse"
			}
		});
	});

	const portfolioItemsRight = document.querySelectorAll('.gallery__items-right .item-gallery');

	portfolioItemsRight.forEach((item) => {
		gsap.fromTo(item, { x: 800, opacity: 0 }, {
			x: 0,
			opacity: 1,
			duration: 1.5,
			scrollTrigger: {
				trigger: item,
				start: '-70% center',
				toggleActions: "play restart play reverse"
			}
		});
	});


	//! Section - contact
	gsap.fromTo('.contact__media', { x: -50, opacity: 0 }, {
		x: 0,
		opacity: 1,
		duration: 1,
		scrollTrigger: {
			trigger: '.contact',
			start: '-5% center',
			toggleActions: "play restart play reverse"

		}
	});

	gsap.fromTo('.contact__header', { y: 100, opacity: 0 }, {
		y: 0,
		opacity: 1,
		duration: 1,
		scrollTrigger: {
			trigger: '.contact__header',
			start: '-150% center',
			toggleActions: "play restart play reverse"
		}
	});

	gsap.fromTo('.form-contact__line', { y: 50, opacity: 0 }, {
		y: 0,
		opacity: 1,
		stagger: .2,
		duration: 1,
		scrollTrigger: {
			trigger: '.contact',
			start: '20% center',
			toggleActions: "play restart play reverse"
		},
	});

	gsap.fromTo('.form-contact__privacy', { y: 50, opacity: 0 }, {
		y: 0,
		opacity: 1,
		duration: 1, delay: 1,
		scrollTrigger: {
			trigger: '.contact',
			start: '20% center',
			toggleActions: "play restart play reverse"
		},
	});

	gsap.fromTo('.form-contact__button', { x: 60, opacity: 0 }, {
		x: 0,
		opacity: 1,
		duration: 1,
		scrollTrigger: {
			trigger: '.contact',
			start: '20% center',
			toggleActions: "play restart play reverse",
		},
	});


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

if (touchScreen.matches) {
	const tl = gsap.timeline();

	tl
		.set('.header, .intro__container', { visibility: 'visible' })
		.set(".intro__button", { opacity: 0, scale: 0, })
		.from('.header__logo', .4, { x: -20, opacity: 0 })
		.from('.menu__list li', .4, { x: -20, opacity: 0, stagger: .2 }, '-=.2')
		.from('.menu__dark-mode', .4, { x: -20, opacity: 0 }, '-=.6')
		.from('.intro__mask-text', 1, { y: 100, opacity: 0, stagger: .2 }, '-=1.3')
		.from('.intro__decor', 1, { height: 0, opacity: 0 }, '-=1.3')
		.from('.intro__subtitle', 1, { y: 50, opacity: 0 }, '-=.7')
		.to(".intro__button", .8, { y: -50, opacity: 1, scale: 1, ease: "power2.out" }, '-=1.3')
		.to(".intro__button", .7, { y: 0, ease: "bounce.out" }, '-=.8')

	//! Section - gallery
	gsap.fromTo('.gallery__link', { y: 50, opacity: 0 }, {
		y: 0,
		opacity: 1,
		stagger: .5,
		duration: 1.5,
		scrollTrigger: {
			trigger: '.gallery',
			start: '-5% center',
			toggleActions: "play restart play reverse"
		}
	});

	const tabLinks = document.querySelectorAll('.gallery__link');
	tabLinks.forEach((link) => {
		link.addEventListener('click', () => {

			const portfolioItemsLeft = document.querySelectorAll('.gallery__items-left .item-gallery');

			portfolioItemsLeft.forEach((item) => {
				gsap.fromTo(item, { y: 100, opacity: 0 }, {
					y: 0,
					opacity: 1,
					duration: 1.5,
					scrollTrigger: {
						trigger: item,
						start: '-100% center',
						toggleActions: "play restart play reverse"
					}
				});
			});

			const portfolioItemsRight = document.querySelectorAll('.gallery__items-right .item-gallery');

			portfolioItemsRight.forEach((item) => {
				gsap.fromTo(item, { y: 100, opacity: 0 }, {
					y: 0,
					opacity: 1,
					duration: 1.5,
					scrollTrigger: {
						trigger: item,
						start: '-100% center',
						toggleActions: "play restart play reverse"
					}
				});
			});


			//! Section - contact
			gsap.fromTo('.contact__header', { y: 100, opacity: 0 }, {
				y: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '.contact__header',
					start: '-200% center',
					toggleActions: "play restart play reverse"
				}
			});

			gsap.fromTo('.form-contact__line', { y: 50, opacity: 0 }, {
				y: 0,
				opacity: 1,
				stagger: .2,
				duration: 1,
				scrollTrigger: {
					trigger: '.contact',
					start: '10% center',
					toggleActions: "play restart play reverse"
				},
			});

			gsap.fromTo('.form-contact__privacy', { y: 50, opacity: 0 }, {
				y: 0,
				opacity: 1,
				duration: 1, delay: 1,
				scrollTrigger: {
					trigger: '.contact',
					start: '10% center',
					toggleActions: "play restart play reverse"
				},
			});

			if (window.innerWidth <= 767.98) {
				gsap.fromTo('.form-contact__button', { x: -60, opacity: 0 }, {
					x: 0,
					opacity: 1,
					duration: 1,
					scrollTrigger: {
						trigger: '.form-contact__button',
						start: '-150% center',
						toggleActions: "play restart play reverse",
					},
				});
			} else {
				gsap.fromTo('.form-contact__button', { x: -60, opacity: 0 }, {
					x: 0,
					opacity: 1,
					duration: 1,
					scrollTrigger: {
						trigger: '.contact',
						start: '10% center',
						toggleActions: "play restart play reverse",
					},
				});
			}

			//! Section - footer
			gsap.fromTo('.footer__logo', { y: 50, opacity: 0 }, {
				y: 0,
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
		});
	});


	//! Section - gallery
	const portfolioItemsLeft = document.querySelectorAll('.gallery__items-left .item-gallery');

	portfolioItemsLeft.forEach((item) => {
		gsap.fromTo(item, { y: 100, opacity: 0 }, {
			y: 0,
			opacity: 1,
			duration: 1.5,
			scrollTrigger: {
				trigger: item,
				start: '-100% center',
				toggleActions: "play restart play reverse"
			}
		});
	});

	const portfolioItemsRight = document.querySelectorAll('.gallery__items-right .item-gallery');

	portfolioItemsRight.forEach((item) => {
		gsap.fromTo(item, { y: 100, opacity: 0 }, {
			y: 0,
			opacity: 1,
			duration: 1.5,
			scrollTrigger: {
				trigger: item,
				start: '-100% center',
				toggleActions: "play restart play reverse"
			}
		});
	});

	//! Section - contact
	gsap.fromTo('.contact__header', { y: 100, opacity: 0 }, {
		y: 0,
		opacity: 1,
		duration: 1,
		scrollTrigger: {
			trigger: '.contact__header',
			start: '-200% center',
			toggleActions: "play restart play reverse"
		}
	});

	gsap.fromTo('.form-contact__line', { y: 50, opacity: 0 }, {
		y: 0,
		opacity: 1,
		stagger: .2,
		duration: 1,
		scrollTrigger: {
			trigger: '.contact',
			start: '10% center',
			toggleActions: "play restart play reverse"
		},
	});

	gsap.fromTo('.form-contact__privacy', { y: 50, opacity: 0 }, {
		y: 0,
		opacity: 1,
		duration: 1, delay: 1,
		scrollTrigger: {
			trigger: '.contact',
			start: '10% center',
			toggleActions: "play restart play reverse"
		},
	});

	if (window.innerWidth <= 767.98) {
		gsap.fromTo('.form-contact__button', { x: -60, opacity: 0 }, {
			x: 0,
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: '.form-contact__button',
				start: '-150% center',
				toggleActions: "play restart play reverse",
			},
		});
	} else {
		gsap.fromTo('.form-contact__button', { x: -60, opacity: 0 }, {
			x: 0,
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: '.contact',
				start: '10% center',
				toggleActions: "play restart play reverse",
			},
		});
	}

	//! Section - footer
	gsap.fromTo('.footer__logo', { y: 50, opacity: 0 }, {
		y: 0,
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