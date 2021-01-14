$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="images/dest/logo-1.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function() {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function() {
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carousel-services()
		}, 100);	
	});
	$('.carousel-services').owlCarousel({
		loop: true, //зацикленная
		nav: true,
		smartSpeed: 700, //скорость
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	$('.carousel-services-content').equalHeights();

	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths = $(this),
					thsh = ths.find('.carousel-services-content').outerHeight();
					ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	// Resize Window
	function onResize() {
		$('.carousel-services-content').equalHeights();
	}
	onResize();

	window.onresize = function() {onResize()};

});
