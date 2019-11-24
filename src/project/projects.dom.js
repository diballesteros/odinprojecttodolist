const ProjectsTabs = (() => {


    const addTab = function (id) {

    };
    
    const removeTab = function (id) {

    };

    const changeTitle = function (id, newTitle) {

    };

    const renderProjects = function (projectList) {
        for (i = 0; i < projectList.length; i++) {
            projectList[i].addEventListener("click", function() {
              this.classList.toggle("active");
              var content = this.nextElementSibling;
              if (content.style.maxHeight){
                content.style.maxHeight = null;
              } else {
                content.style.maxHeight = content.scrollHeight + "px";
              } 
            });
          }
    } 

    return {
        addTab,
        removeTab,
        changeTitle,
        renderProjects
    }
})();

export { ProjectsTabs };