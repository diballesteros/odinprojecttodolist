import Projects from './projects';
import TodoDisplay from '../todo/todo.dom';
import TodoDetailDisplay from '../todo/tododetail/todo_detail.dom';
import Todos from '../todo/todos';

const ProjectsTabs = (() => {
  const createTabElement = function createTabElement(projectItem, index) {
    const newProjectElement = document.createElement('div');
    newProjectElement.className = 'project-collapsible';
    newProjectElement.id = `project-tab-${index}`;
    newProjectElement.innerHTML = `<span class="project-collapsible-title">${projectItem.getTitle()}</span><span class="removeproject" id="project-tab-remove-${index}">X</span>`;
    return newProjectElement;
  };

  const renderProjects = function renderProjects(projects) {
    const projectDisplay = document.getElementById('project-display');

    for (let i = 0; i < projects.length; i++) {
      projectDisplay.appendChild(createTabElement(projects[i], i));

      document.getElementById(`project-tab-${i}`).addEventListener('click', switchProject);
      document.getElementById(`project-tab-remove-${i}`).addEventListener('click', removeProjectElement);
    }
  };

  const addProjectElement = function addProjectElement(projectItem, index) {
    document.getElementById('project-display').appendChild(createTabElement(projectItem, index));

    document.getElementById(`project-tab-${index}`).addEventListener('click', switchProject);

    document.getElementById(`project-tab-remove-${index}`).addEventListener('click', removeProjectElement);
  };

  const removeProjectElement = function removeProjectElement() {
    const id = event.target.id.split('-');

    const projectsToRender = Projects.removeProject(id);

    document.getElementById('project-display').innerHTML = '';

    renderProjects(projectsToRender);

    event.stopPropagation();
  };

  const switchProject = function switchProject() {
    let indexArray = '';

    if (event.target.id.includes('project-tab-')) {
      indexArray = event.target.id.split('-');
    } else {
      indexArray = event.target.parentElement.id.split('-');
    }

    const index = indexArray[indexArray.length - 1];

    if (Projects.selectedProjectIndex === Number(index)) {
      return false;
    }

    removeHighlightProject();

    highlightProject(index);

    Projects.selectedProjectIndex = index;

    TodoDisplay.renderTodos(Projects.projectList[index].todoArray);

    Todos.setSelectedTodoIndex(-1);

    TodoDetailDisplay.hideDetails();

    return true;
  };

  const highlightProject = function highlightProject(id) {
    document.getElementById(`project-tab-${id}`).style.backgroundColor = 'silver';
  };

  const removeHighlightProject = function removeHighlightProject() {
    document.getElementById(`project-tab-${Projects.selectedProjectIndex}`).style.backgroundColor = '';
  };

  return {
    addProjectElement,
    renderProjects,
    highlightProject,
  };
})();

export { ProjectsTabs as default };
