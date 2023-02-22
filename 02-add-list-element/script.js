const btn = document.querySelector('button');
const ul = document.querySelector('ul');
let counter = 1;
const createLiElement = function () {
	const liElem = document.createElement('li');
	liElem.textContent = counter;
	if (counter % 3 === 0) {
		liElem.classList.add('third');
	}

	ul.appendChild(liElem);
	counter += 2;
};

btn.addEventListener('click', createLiElement);
