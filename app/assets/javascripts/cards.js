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