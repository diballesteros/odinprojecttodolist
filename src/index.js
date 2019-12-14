import { Project } from './project/project';
import { Projects } from './project/projects';
import { ProjectsTabs } from './project/projects.dom';
import { Todo } from './todo/todo';
import { TodoDisplay } from './todo/todo.dom';

const newProject = new Project('Shopping');
const newProjectTwo = new Project('Test');
const newTodo = new Todo('Apples', 'to bake', 'test', 'HIGH');
const newTodoTwo = new Todo('Honey', 'to bake', 'test', 'HIGH');

newProject.todoArray.push(newTodo);
newProjectTwo.todoArray.push(newTodoTwo);

Projects.projectList.push(newProject);
Projects.projectList.push(newProjectTwo);

ProjectsTabs.renderProjects(Projects.projectList);

TodoDisplay.renderTodos(newProject.todoArray);

Projects.selectedProject = newProject.getTitle();

// http://paletton.com/#uid=13i0u0kllllaFw0g0qFqFg0w0aF
// https://trello.com/b/KLitacBP/todo-list