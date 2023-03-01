export {myProjects};

const myProjects = (() => {
    let projectList = [];
  
    const addProject = (project) => {
      projectList.push(project);
    };
  
    const removeProject = (project) => {
      const index = projectList.indexOf(project);
      if (index !== -1) {
        projectList.splice(index, 1);
        return true;
      }
      return false;
    };
  
    const getProjectList = () => {
      return projectList;
    };
  
    const setProjectList = (newProjectList) => {
      projectList = newProjectList;
    };
  
    return {
      addProject,
      removeProject,
      getProjectList,
      setProjectList,
    };
  })();
  