function scrollToAnchor(id){
    var tag = $("#" + id);
    $('html,body').animate({scrollTop: tag.offset().top - 80}, 1500);
    $('body').removeClass('openMenu');
	$('.menuMobile').slideUp();
}

$(window).on('load', function() {
	new WOW().init();
	var scene = $('.parallax');
    $.each(scene, function(i, s) {
        var parallaxInstance = new Parallax($(s)[0], {
          relativeInput: true
        });
    })

	$('.menuBtn').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('openMenu');
		$('.menuMobile').slideToggle();
	});

	$('.scrollToAnchor').on('click', function(e) {
		e.preventDefault();
		var id = $(this).data('anchor');
		scrollToAnchor(id);
	});
})