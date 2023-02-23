let size = 10;
let orderElement = 1;

const init = () => {
const container = document.createElement('div');
document.body.appendChild(container);

	const btn = document.createElement('button');
	btn.textContent = 'Dodaj 10 elemenetnów do listy';
	container.appendChild(btn);
    
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset'
	container.appendChild(resetBtn);

	const ul = document.createElement('ul');
	document.body.appendChild(ul);

	btn.addEventListener('click', createLiElements);
	resetBtn.addEventListener('click', resetList);
};

const createLiElements = () => {
	const ul = document.querySelector('ul');
	for (let i = 0; i < 10; i++) {
		const li = document.createElement('li');
		li.textContent = `Element nr ${orderElement++}`;
		li.style.fontSize = `${size++}px`;
		ul.appendChild(li);
     }
};

const resetList = () => {


// const allLi = document.querySelectorAll('li');
// allLi.forEach(el => {
//     el.remove();
// })

document.querySelector('ul').textContent = "";

orderElement = 1;
size = 10;
}

init();
