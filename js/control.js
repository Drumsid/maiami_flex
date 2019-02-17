$(function(){

	'use strict';

	// плавный скролл
	$('a[href^="#"]').click(function(){
		let target = $(this).attr('href');
		$('html, body').animate(
			{
				scrollTop:$(target).offset().top
			},
			800
		);
	})

	//фиксированое меню
	let offset = $('#nav-btn').offset();

	$(window).scroll(function(){

		if ( $(window).scrollTop() > offset.top ) {
			$('#nav-btn').addClass('top-fix');
		} else {
			$('#nav-btn').removeClass('top-fix');
		}

	});

	// if (window.innerWidth > 1024) {
	// 	$('#slide-s').slick({
	// 		slidesToShow: 3,
	//   		slidesToScroll: 1,
	//   		autoplay: true,
	//   		autoplaySpeed: 2000,
	// 	});
	// } else {
	// 	$('#slide-s').slick({
	// 		slidesToShow: 1,
	//   		slidesToScroll: 1,
	//   		autoplay: true,
	//   		autoplaySpeed: 2000,
	// 	});
	// }

    // слайдер слик
		$('#slide-s').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  responsive: [ {
		    breakpoint: 1024,
		    settings: {
		      slidesToShow: 1,
		    },
		  } ],
		});


		//модальное окно
		$('.modal-box, .black-fill').hide();

		$('.top-call').click(function() {
			$('.modal-box, .black-fill').show();
		});

		$('.close-modal, .black-fill').click(function() {
			$('.modal-box, .black-fill').hide();
		});
});