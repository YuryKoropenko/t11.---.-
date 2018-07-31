$(function() {

	/*Онлайн заявка*/
	$('.h-application').fancybox();
	$('.h-callback__button').fancybox();

	$('.h-catalog__item .h-catalog__link').on('click', function() {
		return false;
	});

	if( $(window).width() >= 992 ) {
		/*Меню каталога*/
		$('.h-catalog__item').hover(function() {
			$(this).addClass('active');
			$(this).children('.h-catalog__submenu').stop(false, true).slideDown(200);
		}, function() {
			$(this).removeClass('active');
			$(this).children('.h-catalog__submenu').stop(false, true).slideUp(200);
		});
	}
	if( $(window).width() < 992 ) {
		/*мобильное меню каталога*/
		$('.h-catalog__mobbtn').on('click', function() {
			$(this).toggleClass('active');
			$('.header__h-catalog').toggleClass('header__h-catalog-active');
			$('.h-catalog').stop(false, true).slideToggle(200);
			$('.h-catalog__text-hide').toggle();
			$('.h-catalog__text-show').toggle();
			return false;
		});
		$('.h-catalog__link').on('click', function() {
			if($(this).hasClass('active') == true) {
				$(this).removeClass('active');
				$(this).parent().children('.h-catalog__submenu').slideUp(200);
			} else {
				$('.h-catalog__link').removeClass('active');
				$('.h-catalog__submenu').slideUp(200);
				$(this).toggleClass('active');
				$(this).parent().children('.h-catalog__submenu').slideToggle(200);
			}
		});
	}

	/*мобильная навигация*/
	if( $(window).width() < 768 ) {
		$('.h-nav__mobbtn').on('click', function() {
			/*ширина выпадающего меню*/
			var windowswidth = $(window).width();
			var widthcont = $('.header__top .row').width();
			var widthleft = -((windowswidth - widthcont) / 2);
			$('.h-nav').width(windowswidth);
			$('.h-nav').css({
				'margin-left': widthleft
			});
			/*Выпадающее меню*/
			$(this).toggleClass('active');
			$('.header__top').toggleClass('header__top-active');
			$('.h-nav').stop(false, true).slideToggle(200);
			$('.h-nav__text-hide').toggle();
			$('.h-nav__text-show').toggle();
			return false;
		});
	}

	/*замена картинки на телефоне footer*/
	if( $(window).width() < 768 ) {
		$('.footer').css('background-image', 'url(img/footer-mob-bg.jpg)');
	}
	/*переопределение позиции*/
	if( $(window).width() < 992 ) {
		$('.col-lg-3').removeClass('order-first');
	}
	/**/
	var lsliderwidth = $('.p-leftslider__subimg').width();
	$('.p-leftslider__subimg').height(lsliderwidth);

	/*левое меню каталога*/
	$('.p-left__link').on('click', function() {
		if($(this).parent('.p-left__item').hasClass('active') == true) {
			$(this).parent('.p-left__item').removeClass('active');
			$(this).parent('.p-left__item').children('.p-left__list-1').slideUp(200);
			return false;
		} else {
			$('.p-left__item').removeClass('active');
			$('.p-left__list-1').slideUp(200);
			$(this).parent('.p-left__item').toggleClass('active');
			$(this).parent('.p-left__item').children('.p-left__list-1').slideToggle(200);
			return false;
		}
	});
	$('.p-left__link-1').on('click', function() {
		if($(this).parent('.p-left__item-1').hasClass('active') == true) {
			$(this).parent('.p-left__item-1').removeClass('active');
			$(this).parent('.p-left__item-1').children('.p-left__last').slideUp(200);
			return false;
		} else {
			$('.p-left__item-1').removeClass('active');
			$('.p-left__last').slideUp(200);
			$(this).parent('.p-left__item-1').toggleClass('active');
			$(this).parent('.p-left__item-1').children('.p-left__last').slideToggle(200);
			return false;
		}
	});

	/*Гармокшка - карточка товара*/
	$('.p-harmonic__link').on('click', function() {
		if($(this).parent('.p-harmonic__item').hasClass('active') == true) {
			return false;
		} else {
			$('.p-harmonic__item').removeClass('active');
			$('.p-harmonic__description').slideUp(200);
			$(this).parent('.p-harmonic__item').toggleClass('active');
			$(this).parent('.p-harmonic__item').children('.p-harmonic__description').slideToggle(200);
			return false;
		}
	});

	/*select в карточке товара*/
	$('.p-card__numb').on('click', function() {
		$(this).parent('.p-card__select').toggleClass('active');
		$(this).parent('.p-card__select').children('.p-card__unit').slideToggle(200);
		$(document).click(function(event) {
			if ($(event.target).closest('.p-card__unit').length) return;
				$('.p-card__select').removeClass('active');
				$('.p-card__unit').slideUp(200);
				event.stopPropagation();
			});
		return false
	});
	$('.p-card__sublink').on('click', function() {
		var text = $(this).text();
		$('.p-card__numb').text(text);
		$('.p-card__select').removeClass('active');
		$('.p-card__unit').slideUp(200);
		return false;
	});


});