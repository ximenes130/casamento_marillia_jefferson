// Initializing variables

var Animations = {},
	owlData = {
		loop: true,
		margin: 10,
		center:true,
		autoWidth:true,
		lazyLoad:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	}


// Initializing plugins

$(document).ready(function() {
			var nav = $('nav')

			$('.scrollspy').scrollSpy({ scrollOffset: 70 });
			$('.parallax').parallax();

			nav.pushpin({
				top: nav.offset().top
			});

			$(".owl-carousel").owlCarousel(owlData);

			$('.history-next').click(historyNext)
		});


// Handling events

function historyNext() {
	Animations.exitRight("#history .flow-text, #history h3")
	Animations.enterLeft("#history .flow-text, #history h3")
}


// Setting Animations

Animations.enterLeft = function (selectorOrEl) {
	var element = $(selectorOrEl)
	element.velocity({ opacity: "0", translateX: "-100px" }, { duration: 0 });
	element.velocity({ opacity: "1", translateX: "0" }, { duration: 1200, easing: [60, 10] });
};

Animations.exitRight = function (selectorOrEl) {
	var element = $(selectorOrEl)
	element.velocity({ opacity: "0", translateX: "100px" }, { duration: 1200, easing: [60, 10] });
};