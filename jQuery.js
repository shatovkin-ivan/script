// выпадающие окна

$('.arrow-bottom').on('click', function(event) {
	event.preventDefault();
	 $(this).parents('.explore__input').find('.dropdown').slideToggle();
})

const listItem = $('.dropdown a');

$(listItem).on('click', function(event) {
	event.preventDefault();
	$(this).parents('.explore__wrap').find('.explore__input input').val($(this).text());
	console.log();
	$('.dropdown').slideUp(300);
});

// паралакс

$window = $(window);
$('section[data-type="background"]').each(function () {
	const $bgobj = $(this);
	$(window).scroll(function () {
		const yPos = -($window.scrollTop() / $bgobj.data('speed'));
		const coords = '50% ' + yPos + 'px';
		$bgobj.css({ backgroundPosition: coords });
	});
});

// модальное окно

$('[data-modal=consulting]').on('click', function () {
	$('.overlay, #consulting').fadeIn();
})
$('.modal__close').on('click', function () {
	$('.overlay, #consulting').fadeOut()
})

// Скролл

$('a.anchor').click(function(e){
	if ( $(window).width() > 768) {
	e.preventDefault();
	var elClick = $(this).attr('href');
	var dest = $(elClick).offset().top;
		$('html:not(:animated),body:not(:animated)').animate({scrollTop : dest}, 1000);
	}
});

// выпадающее меню //переписать

$('.arrow-btn').on('click', function(event) {
  event.preventDefault();
	$('.dropdown__links').slideToggle();
})
const listItem = $('.dropdown__link');
const dropdownInput = $('.dropdown__input input');

$(listItem).on('click', function(){
	$(this).parents('.dropdown__wrap').find('.dropdown__input input').val($(this).text());
	$('.dropdown__links').slideUp(300);
});


if ( $(window).width() < 768 ) {
	const listItem = $('.portfolio__subtitle');
	const portfolioInput = $('.portfolio__menu-mobile input');

$('.portfolio__btn').on('click', function(event) {
	event.preventDefault();
		$('.portfolio__links').slideToggle();
	});

$(listItem).on('click', function(event){
	event.preventDefault();
	$(this).parents('.portfolio__wrap').find('.portfolio__menu-mobile input').val($(this).text());
	$('.portfolio__links').slideUp(300);
	});
}

$('.menu__wrap a').on('click', function(e) {
	e.preventDefault();
	 $(this).parent('.menu__wrap').find('.menu__dropdown').slideToggle();
	 $(this).parent('.menu__wrap').find('.menu__arrow').toggleClass('menu__arrow_active');
})

Бургер jQuery

$('.hamburger').on('click', function(){
		$('.menu').toggleClass('menu_active'),
		$('.hamburger').toggleClass('hamburger_active');
		$('body').toggleClass('overflow');
	})

