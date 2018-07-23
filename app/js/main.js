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
			$(this).addClass('active');
			$('.h-catalog__text').text('Закрыть меню');
			$('.h-catalog').stop(false, true).slideDown(200);
			$('.header__h-catalog').css({
				'background': '#000'
			});
			return false;
		});
		$('.h-catalog__item').on('click', function() {
			$(this).toggleClass('active');
			$(this).children('.h-catalog__submenu').slideToggle(200);
		});
	}

	


});