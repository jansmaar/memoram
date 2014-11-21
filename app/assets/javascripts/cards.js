// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function(){

		$( ".edit" ).resizable();
  	
        $(".edit").mouseover(function(){		
			$(".ui-resizable-handle").css( "display", "block !important");
    		$(".edit").css("border","2px red dotted");
    		$(".edit").draggable({ snap: true });
    	});	

		$(".edit").mouseleave(function() {
  			$(".edit").css( "border", "none" );
  			
		});
    	
	var current_step = 0;
	var step = $('.step');
	var card = $('.card');
	var choose_step = $('ul.choose_step li');
	$('.prev').hide();

	var highlightStep = function(current_step) {
		choose_step.each(function(key, value){
			var highlight = (key == current_step) ? $(value).addClass('active') : $(value).removeClass('active');
		})
	}

	choose_step.click(function() {
		console.log($(this))
		$(this).addClass('active');
		move(key);
	});

	var move = function(current_step) {
		$('.step').removeClass('show')
		$('.card').removeClass('show')
		
		step.each(function(key, value){
			if (key == current_step) {
				$(value).addClass('show')

				var prev = ($(value).prev('.step').length) == 0 ? ($('.prev').hide()) : ($('.prev').show());

				var next = ($(value).next('.step').length) == 0 ? ($('.next').hide()) : ($('.next').show());

			}
			highlightStep(current_step);
		});
		card.each(function(key, value){
			if (key == current_step) {
				$(value).addClass('show')

			}
			highlightStep(current_step);
		});
	}

	$('.next').click(function() {
			current_step += 1
			move(current_step);

		    if ($('#two').hasClass('show')){
		 	$('.cardright').addClass('show');
		        } else {
		            $('.cardright').removeClass('show');
		    }
        });

	$('.prev').click(function() {
			current_step -= 1
			move(current_step);

		    if ($('#two').hasClass('show')){
		 	$('.cardright').addClass('show');
		        } else {
		            $('.cardright').removeClass('show');
		    }
        });
});

// Live weergave van input gebruiker
jQuery(document).ready(function($) {
	var input = $('.poem');
	var preview = $('.poem1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.name');
	var preview = $('.name1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.birthplace');
	var preview = $('.birthplace1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.lastresidence');
	var preview = $('.lastresidence1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.birthday');
	var preview = $('.birthday1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.deceasedon');
	var preview = $('.deceasedon1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.signed');
	var preview = $('.signed1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.input_front');
	var preview = $('.input_front1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.parting_information');
	var preview = $('.parting_information1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

// upload van foto live weergave
$(document).ready(function(){
    var preview = $(".upload-preview img");
    
    $(".file").change(function(event){
       var input = $(event.currentTarget);
       var file = input[0].files[0];
       var reader = new FileReader();
       reader.onload = function(e){
           image_base64 = e.target.result;
           preview.attr("src", image_base64);
       };
       reader.readAsDataURL(file);
    });


});

$(document).ready(function(){
    var preview = $(".upload-preview_one img");
    
    $(".file_one").change(function(event){
       var input = $(event.currentTarget);
       var file = input[0].files[0];
       var reader = new FileReader();
       reader.onload = function(e){
           image_base64 = e.target.result;
           preview.attr("src", image_base64);
       };
       reader.readAsDataURL(file);
    });


});

// datepicker
$(function() {
        $( ".birthday" ).datepicker({
            dateFormat : 'dd/mm/yy',
            changeMonth : true,
            changeYear : true,
            yearRange: '-110y:c+nn',
            maxDate: '-0d'
        });
    });

$(function() {
        $( ".deceasedon" ).datepicker({
            dateFormat : 'dd/mm/yy',
            changeMonth : true,
            changeYear : true,
            yearRange: '-110y:c+nn',
            maxDate: '-0d'
        });
    });