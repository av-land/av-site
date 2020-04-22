$(document).ready(function(){


$(".leaves").hide();
$(".hero-image").hide();

//$(".tiles").css({opacity: 0});

$(".hero-image").fadeIn(6000, function(){
	$(".enter").animate({opacity: 1}, 400);
});

var scrolled = false;

$("body").css({overflow: "hidden"});

$(".enter").click(function(){
	$(".hero-image").fadeOut(400);
	$(".enter").fadeOut(400, function(){
		$(".content").animate({opacity: 1}, 600, function(){
			$(".trees").animate({opacity: 1}, 2000, function(){
				scrollani();
			});
		});
	});

	$("body").css({overflow: "scroll"});
});


// TO DO :
// have card and other content fade in on scroll

function scrollani() {
	$(document).scroll(function(){

		var scrollTop = $(document).scrollTop();

		console.log("scrollTop is "+scrollTop);
		
		if (scrollTop > 250) {
			$(".card").animate({opacity: 1}, 600);
			console.log('yes');
		} else {
			console.log('else');	
		}

	});

}


});