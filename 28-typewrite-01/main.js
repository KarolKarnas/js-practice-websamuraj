// let number = 0;
// const addLetter2 = () => {
// 	console.log('ok');
// 	number++;
// 	if (number === 200) clearInterval(indexTyping2);
// };

// const indexTyping2 = setInterval(addLetter2, 50);

const spnText = document.querySelector('.text');
const txt =
	'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC';

// Parametry
let indexText = 0;
const time = 40;

// Implementacja
const addLetter = () => {
	spnText.textContent += txt[indexText];
	indexText++;
	if (indexText === txt.length) clearInterval(indexTyping);
};
const indexTyping = setInterval(addLetter, time);
