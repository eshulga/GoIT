$(document).ready(function(){

    if($('.slider') !== 'undefined')
        $('.slider').slick({
            autoplay: false,
            nextArrow: '#slider-nav-next',
            prevArrow: '#slider-nav-prev',
        });

    var scroll_top_duration = 800;

    $('#to-top').on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

})