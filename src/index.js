import { Project } from './project/project';
import { Projects } from './project/projects';
import { ProjectsTabs } from './project/projects.dom';
import { Todo } from './todo/todo';
import { TodoDisplay } from './todo/todo.dom';

const newProject = new Project('Shopping');
const newProjectTwo = new Project('Test');
const newTodo = new Todo('Apples', 'to slice', '2019-01-01', 'LOW');
const newTodoTwo = new Todo('Honey', 'to bake', '2019-02-01', 'HIGH');

newProject.todoArray.push(newTodo);
newProjectTwo.todoArray.push(newTodo);
newProjectTwo.todoArray.push(newTodoTwo);

Projects.projectList.push(newProject);
Projects.projectList.push(newProjectTwo);

Projects.projectList[1].defaultStatus = true;

(() => {
    if (typeof Projects.projectList == "undefined" || Projects.projectList.length === 0) {
        const defaultProject = new Project('Default');
        defaultProject.show = true;
        Projects.selectedProjectIndex = 0;
        Projects.projectList.push(defaultProject);
        TodoDisplay.renderTodos(defaultProject.todoArray);
    }
    else {
        const projectToShow = Projects.findProjectToShow();

        Projects.selectedProjectIndex = projectToShow;

        TodoDisplay.renderTodos(Projects.projectList[projectToShow].todoArray);
    }

    ProjectsTabs.renderProjects(Projects.projectList);

    ProjectsTabs.highlightProject(Projects.selectedProjectIndex);
}
)()

// http://paletton.com/#uid=13i0u0kllllaFw0g0qFqFg0w0aF
// https://trello.com/b/KLitacBP/todo-list