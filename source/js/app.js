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
			$('.sandwich__list').removeClass('active');
			$('.sandwich__select').removeClass('active');
			$('.your-coworking__item-wrap').removeClass('active');

			if(this.id === 'forId-1') {
				$('#id-1').addClass('active');
			} else if(this.id === 'forId-2') {
				$('#id-2').addClass('active');
			} else if(this.id === 'forId-3') {
				$('#id-3').addClass('active'); 
			} 
		});

	});

	//табы
	$(".tabs__link").click(function(e){
		e.preventDefault();
		var $that = $(this),
			$thatVal = $that.data('tab');
		$('.tabs__link').removeClass('active');
		$that.addClass('active');
					
		$('.your-coworking__item-wrap').removeClass('active');
		$($thatVal).addClass('active');
	});



	//слайдер верний
	$(".slider-main__wrap").slick({
		dots: false,
		arrows: true
	});
	


	// //слайдер нижний
	// $(".slider-bottom__wrap").slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 4,
	// 	dots: true,
	// 	arrows: true,
	// 	responsive: [
	// 		{
	// 		breakpoint: 1250,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 3
	// 			}
	// 		},
	// 		{
	// 		breakpoint: 1050,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2
	// 			}
	// 		},
	// 		{
	// 		breakpoint: 767,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
			
	// 	]
	// });


	//слайдер отзывво
	$(".slider-reviews__wrap").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
	});


	/*кнопка верхнего меню*/
	$(window).resize(function(){
		if($( window ).width() > 1024 ) {
			$('.header').removeClass('open-menu');
		}
	});


	$('.dropdown-menu__link').on('click', function(e) {
		e.preventDefault();
		if($( window ).width() <= 1024) {
			$('.header').toggleClass('open-menu');
		}
	})


	//$('.selectpicker').selectpicker();


});