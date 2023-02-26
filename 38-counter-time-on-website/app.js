const setCounter = () => {
   let time = 0;
const printCounter = () => {
document.body.textContent = `You have spend ${time} seconds on this website`
time++
}

return printCounter
}

const theTime = setCounter();


setInterval(theTime, 1000);


// const setCounter = () => {
//    let time = 0;
// function printCounter() {
// document.body.textContent = `You have spend ${time} seconds on this website`
// time++
// }

// return {printCounter}
// }

// const theTime = setCounter();


// setInterval(theTime.printCounter, 1000);