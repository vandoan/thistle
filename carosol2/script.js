

// http://www.designchemical.com/blog/index.php/jquery/jquery-image-swap-gallery/


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
		$("#gallery li img").each(function(){
			// for each thumb
			imgUrl = this.src.replace('thumb/', '');
				// take away the thumb 
			imgSwap.push(imgUrl); 
				// and put it in the box
		}); 
		$(imgSwap).preload(); 
	}); 
$.fn.preload = function(){
	this.each(function(){
		$('<img/>')[0].src = this;

	});
}




