import { generateSidebar } from "./GenerateDOM/sidebar";
import { setupInitalProjects } from "./appLogic/initialSetup";
import { myProjects } from "./appLogic/initialSetup";
import { generateMainContent } from "./GenerateDOM/mainContent";
import './style.css';

const defaultProject = setupInitalProjects();

generateSidebar();

generateMainContent(defaultProject);

// event listener for loading a project from sidebar by clicking on it

const projectItemButtonGroup = document.querySelectorAll('.projectItemButton');

projectItemButtonGroup.forEach(projectItemButton => {
    projectItemButton.addEventListener('click', () => {

        removeCurrentPage();

        const projectID = parseInt(projectItemButton.dataset.id);
        const projectSelected = myProjects.getProjectById(projectID);

        generateMainContent(projectSelected);
    });
});


// event listener for loading default project from sidebar by clicking on it

const defaultProjectButton = document.querySelector('.projectPanelHeaderButton');

defaultProjectButton.addEventListener('click', () => {

    removeCurrentPage();

    generateMainContent(defaultProject);
});

// event listener for clicking the check mark

const completeButton = document.querySelector('.completeButton');

completeButton.addEventListener('click', () => {
    

});

// event listener for adding a project from sidebar





// event listener for adding a new todo item from side bar.




// event listener for clicking on the todo item.




function removeCurrentPage(){
    const html = document.querySelectorAll('.container > :not(.leftPanel)');
    html.forEach((child) => {
        child.parentNode.removeChild(child);
    });
};