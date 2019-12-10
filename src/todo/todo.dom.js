import { Todo } from './todo';

const TodoDisplay = (() => {

    const showTodos = function (todoList) {

    }

    const checkTodo = function () {

    }

    const addTodo = function (project) {
        const title = document.getElementById('todo-add-title').value;

        const description = document.getElementById('todo-add-desc').value;

        const date = document.getElementById('todo-add-date').value;

        const priority = document.getElementById('todo-add-priority').value;

        const newTodo = new Todo(title, description, date, priority);

        project.todoArray.push(newTodo);

        document.getElementById('todo-display').appendChild(createTodoElement(newTodo, project.todoArray.length - 1));

        document.getElementById('todo-item-remove-' + (project.todoArray.length - 1)).addEventListener('click', removeTodo);

        closeAddTodoModal();
    }

    const removeTodo = function () {

    }

    const openAddTodoModal = function () {
        document.getElementById('todo-detail-modal').style.display = "block";
    }

    const closeAddTodoModal = function () {
        document.getElementById('todo-add-title').value = '';

        document.getElementById('todo-add-desc').value = '';

        document.getElementById('todo-add-date').value = '';

        document.getElementById('todo-add-priority').selectedIndex = "0";

        document.getElementById('todo-detail-modal').style.display = "none";
    }

    const renderTodos = function (todos) {
        const todoDisplay = document.getElementById('todo-display');

        for (let i = 0; i < todos.length; i++) {
            todoDisplay.appendChild(createTodoElement(todos[i], i));

            document.getElementById('todo-item-remove-' + i).addEventListener('click', removeTodo);
        }
    }

    const createTodoElement = function (todoItem, index) {
        let newTodoElement = document.createElement('li');
        newTodoElement.className = 'todo-item';
        newTodoElement.id = 'todo-item-' + index;
        newTodoElement.innerHTML = '<div><input type="checkbox" id="todo-item-checkbox-"' + index + ' >' + todoItem.getTitle() +
            '</div><span class="removetodo" id="todo-item-remove-' + index + '">X</span>';
        return newTodoElement;
    }

    return {
        addTodo,
        renderTodos,
        openAddTodoModal,
        closeAddTodoModal
    }

})();

export { TodoDisplay };