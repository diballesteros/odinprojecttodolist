import Todos from './todos';
import TodoDetailDisplay from './tododetail/todo_detail.dom';
import Projects from '../project/projects';

const TodoDisplay = (() => {
    const addTodoElement = function addTodoElement(newTodo, project) {
        document.getElementById('todo-display').appendChild(createTodoElement(newTodo, project.todoArray.length - 1));

        document.getElementById(`todo-item-${project.todoArray.length - 1}`).addEventListener('click', TodoDetailDisplay.showDetails);
        document.getElementById(`todo-item-remove-${project.todoArray.length - 1}`).addEventListener('click', removeTodoElement);
        document.getElementById(`todo-item-checkbox-${project.todoArray.length - 1}`).addEventListener('change', removeTodoElement);

        closeAddTodoModal();
    };

    const removeTodoElement = function removeTodoElement() {
        const id = event.target.id.split('-');

        const todostoRender = Todos.removeTodo(id);

        renderTodos(todostoRender);

        if (Todos.getSelectedTodoIndex() === Number(id[id.length - 1])) {
            TodoDetailDisplay.hideDetails();
        }

        event.stopPropagation();
    };

    const openAddTodoModal = function openAddTodoModal() {
        document.getElementById('todo-detail-modal').style.display = 'block';

        document.getElementById('todo-add-date').valueAsDate = new Date();
    };

    const closeAddTodoModal = function closeAddTodoModal() {
        document.getElementById('todo-add-title').value = '';

        document.getElementById('todo-add-desc').value = '';

        document.getElementById('todo-add-date').value = '';

        document.getElementById('todo-add-priority').selectedIndex = '0';

        document.getElementById('todo-detail-modal').style.display = 'none';
    };

    const highlightTodoElement = function highlightTodoElement(id) {
        document.getElementById(`todo-item-${id}`).style.backgroundColor = 'silver';
    };

    const removeHighlightTodoElement = function removeHighlightTodoElement(id) {
        document.getElementById(`todo-item-${id}`).style.backgroundColor = '';
    };

    const renderTodos = function renderTodos(todos) {
        document.getElementById('todo-display').innerHTML = '';

        document.getElementById('todo-title').innerHTML = Projects.projectList[Projects.selectedProjectIndex].getTitle();

        const todoDisplay = document.getElementById('todo-display');

        for (let i = 0; i < todos.length; i++) {
            todoDisplay.appendChild(createTodoElement(todos[i], i));

            document.getElementById(`todo-item-${i}`).addEventListener('click', TodoDetailDisplay.showDetails);
            document.getElementById(`todo-item-remove-${i}`).addEventListener('click', removeTodoElement);
            document.getElementById(`todo-item-checkbox-${i}`).addEventListener('change', removeTodoElement);
        }
    };

    const createTodoElement = function createTodoElement(todoItem, index) {
        const newTodoElement = document.createElement('li');
        newTodoElement.className = 'todo-item';
        newTodoElement.id = `todo-item-${index}`;
        newTodoElement.innerHTML = `<div class="todo-controls"><input type="checkbox" id="todo-item-checkbox-${index}" ><label class="todo-item-title">${todoItem.getTitle()}</label></div><span class="removetodo" id="todo-item-remove-${index}">X</span>`;
        return newTodoElement;
    };

    document.getElementById('add-todo-modal').addEventListener('click', openAddTodoModal);
    document.getElementById('cancel-todo-modal').addEventListener('click', closeAddTodoModal);

    return {
        addTodoElement,
        highlightTodoElement,
        removeHighlightTodoElement,
        renderTodos,
    };
})();

export { TodoDisplay as default };
