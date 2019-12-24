import { Projects } from './project/projects';
import { ProjectsTabs } from './project/projects.dom';
import { Todos } from './todo/todos';
import { TodoDisplay } from './todo/todo.dom';

(() => {
    Projects.loadProjects();
    Todos.loadTodos();

    if (typeof Projects.projectList == "undefined" || Projects.projectList.length === 0) {
        Projects.createDefaultProject();
    }

    TodoDisplay.renderTodos(Projects.projectList[Projects.selectedProjectIndex].todoArray);

    ProjectsTabs.renderProjects(Projects.projectList);

    ProjectsTabs.highlightProject(Projects.selectedProjectIndex);
}
)()

// http://paletton.com/#uid=13i0u0kllllaFw0g0qFqFg0w0aF 