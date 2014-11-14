// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function(){
	
	var current_step = 0;
	var step = $('.step');
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
		
		step.each(function(key, value){
			if (key == current_step) {
				$(value).addClass('show')

				var prev = ($(value).prev('.step').length) == 0 ? ($('.prev').hide()) : ($('.prev').show());

				var next = ($(value).next('.step').length) == 0 ? ($('.next').hide()) : ($('.next').show());

			}
			highlightStep(current_step);
		});
	}

	$('.next').click(function(){
		current_step += 1
		move(current_step);
	});

	$('.prev').click(function(){
		current_step -= 1
		move(current_step);
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
	var input = $('.announcement');
	var preview = $('.announcement1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.first_name');
	var preview = $('.first_name1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.last_name');
	var preview = $('.last_name1');
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
	var input = $('.visitaddress');
	var preview = $('.visitaddress1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.funeral');
	var preview = $('.funeral1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});

jQuery(document).ready(function($) {
	var input = $('.correspondences');
	var preview = $('.correspondences1');
	input.keyup(function(e) {
		preview.html(input.val().replace(/\r\n|\r|\n/g, '<br />'));
	});
});