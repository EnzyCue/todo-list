import { myProjects } from '../appLogic/myProjectsObject';
import profileSVG from '../svg/profile.svg';
import settingsSVG from '../svg/settings.svg';
export {generateSidebar, addProject, removeProject};

const html = document.querySelector('.container');


function addProject(project) {
    const projectList = document.querySelector('.projectList');

    const projectItem = document.createElement('li');
    projectItem.textContent = project.getTitle();;
    projectItem.dataset.id = project.getId();
  
    projectList.appendChild(projectItem);
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


    container.appendChild(welcome);

};

function addWelcomeMessage(container){

    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('welcomeMessage');

    welcomeMessage.textContent = 'Welcome';

    addWelcomeName(container);
    container.appendChild(welcomeMessage);
};

function addWelcomeName(container) {
    const welcomeName = document.createElement('span');
    welcomeName.classList.add('welcomeName');
    welcomeName.textContent = 'John Doe';

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
    const projectPanelHeader = document.createElement('span');
    projectPanelHeader.classList.add('projectPanelHeader');
    projectPanelHeader.textContent = 'My Projects';

    addProjectPanelButton(container);

    container.appendChild(projectPanelHeader);
}

function addProjectPanelButton(container){
    const projectPanelButton = document.createElement('button');
    projectPanelButton.classList.add('projectPanelButton');

    container.appendChild(projectPanelButton);
};


function addProjectList(container) {
    const projectList = document.createElement('ul');
    projectList.classList.add('projectList');
  
    // Add each project to the list
    myProjects.forEach(project => {
      const projectItem = document.createElement('li');
      projectItem.textContent = project.getTitle();
      projectItem.dataset.id = project.getId();
    
      projectList.appendChild(projectItem);
    });
  
    container.appendChild(projectList);
};


function addSettingsOption(container) {
    const settingsOption = document.createElement('div');
    settingsOption.classList.add('settings-option');

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