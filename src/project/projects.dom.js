import { Projects } from './projects';
import { TodoDisplay } from '../todo/todo.dom';
import { TodoDetailDisplay } from '../todo/tododetail/todo_detail.dom';
import { Todos } from '../todo/todos';

const ProjectsTabs = (() => {

  const addProjectElement = function (projectItem, index) {
    document.getElementById('project-display').appendChild(createTabElement(projectItem, index));

    document.getElementById('project-tab-' + index).addEventListener('click', switchProject);

    document.getElementById('project-tab-remove-' + index).addEventListener('click', removeProjectElement);
  };

  const removeProjectElement = function () {
    const id = event.target.id.split("-");

    const projectsToRender = Projects.removeProject(id);

    document.getElementById('project-display').innerHTML = '';

    renderProjects(projectsToRender);

    event.stopPropagation();
  };

  const switchProject = function () {
    const id = event.target.id.split("-");

    const index = id[id.length - 1];

    removeHighlightProject();

    highlightProject(index);

    Projects.selectedProjectIndex = index;

    TodoDisplay.renderTodos(Projects.projectList[index].todoArray);

    Todos.setSelectedTodoIndex(-1);

    TodoDetailDisplay.hideDetails();
  }

  const highlightProject = function (id) {
    document.getElementById('project-tab-' + id).style.backgroundColor = "silver";
  }

  const removeHighlightProject = function () {
    document.getElementById('project-tab-' + Projects.selectedProjectIndex).style.backgroundColor = "";
  }

  const renderProjects = function (projects) {
    const projectDisplay = document.getElementById('project-display');

    for (let i = 0; i < projects.length; i++) {
      projectDisplay.appendChild(createTabElement(projects[i], i));

      document.getElementById('project-tab-' + i).addEventListener('click', switchProject);
      document.getElementById('project-tab-remove-' + i).addEventListener('click', removeProjectElement);
    }
  }

  const createTabElement = function (projectItem, index) {
    let newProjectElement = document.createElement('div');
    newProjectElement.className = 'project-collapsible';
    newProjectElement.id = 'project-tab-' + index;
    newProjectElement.innerHTML = '<span>' + projectItem.getTitle() + '</span><span class="removeproject" id="project-tab-remove-' + index + '">X</span>';
    return newProjectElement;
  }

  return {
    addProjectElement,
    renderProjects,
    highlightProject
  }
})();

export { ProjectsTabs };