$(function() {

	/*Меню каталога*/
	$('.h-catalog__item').hover(function() {
		$(this).addClass('active');
		$(this).children('.h-catalog__submenu').stop(false, true).slideDown(200);
	}, function() {
		$(this).removeClass('active');
		$(this).children('.h-catalog__submenu').stop(false, true).slideUp(200);
	});
	$('.h-catalog__item .h-catalog__link').on('click', function() {
		return false;
	});

	
});