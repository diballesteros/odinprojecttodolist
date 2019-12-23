import { Project } from './project/project';
import { Projects } from './project/projects';
import { ProjectsTabs } from './project/projects.dom';
import { Todos } from './todo/todos';
import { TodoDisplay } from './todo/todo.dom';

(() => {
    Projects.loadProjects();
    Todos.loadTodos();

    Projects.selectedProjectIndex = 1;

    if (typeof Projects.projectList == "undefined" || Projects.projectList.length === 0) {
        const defaultProject = new Project('Default');
        defaultProject.show = true;
        Projects.selectedProjectIndex = 0;
        Projects.projectList.push(defaultProject);
        TodoDisplay.renderTodos(defaultProject.todoArray);
    }
    else {
        TodoDisplay.renderTodos(Projects.projectList[Projects.selectedProjectIndex].todoArray);
    }

    ProjectsTabs.renderProjects(Projects.projectList);

    ProjectsTabs.highlightProject(Projects.selectedProjectIndex);
}
)()

// http://paletton.com/#uid=13i0u0kllllaFw0g0qFqFg0w0aF
// https://trello.com/b/KLitacBP/todo-list