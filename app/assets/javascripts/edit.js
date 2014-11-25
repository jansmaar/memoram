$(document).ready(function() {
    // var x = 0;
    // $('.element').each(function() {
    //     x++;
    //     $(this).draggable({
    //         containment: $('.parent')
    //     });
    //     $(this).resizable({
    //         containment: $('.parent')
    //     });
    // });

	$(function() {
    	$('.image').resizable({
    		aspectRatio: true
		});

    	$('.image').draggable();
  	});
	
	$(function() {
    	$( ".input_front1" ).draggable();
  	});
	
	$(function() {
    	$( ".element3" ).resizable();
    	$( ".element3" ).draggable();
  	});

	

	
});