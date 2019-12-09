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
        
        closeAddTodoModal();

        //document.getElementById('project-tab-remove-' + index).addEventListener('click', removeTab);
    }

    const openAddTodoModal = function () {
        document.getElementById('todo-detail-modal').style.display = "block";
    }

    const closeAddTodoModal = function () {
        document.getElementById('todo-detail-modal').style.display = "none";
    }

    const renderTodos = function (todos) {
        const todoDisplay = document.getElementById('todo-display');

        for (let i = 0; i < todos.length; i++) {
          todoDisplay.appendChild(createTodoElement(todos[i], i));
    
        //   document.getElementById('todo-item-remove-' + i).addEventListener('click', removeTodo);
        }
    }

    const createTodoElement = function (todoItem, index) {
        let newTodoElement = document.createElement('li');
        newTodoElement.className = 'todo-item';
        newTodoElement.id = 'todo-item-' + index;
        newTodoElement.innerHTML = '<input type="checkbox" id="todo-item-checkbox-"' +  index + ' >' + todoItem.getTitle();
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