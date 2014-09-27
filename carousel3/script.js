 

 // http://www.designchemical.com/blog/index.php/jquery/slick-jquery-image-captions/


 	// fading captions

 $(document).ready(function() {
 	$('#gallery li').hover(
 		function() {$('span',this).fadeIn('slow'); }, 
 		function() {$('span',this).fadeOut('slow'); 
 	});
 });





 	// sliding captions

 // $(document).ready (function(){
 // 	$('#gallery li').hover(
 // 		function() {$('span',this).slideToggle('slow');}, 
 // 		function() {$('span',this).slideToggle('slow'); 
 // 	}); 
 // });
