import { Todos } from './todos';
import { TodoDetailDisplay } from './tododetail/todo_detail.dom';
import { Projects } from '../project/projects';

const TodoDisplay = (() => {

    const addTodoElement = function (newTodo, project) {
        document.getElementById('todo-display').appendChild(createTodoElement(newTodo, project.todoArray.length - 1));

        document.getElementById('todo-item-' + (project.todoArray.length - 1)).addEventListener('click', TodoDetailDisplay.showDetails);
        document.getElementById('todo-item-remove-' + (project.todoArray.length - 1)).addEventListener('click', removeTodoElement);
        document.getElementById('todo-item-checkbox-' + (project.todoArray.length - 1)).addEventListener('change', removeTodoElement);

        closeAddTodoModal();
    }

    const removeTodoElement = function () {
        const id = event.target.id.split("-");

        const todostoRender = Todos.removeTodo(id);

        renderTodos(todostoRender);

        if (Todos.selectedTodoIndex == id[id.length - 1]) {
            TodoDetailDisplay.hideDetails();
        }

        event.stopPropagation();
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
        document.getElementById('todo-display').innerHTML = '';

        document.getElementById('todo-title').innerHTML = Projects.selectedProject;

        const todoDisplay = document.getElementById('todo-display');

        for (let i = 0; i < todos.length; i++) {
            todoDisplay.appendChild(createTodoElement(todos[i], i));

            document.getElementById('todo-item-' + i).addEventListener('click', TodoDetailDisplay.showDetails);
            document.getElementById('todo-item-remove-' + i).addEventListener('click', removeTodoElement);
            document.getElementById('todo-item-checkbox-' + i).addEventListener('change', removeTodoElement);
        }
    }

    const createTodoElement = function (todoItem, index) {
        let newTodoElement = document.createElement('li');
        newTodoElement.className = 'todo-item';
        newTodoElement.id = 'todo-item-' + index;
        newTodoElement.innerHTML = '<div><input type="checkbox" id="todo-item-checkbox-' + index + '" >' + todoItem.getTitle() +
            '</div><span class="removetodo" id="todo-item-remove-' + index + '">X</span>';
        return newTodoElement;
    }

    document.getElementById('add-todo-modal').addEventListener('click', openAddTodoModal);
    document.getElementById('cancel-todo-modal').addEventListener('click', closeAddTodoModal);

    return {
        addTodoElement,
        renderTodos
    }
})();

export { TodoDisplay };