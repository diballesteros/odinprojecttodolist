import { Project } from './project';
import { ProjectsTabs } from './projects.dom';

const Projects = (() => {

    let projectList = [];

    let selectedProjectIndex = -1;

    const addProject = function () {
        const newProjectTitle = window.prompt("Please insert the new Project name");

        const newProject = new Project(newProjectTitle);

        ProjectsTabs.projectList.push(newProject);

        ProjectsTabs.addProjectElement(ProjectsTabs.projectList[ProjectsTabs.projectList.length - 1], ProjectsTabs.projectList.length - 1);
    }

    const removeProject = function (id) {
        const projectToRemove = projectList[id.length - 1];

        projectList.splice(projectToRemove, 1);

        return projectList;
    }

    const findProjectToShow = function () {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].defaultStatus === true) {
                return i;
            }
        }
        return false;
    }

    document.getElementById('addproject').addEventListener('click', addProject);

    return {
        projectList,
        selectedProjectIndex,
        addProject,
        removeProject,
        findProjectToShow
    }

})();

export { Projects }