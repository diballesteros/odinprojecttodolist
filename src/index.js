import { Project } from './project/projects';
import { ProjectsTabs } from './project/projects.dom';
import { Todo } from './todo/todo';
import { TodoItem } from './todo/todo_item/todo_item';

const newProject = new Project('Shopping');
const newProjectTwo = new Project('Bills');
const newProjectThree = new Project('Chores');

ProjectsTabs.projectList.push(newProject);
ProjectsTabs.projectList.push(newProjectTwo);
ProjectsTabs.projectList.push(newProjectThree);

const newList = new Todo('Grocery');

newProject.todoArray.push(newList);

const firstItem = new TodoItem('Apples', 'to bake', 'test', 'HIGH');

newList.items.push(firstItem);

ProjectsTabs.renderProjects(ProjectsTabs.projectList);

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