// CLICK TO HIDE ORB LANDING PAGE

$('.orb').click(function() {
	$('.title.main').animate({'opacity':'0'}, 1000);
	$('.orb').animate({
		'opacity': 0,
		'z-index': '-200'
	}, 2000);
	// $(this).delay(2000).hide();
	$('.footer').animate({'opacity':'1'}, 1500);

	$('.cabinet').animate({'opacity':'1'}, 2500);
	// $('.cabinet').css({'z-index':'100', 'cursor':'grab'})
	$('.cabinet').css({'z-index':'100'})
	$('.cabinet').mousedown({'cursor':'grabbing'});
})


// QUESTION MARK HOVER/ABOUT

$('.about').hover(function(){
	$('.desc.main').css({'opacity':'1', 'z-index':'200'})
}, function(){
	$('.desc.main').css({'opacity':'0', 'z-index':'-200'})
})


// DRAGGABLE CABINET

$('.cabinet').draggable({
	containment: "parent"
});


// CLICK IMAGES TO OPEN NEW WINDOWS

// $('.saving-grace1').click(function(){
// 	window.open('img/saving-grace1.jpg');
// })
// $('.saving-grace2').click(function(){
// 	window.open('img/saving-grace2.jpg');
// })


// $('.classify-pain').click(function(){
// 	window.open('img/classify-pain.png');
// })