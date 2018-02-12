$(document).ready(function () {
	var nav = $('nav')
	
	$('.scrollspy').scrollSpy({scrollOffset: 70});
	$('.parallax').parallax();

	nav.pushpin({
		top: nav.offset().top
	});

});