const div = document.querySelector('div');

let divX = 150;
let divY = 50;

div.style.left = divX + 'px';
div.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;


div.addEventListener('mousedown', function (e) {
	div.style.backgroundColor = 'grey';
    drawActive = !drawActive;

insertDivX = e.offsetX;
insertDivY = e.offsetY;

console.log(insertDivX, insertDivY);



});

div.addEventListener('mousemove', function (e) {
    if (drawActive) {
	divX = e.clientX - insertDivX;
	divY = e.clientY - insertDivY;

	div.style.left = `${divX}px`;
	div.style.top = `${divY}px`;

	// console.log(e.clientX, e.clientY);
    } 
});

div.addEventListener('mouseup', function (e) {
	div.style.backgroundColor = 'black';
    drawActive = !drawActive;
});
