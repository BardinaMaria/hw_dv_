const g = document.querySelector('g');
const circle = document.querySelector('circle');

var checkbox = document.getElementById('input_checkbox');

checkbox.onclick = function (){
	var label = document.getElementById('label');
	var smile = document.getElementById('smile');

	if (checkbox.checked === true) {
		label.innerHTML = "Happy"
		smile.setAttribute('d', "M 170 200 Q 245 300 320 200");
	}
	else {
		label.innerHTML = "Sad"
		smile.setAttribute('d', "M 170 250 Q 245 150 320 250");
	}
};