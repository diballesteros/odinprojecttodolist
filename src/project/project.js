const Project = function (title) {
    let show = false;
    let todoArray = [];

    const getTitle = () => title;

    return {
        getTitle,
        todoArray,
        show
    }
}

export { Project };