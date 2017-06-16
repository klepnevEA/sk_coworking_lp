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

			if(this.id === 'forId-0') {
				$('#id-0').addClass('active');
			} else if(this.id === 'forId-1') {
				$('#id-1').addClass('active');
			} else if(this.id === 'forId-2') {
				$('#id-2').addClass('active');
			} else if(this.id === 'forId-3') {
				$('#id-3').addClass('active');
			} 
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


	/*кнопка верхнего меню*/

	$('.dropdown-menu__link').on('click', function() {

		$('.header').toggleClass('open-menu');
	})
});