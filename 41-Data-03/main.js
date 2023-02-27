// http://websamuraj.pl/examples/js/projekt11/

const mainBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const display = document.querySelector('.time div');

let time = 0
let activeTime = true;
let intervalIndex

const timer = () => {
    time++
    display.textContent = (time / 100).toFixed(2);
}


const timeMain = () => {
    if (activeTime) {
        mainBtn.textContent = 'Pause';
        activeTime = !activeTime;
        intervalIndex = setInterval(timer, 10)
    } else {
        mainBtn.textContent = 'Start';
        activeTime = !activeTime;
        clearInterval(intervalIndex)
        console.log(intervalIndex);
    }

}

const resetTime = () => {
    time = 0;
    activeTime = true;
    mainBtn.textContent = 'Start';
    clearInterval(intervalIndex);
    display.textContent = '---'
    console.log(intervalIndex);
}


mainBtn.addEventListener('click', timeMain);
resetBtn.addEventListener('click', resetTime);
