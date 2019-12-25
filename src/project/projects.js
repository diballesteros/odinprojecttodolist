import Project from './project';
import ProjectsTabs from './projects.dom';

const Projects = (() => {
    const projectList = [];

    const selectedProjectIndex = 0;

    const saveProjects = function saveProjects() {
        const projectarray = [];

        for (let i = 0; i < projectList.length; i++) {
            projectarray.push(projectList[i].getTitle());
        }

        localStorage.setItem('projectlist', JSON.stringify(projectarray));
    };

    const addProject = function addProject() {
        const newProjectTitle = window.prompt('Please insert the new Project name');

        if (newProjectTitle === null) {
            return false;
        }

        const newProject = new Project(newProjectTitle);

        projectList.push(newProject);

        saveProjects();

        ProjectsTabs.addProjectElement(projectList[projectList.length - 1], projectList.length - 1);

        return true;
    };

    const removeProject = function removeProject(id) {
        const projectIdToRemove = id[id.length - 1];

        projectList.splice(projectIdToRemove, 1);

        saveProjects();

        return projectList;
    };

    const loadProjects = function loadProjects() {
        if (localStorage.getItem('projectlist') !== null) {
            const storageProjects = JSON.parse(localStorage.getItem('projectlist'));

            for (let i = 0; i < storageProjects.length; i++) {
                const cacheProject = new Project(storageProjects[i]);

                projectList.push(cacheProject);
            }
        }
    };

    const createDefaultProject = function createDefaultProject() {
        const defaultProject = new Project('Default');
        projectList.push(defaultProject);
        saveProjects();
    };

    document.getElementById('addproject').addEventListener('click', addProject);

    return {
        projectList,
        selectedProjectIndex,
        addProject,
        removeProject,
        loadProjects,
        createDefaultProject,
    };
})();

export { Projects as default };
