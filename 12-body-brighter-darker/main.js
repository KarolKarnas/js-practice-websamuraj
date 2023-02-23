/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let defaultColor = 100;
let incrementation = 5;

let red = defaultColor;
let green = defaultColor;
let blue = defaultColor;

const setColor = (val) => { 
document.body.style.backgroundColor = `rgb(${val}, ${val}, ${val})`;
}

setColor(defaultColor);

const changeColor = (e) => {
	// console.log(e.keyCode, e.which);
	// 38 - strzałka do góry
	// 40 - strzalka w dół

	switch (e.keyCode) {
		case 38:
      defaultColor += incrementation;
      defaultColor = Math.min(defaultColor, 255)
			console.log(defaultColor);
      setColor(defaultColor)
			break;
		case 40:
      defaultColor -= incrementation;
      defaultColor = Math.max(defaultColor, 0)
			console.log(defaultColor);
      setColor(defaultColor)
		// default:
		// 	console.log(e.keyCode);
		// 	break;
	}

	// wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0))
	//tutaj twój kod
	// wersja 1 - instrukcja if
	// wersja 2 - instrukcja switch
};

window.addEventListener('keydown', changeColor);
