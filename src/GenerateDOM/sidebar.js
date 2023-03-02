import { myProjects } from '../appLogic/initialSetup';
import profileSVG from '../svg/user.png';
import settingsSVG from '../svg/settings.png';
import projectPlusSVG from '../svg/plus.png';
import projectHeaderSVG from '../svg/layers.png';
export {generateSidebar, addProject, removeProject};

const html = document.querySelector('.container');


function addProject(project) {
    const projectList = document.querySelector('.projectList');

    const projectItemButton = document.createElement('projectItemButton');
    projectItemButton.textContent = project.getTitle();;
    projectItemButton.dataset.id = project.getId();
  
    projectList.appendChild(projectItemButton);
};

function removeProject(project) {
    const projectList = document.querySelector('.projectList');
    const projectItem = projectList.querySelector(`li[data-id="${project.getId()}"]`);
  
    projectList.removeChild(projectItem);
};


function generateSidebar(){
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('leftPanel');

    generateWelcomePanel(leftPanel);

    generateProjectPanel(leftPanel);

    addSettingsOption(leftPanel);
    
    html.appendChild(leftPanel);
};

function generateWelcomePanel(container){
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');

    addWelcomeImage(welcome);
    addWelcomeMessage(welcome);

    container.appendChild(welcome);
};


function addWelcomeImage(container){

    const welcomeImage = document.createElement('img');
    welcomeImage.src = profileSVG;
    welcomeImage.classList.add('welcomeImage');


    container.appendChild(welcomeImage);

};

function addWelcomeMessage(container){

    const welcomePackage = document.createElement('div');
    welcomePackage.classList.add('welcomePackage');

    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('welcomeMessage');

    welcomeMessage.textContent = 'Welcome, ';
    welcomePackage.appendChild(welcomeMessage);
    addWelcomeName(welcomePackage);

    container.appendChild(welcomePackage);

    
    
};

function addWelcomeName(container) {
    const welcomeName = document.createElement('span');
    welcomeName.classList.add('welcomeName');
    welcomeName.textContent = 'Liu Fang';

    container.appendChild(welcomeName);
};
 

function generateProjectPanel(container){
    const projectPanel = document.createElement('div');
    projectPanel.classList.add('projectPanel');

    addProjectPanelHeader(projectPanel);
    addProjectList(projectPanel);

    container.appendChild(projectPanel);

};

function addProjectPanelHeader(container){

    addProjectPanelSVG(container);

    const projectPanelHeader = document.createElement('button');
    projectPanelHeader.classList.add('projectPanelHeaderButton');
    projectPanelHeader.textContent = 'Projects';

    container.appendChild(projectPanelHeader);

    addProjectPanelButton(container);

    
}

function addProjectPanelSVG(container){
    const projectPanelSVG = document.createElement('img');
    projectPanelSVG.classList.add('projectPanelSVG');
    projectPanelSVG.src = projectHeaderSVG;

    container.appendChild(projectPanelSVG);

};

function addProjectPLusSVG(container){
    const projectPlus = document.createElement('img');
    projectPlus.classList.add('projectPlusSVG');
    projectPlus.src = projectPlusSVG;

    container.appendChild(projectPlus);

};



function addProjectPanelButton(container){
    const projectPanelButton = document.createElement('button');
    projectPanelButton.classList.add('projectPanelButton');

    addProjectPLusSVG(projectPanelButton);

    container.appendChild(projectPanelButton);
};


function addProjectList(container) {
    const projectList = document.createElement('div');
    projectList.classList.add('projectList');

    myProjects.getProjectList().forEach(project => {
      const projectItemButton = document.createElement('button');
      projectItemButton.classList.add('projectItemButton');
      projectItemButton.textContent = project.getTitle();
      projectItemButton.dataset.id = project.getId();
    
      projectList.appendChild(projectItemButton);
    });
  
    container.appendChild(projectList);
};



function addSettingsOption(container) {
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