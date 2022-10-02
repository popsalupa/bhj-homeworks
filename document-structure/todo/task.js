const addButton = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');


addButton.addEventListener('click', key => {
    key.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
});

function addListener(task) {
    const removeTask = task.querySelector('.task__remove')
    removeTask.addEventListener('click', key => {
        key.preventDefault();
        taskList.removeChild(key.target.parentElement);
    });
}

function addTask(value) {
    if (value) {
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.innerHTML += `<div class = "task__title">${value}</div>
                            <a href="#" class="task__remove">&times;</a>`;

        addListener(newTask);
        taskList.appendChild(newTask);
    }
}