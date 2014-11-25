$(document).on("click", ".ui-resizable-ne", function(){
   $(this).parent().remove();
});

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
    // })
	   

    	// $('.image').resizable({ handles: "se, ne", aspectRatio: true });

    	$( ".image" ).resizable({ handles: "se, ne", aspectRatio: true, autoHide: true });
        $( ".voorkant-text").resizable({autoHide: true });
    	$( "#canvas >" ).draggable();

});