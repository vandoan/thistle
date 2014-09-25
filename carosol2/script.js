

// http://www.designchemical.com/blog/index.php/jquery/jquery-image-swap-gallery/
// http://www.designchemical.com/blog/index.php/jquery/create-image-preloader-image-swap-function-jquery/

$(document).ready(function() {
	// image swap on hover
	$("#gallery li img").hover(function(){
		// when you hover over an image,
		$('#main-img').attr('src', $(this).attr('src').replace('thumb/', '')); 
			// with  the main image's attribute and source,
			// replace the source with this image and 
			// take away its thumb which enlarges it 
}); 

	// image preload 
	var imgSwap =[]; 
		// the container

		$("#gallery li img").each(function(){
			// get all the images, a loop
			imgUrl = this.src.replace('thumb/', '');
				// with the code, remove the thumb/  
			imgSwap.push(imgUrl); 
				// and add it in the box

		}); 
		$(imgSwap).preload(); 
			// prepare it
	}); 

$.fn.preload = function(){
	this.each(function(){
		$('<img/>')[0].src = this;

	});
}




