const ProjectsTabs = (() => {

  let projectList = [];

  const addTab = function (projectItem, index) {
    document.getElementById('projectcontainer').appendChild(createTabElement(projectItem, index));

    document.getElementById('project-tab-remove-' + index).addEventListener('click', removeTab);
  };

  const removeTab = function () {
    const id = event.target.id.split("-");

    const projectToRemove = id[id.length - 1];

    projectList.splice(projectToRemove, 1);

    document.getElementById('projectcontainer').innerHTML = '';

    renderProjects(projectList);

  };

  const renderProjects = function (projects) {
    const projectContainer = document.getElementById('projectcontainer');

    for (let i = 0; i < projects.length; i++) {
      projectContainer.appendChild(createTabElement(projects[i], i));

      document.getElementById('project-tab-remove-' + i).addEventListener('click', removeTab);
    }

    // for (i = 0; i < projectList.length; i++) {
    //     projectList[i].addEventListener("click", function() {
    //       this.classList.toggle("active");
    //       var content = this.nextElementSibling;
    //       if (content.style.maxHeight){
    //         content.style.maxHeight = null;
    //       } else {
    //         content.style.maxHeight = content.scrollHeight + "px";
    //       } 
    //     });
    //   }
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