import { Todo } from './todo';
import { TodoDisplay } from './todo.dom';
import { Projects } from '../project/projects';

const Todos = (() => {

    let selectedTodoIndex = -1;

    const addTodo = function () {
        const title = document.getElementById('todo-add-title').value;

        const description = document.getElementById('todo-add-desc').value;

        const date = document.getElementById('todo-add-date').value;

        const priority = document.getElementById('todo-add-priority').value;

        const newTodo = new Todo(title, description, date, priority);

        const project = Projects.selectedProjectIndex[Projects.selectedProjectIndex];

        project.todoArray.push(newTodo);

        TodoDisplay.addTodoElement(newTodo, project);
    }

    const removeTodo = function (id) {
        const index = id[id.length - 1];

        const project = Projects.projectList[Projects.selectedProjectIndex];

        project.todoArray.splice(index, 1);

        return project.todoArray
    }

    const getSelectedTodoIndex = () => selectedTodoIndex;

    const setSelectedTodoIndex = (id) => selectedTodoIndex = id;

    const editTodo = function () {
        const project = Projects.selectedProjectIndex[Projects.selectedProjectIndex];

        project.todoArray[Number(selectedTodoIndex)].setTitle(document.getElementById('todo-detail-title').value);

        project.todoArray[Number(selectedTodoIndex)].setDescription(document.getElementById('todo-detail-desc').value);

        project.todoArray[Number(selectedTodoIndex)].setDueDate(document.getElementById('todo-detail-date').value);

        project.todoArray[Number(selectedTodoIndex)].setPriority(document.getElementById('todo-detail-priority').value);
    }

    document.getElementById('addtodo').addEventListener('click', addTodo);
    document.getElementById('detail-save').addEventListener('click', editTodo);

    return {
        selectedTodoIndex,
        getSelectedTodoIndex,
        setSelectedTodoIndex,
        removeTodo
    }
})();

export { Todos }