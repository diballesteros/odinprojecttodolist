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

        saveTodos();

        TodoDisplay.addTodoElement(newTodo, project);
    }

    const removeTodo = function (id) {
        const index = id[id.length - 1];

        const project = Projects.projectList[Projects.selectedProjectIndex];

        project.todoArray.splice(index, 1);

        saveTodos();

        return project.todoArray
    }

    const getSelectedTodoIndex = () => selectedTodoIndex;

    const setSelectedTodoIndex = (id) => selectedTodoIndex = id;

    const editTodo = function () {
        const project = Projects.projectList[Projects.selectedProjectIndex];

        project.todoArray[Number(selectedTodoIndex)].setTitle(document.getElementById('todo-detail-title').value);

        project.todoArray[Number(selectedTodoIndex)].setDescription(document.getElementById('todo-detail-desc').value);

        project.todoArray[Number(selectedTodoIndex)].setDueDate(document.getElementById('todo-detail-date').value);

        project.todoArray[Number(selectedTodoIndex)].setPriority(document.getElementById('todo-detail-priority').value);

        saveTodos();
    }

    const saveTodos = function () {
        let todoslistarray = [];

        for (let i = 0; i < Projects.projectList.length; i++) {
            todoslistarray.push([]);
            for (let j = 0; j < Projects.projectList[i].todoArray.length; j++) {
                const todoCacheTitle = Projects.projectList[i].todoArray[j].getTitle();
                const todoCacheDesc = Projects.projectList[i].todoArray[j].getDescription();
                const todoCacheDate = Projects.projectList[i].todoArray[j].getDueDate();
                const todoCachePrio = Projects.projectList[i].todoArray[j].getPriority();
                todoslistarray[i].push([todoCacheTitle, todoCacheDesc, todoCacheDate, todoCachePrio]);
            }
        }

        localStorage.setItem('todolists', JSON.stringify(todoslistarray));
    }

    const loadTodos = function () {
        if (localStorage.getItem('todolists') !== null) {
            let storageTodos = JSON.parse(localStorage.getItem('todolists'));

            for (let i = 0; i < storageTodos.length; i++) {
                for (let j = 0; j < storageTodos[i].length; j++) {
                    const todoCacheTitle = storageTodos[i][j][0];
                    const todoCacheDesc = storageTodos[i][j][1];
                    const todoCacheDate = storageTodos[i][j][2];
                    const todoCachePrio = storageTodos[i][j][3];
                    const cacheTodo = new Todo(todoCacheTitle, todoCacheDesc, todoCacheDate, todoCachePrio);
                    Projects.projectList[i].todoArray.push(cacheTodo);
                }
            }
        }
    }

    document.getElementById('addtodo').addEventListener('click', addTodo);
    document.getElementById('detail-save').addEventListener('click', editTodo);

    return {
        selectedTodoIndex,
        getSelectedTodoIndex,
        setSelectedTodoIndex,
        removeTodo,
        loadTodos
    }
})();

export { Todos }