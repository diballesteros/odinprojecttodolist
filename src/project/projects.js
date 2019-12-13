import { Project } from './project';
import { ProjectsTabs } from './projects.dom';

const Projects = (() => {

    let projectList = [];

    let selectedProject = "";

    const addProject = function () {
        const newProjectTitle = window.prompt("Please insert the new Project name");

        const newProject = new Project(newProjectTitle);

        ProjectsTabs.projectList.push(newProject);

        ProjectsTabs.addTab(ProjectsTabs.projectList[ProjectsTabs.projectList.length - 1], ProjectsTabs.projectList.length - 1);
    }

    const removeProject = function (id) {
        const projectToRemove = projectList[id.length - 1];

        projectList.splice(projectToRemove, 1);

        return projectList;
    }

    const findProject = function (selectedProject) {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].getTitle() == selectedProject) {
                return projectList[i];
            }
        }
    }

    document.getElementById('addproject').addEventListener('click', addProject);

    return {
        projectList,
        selectedProject,
        addProject,
        removeProject,
        findProject
    }

})();

export { Projects }