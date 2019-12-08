const TodoDisplay = (() => {

    const showTodos = function (todoList) {
        document.getElementById('todo-display');
    }

    const checkTodo = function () {

    }

    const addTodo = function (todoItem, index) {
        document.getElementById('todo-display').appendChild(createTodoElement(todoItem, index));

        //document.getElementById('project-tab-remove-' + index).addEventListener('click', removeTab);
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
        renderTodos
      }

})();

export { TodoDisplay };