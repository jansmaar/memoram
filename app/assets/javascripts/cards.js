// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
    	
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
    var preview = $(".image img");
    
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

// font slider
$(function() {
    var aFontsSizeArray = new Array('5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '24', '26', '28', '30', '33', '36', '39', '42', '45', '48', '55', '65', '75', '85', '95', '110', '130', '150');
    $('#slider').slider({
        value: 7,
        min: 1,
        max: 35,
        step: 1,
        slide: function(event, ui) {
            var sFontSizeArray = aFontsSizeArray[ui.value];
            $('#font_size').val(sFontSizeArray + ' px');
            $('.changeMe').css('font-size', sFontSizeArray + 'px' );
        }
    });
    $('#font_size').val((aFontsSizeArray[$('#slider').slider('value')]) + ' px');
});

jQuery(document).ready(function($) {
    $('#color1').colorPicker();
    $('#color1').change(function(){

        $(function() {
            var bgColor = $('#color1').val();
         
            $('.input_front1').css('color','' + bgColor)
        });
    });
    $("#fs").change(function() {
    //alert($(this).val());
        $('.changeMe').css("font-family", $(this).val());
    });
  });

// bg image picker
$(document).ready(function(){
$('#menu').click(function(){
$('#thumb').slideToggle('slow');
});
$('#thumb img').click(function(){
 var imgbg = $(this).attr('src');
 //console.log(imgbg);
 $('.card.show').css({ 'opacity' : 0.2 });
 $('.card.show').css({backgroundImage: "url("+imgbg+")"});
 $('.card.show').css({'background-size': 'cover'});
 });

"background-size", "cover"

 $('#menu1').click(function(){
 $('#thumb').hide();

 });

});


