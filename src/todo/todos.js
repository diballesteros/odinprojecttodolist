import { Todo } from './todo';
import { TodoDisplay } from './todo.dom';
import { Projects } from '../project/projects';

const Todos = (() => {

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

    const removeTodo = function () {
        const id = event.target.id.split("-");

        const todosToRender = Projects.removeTodo(id);

        const todoToRemove = project.todoArray[index];
    
        projectList.splice(todoToRemove, 1);
    }

    document.getElementById('addtodo').addEventListener('click', addTodo);
})();

export { Todos }