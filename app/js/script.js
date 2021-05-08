"use strict";

var swiper = new Swiper(".hero__slider", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 50000,
		disableOnInteraction: false,
	},
	loop: true
});
