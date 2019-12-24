const Project = function (title) {
    let todoArray = [];

    const getTitle = () => title;

    return {
        getTitle,
        todoArray
    }
}

export { Project };