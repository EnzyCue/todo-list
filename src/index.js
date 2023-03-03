import { generateSidebar } from "./GenerateDOM/sidebar";
import { setupInitalProjects } from "./appLogic/initialSetup";
import { myProjects } from "./appLogic/initialSetup";
import { generateMainContent } from "./GenerateDOM/mainContent";

import progressIconComplete from './svg/progressIconComplete.png';
import progressIconUnfinished from './svg/progressIconUnfinished.png';

import './style.css';

export function removeCurrentPage(){
    const html = document.querySelectorAll('.container > :not(.leftPanel)');
    html.forEach((child) => {
        child.parentNode.removeChild(child);
    });
};


const defaultProject = setupInitalProjects();

generateSidebar();

generateMainContent(defaultProject);


// event listener for loading default project from sidebar by clicking on it

const defaultProjectButton = document.querySelector('.projectPanelHeaderButton');

defaultProjectButton.addEventListener('click', () => {

    removeCurrentPage();

    generateMainContent(defaultProject);
});


// event listener for adding a new todo item from side bar.




// event listener for clicking on the todo item.





