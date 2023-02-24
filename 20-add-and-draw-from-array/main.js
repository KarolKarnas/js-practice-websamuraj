const adviceArr = []

const inputAdvise = document.querySelector('input');

const addBtn = document.querySelector('.add')
const cleanBtn = document.querySelector('.clean')
const showBtn = document.querySelector('.showAdvice')
const showAdvicesBtn = document.querySelector('.showOptions')


const addAdvice = (e) => {
e.preventDefault();
if (inputAdvise.value.length) {
adviceArr.push(inputAdvise.value);
inputAdvise.value = ""
}
console.log(adviceArr);
}

const cleanAdvice = (e) => {
    e.preventDefault();
adviceArr.length = 0
console.log(adviceArr);
}

const showAdvice = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor((Math.random() * adviceArr.length))
    alert(`Dobrze Ci radzę: ${adviceArr[randomIndex]}!!!`)
}

const showAllAdvices = (e) => {
    e.preventDefault();
alert(`Oto Twoje wszystkie opcje, poddaj się osądowi bogów i losuj: ${adviceArr}`);
}


addBtn.addEventListener('click', addAdvice);
cleanBtn.addEventListener('click', cleanAdvice);
showBtn.addEventListener('click', showAdvice)
showAdvicesBtn.addEventListener('click', showAllAdvices)

