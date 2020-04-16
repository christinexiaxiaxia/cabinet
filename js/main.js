// CLICK TO HIDE ORB LANDING PAGE

$('.orb').click(function() {
	$('.title.main').animate({'opacity':'0'}, 1000);
	$('.orb').animate({
		'opacity': 0,
		'cursor': 'default',
		'z-index': '-200'
	}, 2000);
	// $(this).delay(2000).hide();
	$('.footer').animate({'opacity':'1'}, 1500);

	$('.cabinet').animate({'opacity':'1'}, 2500);
	$('.cabinet').css({'z-index':'100', 'cursor':'grab'})
	$('.cabinet').mousedown({'cursor':'grabbing'});
})


// QUESTION MARK HOVER/ABOUT

$('.about').hover(function(){
	$('.desc.main').css({'opacity':'1'})
}, function(){
	$('.desc.main').css({'opacity':'0'})
})


// DRAGGABLE CABINET

$('.cabinet').draggable({
	containment: "parent", 
	// scroll: false,
 //    zIndex: 10000
});
// $('.cabinet').draggable();