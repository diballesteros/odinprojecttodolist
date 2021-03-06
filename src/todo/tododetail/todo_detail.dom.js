import Projects from '../../project/projects';
import Todos from '../todos';
import TodoDisplay from '../todo.dom';

const TodoDetailDisplay = (() => {
    const showDetails = function showDetails() {
        let todoIndex = '';

        if (event.target.id.includes('todo-item-')) {
            todoIndex = event.target.id.split('-');
        } else {
            todoIndex = event.target.parentElement.parentElement.id.split('-');
        }

        if (Todos.getSelectedTodoIndex() === Number(todoIndex[todoIndex.length - 1])) {
            return false;
        }

        const project = Projects.projectList[Projects.selectedProjectIndex];

        if (Todos.getSelectedTodoIndex() !== -1) {
            TodoDisplay.removeHighlightTodoElement(Todos.getSelectedTodoIndex());
        }

        TodoDisplay.highlightTodoElement(todoIndex[todoIndex.length - 1]);

        Todos.setSelectedTodoIndex(todoIndex[todoIndex.length - 1]);

        document.getElementById('detail-no-todo').style.display = 'none';

        document.getElementById('detail-show-todo').style.display = 'flex';

        document.getElementById('todo-detail-title').value = project.todoArray[todoIndex[todoIndex.length - 1]].getTitle();

        document.getElementById('todo-detail-desc').value = project.todoArray[todoIndex[todoIndex.length - 1]].getDescription();

        document.getElementById('todo-detail-date').value = project.todoArray[todoIndex[todoIndex.length - 1]].getDueDate();

        document.getElementById('todo-detail-priority').value = project.todoArray[todoIndex[todoIndex.length - 1]].getPriority();

        return true;
    };

    const hideDetails = function hideDetails() {
        document.getElementById('detail-no-todo').style.display = 'flex';

        document.getElementById('detail-show-todo').style.display = 'none';
    };

    return {
        showDetails,
        hideDetails,
    };
})();

export { TodoDetailDisplay as default };
