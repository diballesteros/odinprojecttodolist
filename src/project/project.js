const Project = function(title) {
    let defaultStatus = false;
    let todoArray = [];

    const getTitle = () => title;

    return {
        getTitle
    }
} 

export { Project };