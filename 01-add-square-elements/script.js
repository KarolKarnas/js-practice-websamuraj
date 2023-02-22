const btn = document.querySelector('button');

let number = 1;
const addElement = function () {
	const div = document.createElement('div');
	div.textContent = number;
	document.body.appendChild(div);
	if (number % 5 === 0) {
		div.classList.add('circle');
	}
	number++;
	console.log(number);
};

btn.addEventListener('mousemove', addElement);
