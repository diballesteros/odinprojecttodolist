const Todo = function (title) {
    const getTitle = () => title;

    let items = [];


    return {
        getTitle,
        items
    }
}

export { Todo };