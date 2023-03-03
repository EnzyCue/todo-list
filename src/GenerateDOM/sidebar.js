import { myProjects } from '../appLogic/initialSetup';
import profileSVG from '../svg/user.png';
import settingsSVG from '../svg/settings.png';
import projectPlusSVG from '../svg/plus.png';
import projectHeaderSVG from '../svg/layers.png';

export {generateSidebar};

export function addProjectToSidebar(project) {
    const projectList = document.querySelector('.projectList');

    const projectItemButton = document.createElement('projectItemButton');
    projectItemButton.textContent = project.getTitle();
    projectItemButton.dataset.id = project.getId();
  
    projectList.appendChild(projectItemButton);
};

export function removeProjectFromSidebar(project) {
    const projectList = document.querySelector('.projectList');
    const projectItem = projectList.querySelector(`li[data-id="${project.getId()}"]`);
  
    projectList.removeChild(projectItem);
};

const html = document.querySelector('.container');

function generateSidebar(){
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('leftPanel');

    generateWelcomePanel(leftPanel);

    generateProjectPanel(leftPanel);

    generateSettingsPanel(leftPanel);
    
    html.appendChild(leftPanel);
};

function generateWelcomePanel(container){
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
  
    const addWelcomeImage = () => {
      const welcomeImage = document.createElement('img');
      welcomeImage.src = profileSVG;
      welcomeImage.classList.add('welcomeImage');
      return welcomeImage;
    };
  
    const addWelcomePackage = () => {
      const welcomePackage = document.createElement('div');
      welcomePackage.classList.add('welcomePackage');
      welcomePackage.appendChild(addWelcomeMessage());
      welcomePackage.appendChild(addWelcomeName());
      return welcomePackage;
    };
    
    const addWelcomeMessage = () => {
      const welcomeMessage = document.createElement('div');
      welcomeMessage.classList.add('welcomeMessage');
      welcomeMessage.textContent = 'Welcome, ';
      return welcomeMessage;
    };

    const addWelcomeName = () => {
        const welcomeName = document.createElement('span');
        welcomeName.classList.add('welcomeName');
        welcomeName.textContent = 'Liu Fang';
        return welcomeName;
    };
    
    welcome.appendChild(addWelcomeImage());
    welcome.appendChild(addWelcomePackage());
    container.appendChild(welcome);
};

  


function generateProjectPanel(container){
    const projectPanel = document.createElement('div');
    projectPanel.classList.add('projectPanel');

    addProjectPanelHeader(projectPanel);
    addProjectList(projectPanel);

    container.appendChild(projectPanel);
};

function addProjectPanelHeader(container) {
    const createProjectsButton = () => {
      const projectsButton = document.createElement('button');
      projectsButton.classList.add('projectPanelHeaderButton');
      projectsButton.textContent = 'Projects';
      return projectsButton;
    };
  
    const createProjectsIcon = () => {
      const projectsIcon = document.createElement('img');
      projectsIcon.classList.add('projectPanelSVG');
      projectsIcon.src = projectHeaderSVG;
      return projectsIcon;
    };
  
    const createAddProjectButton = () => {
      const addProjectButton = document.createElement('button');
      addProjectButton.classList.add('addProjectButton');
      const addProjectIcon = document.createElement('img');
      addProjectIcon.classList.add('projectPlusSVG');
      addProjectIcon.src = projectPlusSVG;
      addProjectButton.appendChild(addProjectIcon);
      return addProjectButton;
    };
  
    const projectsButton = createProjectsButton();
    const projectsIcon = createProjectsIcon();
    const addProjectButton = createAddProjectButton();
  
    container.append(projectsIcon, projectsButton, addProjectButton);
};
  
function addProjectList(container){
    const projectList = document.createElement('div');
    projectList.classList.add('projectList');
  
    myProjects.getProjectList().forEach(project => {
      const projectItemButton = createProjectItemButton(project);
      projectList.appendChild(projectItemButton);
    });


    function createProjectItemButton(project) {
        const projectItemButton = document.createElement('button');
        projectItemButton.classList.add('projectItemButton');
        projectItemButton.textContent = project.getTitle();
        projectItemButton.dataset.id = project.getId();
        return projectItemButton;
    };
  
    container.appendChild(projectList);
};


function generateSettingsPanel(container) {
    const settingsOption = document.createElement('div');
    settingsOption.classList.add('settingsOption');

    const settingsIcon = document.createElement('img');
    settingsIcon.classList.add('settingsIcon');
    settingsIcon.src = settingsSVG;

    const settingsLabel = document.createElement('span');
    settingsLabel.classList.add('settingsLabel');
    settingsLabel.textContent = 'Settings';

    settingsOption.appendChild(settingsIcon);
    settingsOption.appendChild(settingsLabel);
    container.appendChild(settingsOption);
};