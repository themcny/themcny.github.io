$(document).ready(function(){
	arrow_keys();
});

var arrow_keys = function(){
	$(document).keydown(function(e){
		e.preventDefault();

		if (e.which === 37) {
			move_left();
			console.log('left');
		} else if (e.which === 38) {
			move_up();
			console.log('up');
		} else if (e.which === 39) {
			move_right();
			console.log('right')
		} else if (e.which === 40){
			move_down();
			console.log('down')
		} else if (e.which === 17) {
			kick();
			console.log('ctrl')
		} else if (e.which === 18) {
			punch();
			console.log('alt')
		} else if (e.which === 90) {
			special();
			console.log('z')
		}
	});	
} 

var move_left = function(){
	$('#hero').finish().animate({
		left: "-=5"
	});
	$('#hero').addClass('walkleft');
	setInterval(function() { $('#hero').removeClass('walkleft') }, 1500);
}

var move_right = function(){
	$('#hero').finish().animate({
		left: "+=5"
	});
	$('#hero').addClass('walkright');
	setInterval(function() { $('#hero').removeClass('walkright') }, 1500);
}

var move_up = function(){
	$('#hero').finish().animate({
		top: "-=5"
	})
}

var move_down = function(){
	$('#hero').finish().animate({
		top: "+=5"
	})
}

var punch = function(){
	$('#hero').addClass('punch');
	setInterval(function() { $('#hero').removeClass('punch') }, 1500);
}

var kick = function(){
	$('#hero').addClass('kick');
	setInterval(function() { $('#hero').removeClass('kick') }, 1500);
}

var special = function(){
	$('#hero').addClass('sword');
	setInterval(function() { $('#hero').removeClass('sword') }, 1500);
}