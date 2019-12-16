import { Projects } from '../../project/projects';

const TodoDetailDisplay = (() => {

    const showDetails = function () {    
        const id = event.target.id.split("-");

        const project = Projects.findProject(Projects.selectedProject);

        document.getElementById('detail-no-todo').style.display = "none";

        document.getElementById('detail-show-todo').style.display ="flex";

        document.getElementById('todo-detail-title').value = project.todoArray[id[id.length - 1]].getTitle();

        document.getElementById('todo-detail-desc').value = project.todoArray[id[id.length - 1]].getDescription();

        document.getElementById('todo-detail-date').value = project.todoArray[id[id.length - 1]].getDueDate();

        document.getElementById('todo-detail-priority').value = project.todoArray[id[id.length - 1]].getPriority();
    }

    const hideDetails = function () {
        document.getElementById('detail-no-todo').style.display = "flex";

        document.getElementById('detail-show-todo').style.display = "none";
    }

    return {
        showDetails,
        hideDetails
    }

})();

export { TodoDetailDisplay }