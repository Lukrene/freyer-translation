jQuery(document).ready(function ($) {

	var my_nav = $('.navbar-sticky');
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = my_nav.offset().top;

	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function () {
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		var nav_height = my_nav.outerHeight();

		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) {
			if (!my_nav.hasClass('stick')) {
				my_nav.addClass('stick');
				$('body').css('padding-top', nav_height);
			}
		} else {
			if (my_nav.hasClass('stick')) {
				my_nav.removeClass('stick');
				$('body').css('padding-top', 0);
			}
		}
	};

	var initio_parallax_animation = function () {
		var $parallax = $('.parallax');
		if ($parallax.length === 0) { return; }
		$parallax.each(function (i, obj) {
			var speed = $(this).data('parallax-speed');
			if (speed) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css('background-position', 'center ' + background_pos);
			}
		});
	}

	// run our function on load
	sticky_navigation();

	// and run it again every time you scroll
	$(window).scroll(function () {
		sticky_navigation();
		initio_parallax_animation();
	});

});
