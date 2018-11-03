$(document).ready(function() {
	console.log('Hello my second year of suffering');


	$('.ork-img').click(function() {

		alert('Привет хозяин!');

		name = prompt('Как вас завут?');
		gold = prompt('Хозяин ' + name + ' сколько у вас золота?');

		if (gold > 1000) {
			alert('Хозяин ' + name + ' на старте столько денег не бывает - так что теперь у тебя 340 золота');
		} else if (gold <= 0) {
			alert('Хозяин ' + name + ' так не бывает, хозяин - у тебя будет 340 золота');
		} else {
			alert('Ok');
		}
	});


});