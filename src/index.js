import { Project } from './project/project';
import { Projects } from './project/projects';
import { ProjectsTabs } from './project/projects.dom';
import { Todo } from './todo/todo';
import { TodoDisplay } from './todo/todo.dom';

const newProject = new Project('Shopping');
const newTodo = new Todo('Apples', 'to bake', 'test', 'HIGH');

newProject.todoArray.push(newTodo);

Projects.projectList.push(newProject);

ProjectsTabs.renderProjects(Projects.projectList);

TodoDisplay.renderTodos(newProject.todoArray);

Projects.selectedProject = newProject.getTitle();

// http://paletton.com/#uid=13i0u0kllllaFw0g0qFqFg0w0aF
// https://trello.com/b/KLitacBP/todo-list