$(function() {

	/*Онлайн заявка*/
	$('.h-application').fancybox();

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

	


});