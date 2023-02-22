// tutaj rozwiązanie
let liFontSize = 10;

const btn = document.querySelector('button');
const liItems = document.querySelectorAll('li');

const growLi = function () {
	liFontSize += 2;
	liItems.forEach((li) => {
		li.style.display = 'block';
		li.style.fontSize = liFontSize + 'px';
	});
};

btn.addEventListener('click', growLi);
