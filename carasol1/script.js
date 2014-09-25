
	// http://jonraasch.com/blog/a-simple-jquery-slideshow
	// requires jquery

function slideSwitch() {
	var $active = $('#slideshow IMG.active'); 	// attach the id to the variable
	if ( $active.length == 0) $active = $('#slideshow IMG:last');	// if it's the first one, than it's last in line

	var $next = $active.next().length ? $active.next() 				// attach the action to the variable
		: $('#slideshow IMG:first');

	$active.addClass('last-active'); 			// active img gets last active and a z of 9
	$next.css({opacity: 0.0})					// the next img starts off invisible
		.addClass('active')						// gets the z of 10 and is now on top
		.animate({opacity: 1.0}, 5000, function() {   // fades in, 5 sec, 
			$active.removeClass('active last-active'); 	// clears the initial img of its classes
		});
}

$(function() {
    setInterval( "slideSwitch()", 7000 );
});








