const ProjectsTabs = (() => {

  let projectList = [];

  const addTab = function (projectItem, index) {
    document.getElementById('project-display').appendChild(createTabElement(projectItem, index));

    document.getElementById('project-tab-remove-' + index).addEventListener('click', removeTab);
  };

  const removeTab = function () {
    const id = event.target.id.split("-");

    const projectToRemove = id[id.length - 1];

    projectList.splice(projectToRemove, 1);

    document.getElementById('project-display').innerHTML = '';

    renderProjects(projectList);

  };

  const renderProjects = function (projects) {
    const projectDisplay = document.getElementById('project-display');

    for (let i = 0; i < projects.length; i++) {
      projectDisplay.appendChild(createTabElement(projects[i], i));

      document.getElementById('project-tab-remove-' + i).addEventListener('click', removeTab);
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
    projectList,
    addTab,
    renderProjects
  }
})();

export { ProjectsTabs };