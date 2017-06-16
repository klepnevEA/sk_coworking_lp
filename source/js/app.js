'use strict';

$(document).ready(function() {

	//Сендвич
	$(".sandwich__select").click(function(){
		$(this).toggleClass('active');
		$('.sandwich__list').toggleClass('active');

		$(".sandwich__item").click(function(){
			$(".sandwich__item").removeClass('select');
			$(this).toggleClass('select');
			var $itemText = $(this).text();
			$('.sandwich__select span').text($itemText);
		});

	});



	//слайдер верний
	$(".slider-main__wrap").slick({
		dots: false,
		arrows: true
	});
	


	//слайдер нижний
	$(".slider-bottom__wrap").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows: true,
		responsive: [
			{
			breakpoint: 1250,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
			breakpoint: 1050,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
			breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			
		]
	});
});