// выделение активного пункта меню

let menuItem = document.querySelectorAll('.menu a');
	menuItem.forEach(item => {
		item.addEventListener('click', selectElement)
	});
	function selectElement() {
		menuItem.forEach(item => {
			item.classList.remove('list-active');
		})
		this.classList.add('list-active');
	}

// модальное окно

window.addEventListener('DOMContentLoaded', () => {
	const modal = document.querySelector('[data-modal=modal]'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.modal__close');

	modal.addEventListener('click', () => {
		overlay.classList.add('show');
		overlay.classList.remove('hide');
	});
	close.addEventListener('click', () => {
		overlay.classList.add('hide');
		overlay.classList.remove('show');
	})
})

// Табы

let tab = function () {
	let tabNav = document.querySelectorAll('.tabs__item'),
		tabContent = document.querySelectorAll('.tabs__description'),
		tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}
	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('is-active') :
				item.classList.remove('is-active');
		})
	}
}
tab();

// Бургер

window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
		hamburger = document.querySelector('.hamburger'),
		body = document.querySelector('body');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
		body.classList.toggle('overflow');
	});
});

// Квадратные картинки

window.onload = function() {
	const images = document.querySelectorAll('.cards__item');

	autoResize(images);

	window.addEventListener('resize', () => {
		autoResize(images);
	})
}
function autoResize(imagesElements) {
	for(let i = 0; i < imagesElements.length; i++) {
		const elementWidth = imagesElements[i].offsetWidth;
		imagesElements[i].style.height = elementWidth + "px";
	}
}

// фиксированное меню

window.addEventListener('scroll', function() {
	const header = document.querySelector('.header'),
		slider = document.querySelector('.slider'),
		height = slider.offsetHeight;

		function scroll() {
			if (window.pageYOffset > height) {
				header.classList.add('header_fixed');
			}
			else {
				header.classList.remove('header_fixed');
			}
		}
	scroll();
})

// Валидация

document.addEventListener('submit', function(e) {
	e.preventDefault();

	const from = document.querySelectorAll('.fancy__modal_input'),
	submit = document.querySelector('.submit');

	for(let i = 0; i < from.length; i++) {
		const input = from[i],
			inputValue = from[i].value;
		if(inputValue == '') {
		
			input.nextElementSibling.style.opacity = '1';
			input.nextElementSibling.style.zIndex = '999';
		}
	}
});