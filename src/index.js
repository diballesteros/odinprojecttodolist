import { Project } from './project/projects';
import { ProjectsTabs } from './project/projects.dom';
import { Todo } from './todo/todo';
import { TodoDisplay } from './todo/todo.dom';

const newProject = new Project('Shopping');
const newProjectTwo = new Project('Bills');
const newProjectThree = new Project('Chores');

const newTodo = new Todo('Apples', 'to bake', 'test', 'HIGH');

newProject.todoArray.push(newTodo);

ProjectsTabs.projectList.push(newProject);
ProjectsTabs.projectList.push(newProjectTwo);
ProjectsTabs.projectList.push(newProjectThree);

ProjectsTabs.renderProjects(ProjectsTabs.projectList);

TodoDisplay.renderTodos(newProject.todoArray)

const init = (() => {
   
    const addProject = function () {
        const newProjectTitle =  window.prompt("Please insert the new Project name");

        const newProject = new Project(newProjectTitle);

        ProjectsTabs.projectList.push(newProject);

        ProjectsTabs.addTab(ProjectsTabs.projectList[ProjectsTabs.projectList.length - 1], ProjectsTabs.projectList.length-1);
    }

    document.getElementById('addproject').addEventListener('click', addProject);
})();




// http://paletton.com/#uid=13i0u0kllllaFw0g0qFqFg0w0aF
// https://trello.com/b/KLitacBP/todo-list