import { Project } from './project';
import { ProjectsTabs } from './projects.dom';

const Projects = (() => {

    let projectList = [];

    let selectedProjectIndex = -1;

    const addProject = function () {
        const newProjectTitle = window.prompt("Please insert the new Project name");

        const newProject = new Project(newProjectTitle);

        projectList.push(newProject);

        localStorage.setItem('projectlist', JSON.stringify(projectList));

        ProjectsTabs.addProjectElement(projectList[projectList.length - 1], projectList.length - 1);
    }

    const removeProject = function (id) {
        const projectToRemove = projectList[id.length - 1];

        projectList.splice(projectToRemove, 1);

        return projectList;
    }

    document.getElementById('addproject').addEventListener('click', addProject);

    return {
        projectList,
        selectedProjectIndex,
        addProject,
        removeProject
    }

})();

export { Projects }