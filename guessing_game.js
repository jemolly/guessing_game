var colors = ["белый", "желтый", "зеленый", "коричневый", "красный", "оранжевый", "синий", "фиолетовый", "черный"];
var finished = false;
var colors_en = ["white", "yellow", "green", "brown", "red", "orange", "blue", "purple", "black"];
var user_input;
var chosen_col;
var counter = 0;
var chosen;

function guessing() {
	chosen = Math.floor(Math.random()*9);
	chosen_col = colors[chosen];
	console.log(chosen_col);

	while(!finished) {
	user_input = prompt ("Загадан цвет, который принесет тебе удачу на этой неделе, угадаешь ли ты его?\n\n Выбери из предложенных:\n\n" + colors.join(", "));
	counter++;
	finished = check();
	console.log(typeof user_input);
		}
}

function check() {
		if (user_input == chosen_col) {
			var back = document.getElementById("back");
			back.style.background = colors_en[chosen];
			alert("Ты угадал! На этой неделе твой счастливый цвет - " + chosen_col + "!\n\n Число твоих попыток: " + counter);
			return true;
		}
		if (typeof user_input == "object") {
			var ans = confirm("Если не хочешь дальше угадывать свой счатливый цвет нажми OK");
			 if (ans) {
			  return true;
			}
		}
		if (colors.indexOf(user_input) == -1) {
			alert("Я не могу распознать цвет!");
			return false;
		}

		if (user_input<chosen_col) {
			alert("Ты не угадал, попытайся еще! \n\n Подсказка: в алфавитном порядке загаданный цвет идет после того, который ты ввел.");
			return false;
		}
		if (user_input>chosen_col) {
			alert("Ты не угадал, попытайся еще! \n\n Подсказка: в алфавитном порядке загаданный цвет идет перед тем, который ты ввел.");
			return false;
		}
}