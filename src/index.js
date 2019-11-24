import { Project } from './project/projects';
import { ProjectsTab } from './project/projects.dom';
import { Todo } from './todo/todo';
import { TodoItem } from './todo/todo_item/todo_item';

let ProjectList = [];

const newList = new Todo('Grocery');

newProject.todoArray.push(newList);

const firstItem = new TodoItem('Apples', 'to bake', 'test', 'HIGH');

newList.items.push(firstItem);

console.log(newList.items[0].getTitle());

const init = (() => {
   
    const addProject = function () {
        const newProject = new Project('Shopping');

        projectList.push(newProject);

        ProjectsTab.renderProjects(projectList);
    }

    document.getElementById('addproject').addEventListener('click', addProject);
})();
