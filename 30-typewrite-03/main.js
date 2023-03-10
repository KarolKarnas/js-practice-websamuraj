// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3'];

let letterIndex = 0;
let arrIndex = 0;

const addLetter = () => {
	spnText.textContent += txt[arrIndex][letterIndex];
	letterIndex++;
	if (letterIndex === txt[arrIndex].length) {
		arrIndex++;
		if (arrIndex === txt.length) return;

        return setTimeout(() => {
            letterIndex = 0;
            spnText.textContent = '';
            setTimeout(addLetter, 100)
        }, 1000);

	}
    
	setTimeout(addLetter, 100);

	// Użyj w środku setTimeout
};

addLetter(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
	spnCursor.classList.toggle('active');
};
setInterval(cursorAnimation, 400);
