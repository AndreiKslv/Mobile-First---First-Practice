$(function(){
	$('.promo__top').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		  {
			breakpoint: 640,
			settings: {
				arrows: false,
			}
		  }
		]
	  });
})

$(function(){
	$('.quote__slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		  {
			breakpoint: 640,
			settings: {
				arrows: false,
			}
		  }
		]
	  });
})