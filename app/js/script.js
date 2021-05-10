"use strict";

// меню

let menuButton = document.querySelector('.header__menu-btn'),
		menu = document.querySelector('.header__bottom');

menuButton.addEventListener('click', () => {
	menu.classList.toggle('open');
	menuButton.classList.toggle('open');

	if (menu.classList.contains('open')) {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'auto';
	}
});


// слайдер в hero

var swiper = new Swiper(".hero__slider", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 50000,
		disableOnInteraction: false,
	},
	loop: true
});

// модальные окна

const btnContactModal = document.querySelectorAll('[data-contact-modal]'),
			btnRequestModal = document.querySelectorAll('[data-request-modal]'),
			btnClose = document.querySelectorAll('[data-close]'),
			modals = document.querySelectorAll('.modal'),
			modalContact = document.querySelector('#contactModal'),
			modalRequest = document.querySelector('#requestModal'),
			body = document.querySelector('body');

let scrollWidth = window.innerWidth - document.documentElement.clientWidth;

function openModal(modal) {
	modal.classList.remove('hide');
	modal.classList.add('show');
	body.style.overflow = 'hidden';
	body.style.paddingRight = scrollWidth + 'px';
}

btnContactModal.forEach(item => {
	item.addEventListener('click', () => openModal(modalContact));
});

btnRequestModal.forEach(item => {
	item.addEventListener('click', () => openModal(modalRequest));
});

function closeModal(modal) {
	modal.classList.remove('show');
	modal.classList.add('hide');
	body.style.overflow = 'auto';
	body.style.paddingRight = 0 + 'px';
}

modals.forEach(item => {
	btnClose.forEach(btn => {
		btn.addEventListener('click', () => closeModal(item));
	});
});

modals.forEach(item => {
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && item.classList.contains('show')) {
			closeModal(item);
		}
	});
});

modals.forEach(item => {
	document.addEventListener('click', (e) => {
		if (e.target && e.target.classList.contains('modal__inner')) { 
			closeModal(item);
		}
	});
});