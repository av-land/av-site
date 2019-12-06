$(document).ready(function(){


	$(".leaves").hide();
	$(".hero-image").hide();

	//$(".tiles").css({opacity: 0});

	$(".hero-image").fadeIn(6000);

	var scrolled = false;



	// scroll-top button for mobile,
	// and x animation
	$(document).scroll(function(){
		// div class haha

		var scrollTop = $(document).scrollTop();
		
		var header = $("#info").offset().top - 200;

		var tiles = $(".tiles").offset().top - 400;

		console.log("tiles is "+tiles);

		console.log("scrollTop is "+scrollTop);

		if (scrolled == true) {

			console.log('scrolled is true');

		} else {
			$("html, body").animate({ scrollTop: header }, 2000);
			scrolled = true;
			console.log('scrolled is false');
		}

		
		if (scrollTop > tiles) {
			$(".tiles").animate({opacity: .8}, 1000);
			console.log('yes');
		} else {
			console.log('else');	
		}


		// $("#intro").animate({
		// 	height: 0
		// }, 5000);

	});






});