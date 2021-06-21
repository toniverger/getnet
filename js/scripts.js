$(window).on('load', function() {
	$('.menuBtn').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('openMenu');
		$('.menuMobile').slideToggle();
	})
})