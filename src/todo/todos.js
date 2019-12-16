import { Todo } from './todo';
import { TodoDisplay } from './todo.dom';
import { Projects } from '../project/projects';

const Todos = (() => {

    let selectedTodo = '';

    const addTodo = function () {
        const title = document.getElementById('todo-add-title').value;

        const description = document.getElementById('todo-add-desc').value;

        const date = document.getElementById('todo-add-date').value;

        const priority = document.getElementById('todo-add-priority').value;

        const newTodo = new Todo(title, description, date, priority);

        const project = Projects.findProject(Projects.selectedProject);

        project.todoArray.push(newTodo);

        TodoDisplay.addTodoElement(newTodo, project);
    }

    const removeTodo = function (id) {
        const index = id[id.length - 1];

        const project = Projects.findProject(Projects.selectedProject);

        project.todoArray.splice(index, 1);

        return project.todoArray
    }

    const editDetails = function () {

    }

    document.getElementById('addtodo').addEventListener('click', addTodo);

    return {
        selectedTodo,
        removeTodo
    }
})();

export { Todos }