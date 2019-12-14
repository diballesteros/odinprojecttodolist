import { Projects } from './projects';
import { TodoDisplay } from '../todo/todo.dom';

const ProjectsTabs = (() => {

  const addProjectElement = function (projectItem, index) {
    document.getElementById('project-display').appendChild(createTabElement(projectItem, index));

    document.getElementById('project-tab-' + i).addEventListener('click', switchProject);

    document.getElementById('project-tab-remove-' + index).addEventListener('click', removeProjectElement);
  };

  const removeProjectElement = function () {
    const id = event.target.id.split("-");

    const projectsToRender = Projects.removeProject(id);

    document.getElementById('project-display').innerHTML = '';

    renderProjects(projectsToRender);
  };

  const switchProject = function () {
    const id = event.target.id.split("-");

    const index = id[id.length - 1];

    const changeTitle = Projects.projectList[index].getTitle();

    TodoDisplay.renderTodos(Projects.projectList[index].todoArray);

    Projects.selectedProject = changeTitle;
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
    renderProjects
  }
})();

export { ProjectsTabs };