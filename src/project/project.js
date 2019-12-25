const Project = function Project(title) {
    const todoArray = [];

    const getTitle = () => title;

    return {
        getTitle,
        todoArray,
    };
};

export { Project as default };
