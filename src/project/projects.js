import { Project } from './project';
import { ProjectsTabs } from './projects.dom';

const Projects = (() => {

    let projectList = [];

    let selectedProjectIndex = -1;

    const addProject = function () {
        const newProjectTitle = window.prompt("Please insert the new Project name");

        if (newProjectTitle === null) {
            return false;
        }

        const newProject = new Project(newProjectTitle);

        projectList.push(newProject);

        saveProjects();

        ProjectsTabs.addProjectElement(projectList[projectList.length - 1], projectList.length - 1);
    }

    const removeProject = function (id) {
        const projectIdToRemove = id[id.length - 1];

        projectList.splice(projectIdToRemove, 1);

        saveProjects();

        return projectList;
    }

    const saveProjects = function () {
        let projectarray = [];

        for (let i = 0; i < projectList.length; i++) {
            projectarray.push(projectList[i].getTitle());
        }

        localStorage.setItem('projectlist', JSON.stringify(projectarray));
    }

    const loadProjects = function () {
        if (localStorage.getItem('projectlist') !== null) {
            let storageProjects = JSON.parse(localStorage.getItem('projectlist'));

            for (let i = 0; i < storageProjects.length; i++) {
                const cacheProject = new Project(storageProjects[i]);

                projectList.push(cacheProject);
            }
        }
    }

    const createDefaultProject = function () {
        const defaultProject = new Project('Default');
        selectedProjectIndex = 0;
        projectList.push(defaultProject);
        saveProjects();
    }

    document.getElementById('addproject').addEventListener('click', addProject);

    return {
        projectList,
        selectedProjectIndex,
        addProject,
        removeProject,
        loadProjects,
        createDefaultProject
    }

})();

export { Projects }