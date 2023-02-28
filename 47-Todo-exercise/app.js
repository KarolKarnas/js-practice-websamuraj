const inputLi = document.querySelector('#createLi');
const inputSearch = document.querySelector('#searchLi');

const ul = document.querySelector('ul');
const addBtn = document.querySelector('[data-btn="add"]');

const taskArr = ['1', '2', 'brokuł', 'porzeczka', 'Brokuł'];

const clearList = () => {
	ul.textContent = '';
};

const deleteTask = (e) => {
	const indexKey = e.target.dataset.key;
	taskArr.splice(indexKey, 1);
	clearList();
	createTaskList();
	console.log(taskArr[indexKey]);
	console.log(taskArr);
};

const createTaskList = () => {
	clearList();
	taskArr.forEach((task, index) => {
		const li = document.createElement('li');
		li.dataset.key = index;
		li.textContent = task;

		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'delete';
		deleteBtn.dataset.key = index;
		deleteBtn.addEventListener('click', deleteTask);
		li.appendChild(deleteBtn);

		ul.appendChild(li);
	});
};

const addTask = (e) => {
	e.preventDefault();
	if (inputLi.value === '') return;

	taskArr.push(inputLi.value);
	console.log(taskArr);

	createTaskList();

	inputLi.value = '';
};

const searchTask = () => {
	createTaskList();
	let liElements = ul.querySelectorAll('li');
	liElements = [...liElements];
	liElements = liElements.filter((task) =>
		task.textContent.toLowerCase().includes(inputSearch.value.toLowerCase())
	);
	clearList();
	liElements.forEach((li) => ul.appendChild(li));
};

createTaskList();

addBtn.addEventListener('click', addTask);
inputSearch.addEventListener('input', searchTask);
