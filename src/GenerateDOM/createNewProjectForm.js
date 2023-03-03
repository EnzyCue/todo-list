
import { project } from "../appLogic/projectObject";
import { myProjects } from "../appLogic/myProjectsObject";
import { globalProjectCounter, incrementProjectCounter } from "../appLogic/initialSetup";
import { addProjectToSidebar } from "./sidebar";

const projectForm = document.querySelector('.newProjectForm');

const html = document.querySelector('.container');


export function makeProjectFormVisible(){
    projectForm.style.visibility = 'visible';
    html.style.filter = 'blur(5px)';

    runProjectFormEventListners();
};

function runProjectFormEventListners(){
    const cancelButton = document.querySelector('.newProjectForm .cancelButton');


    cancelButton.addEventListener('click', () => {
        projectForm.reset();
        projectForm.style.visibility = 'hidden';
        html.style.filter = 'none';
    });


    const submitButton = document.querySelector('.newProjectForm .submitButton');

    submitButton.addEventListener('click', () => {
        const projectTitle= document.querySelector('#projectTitle').value;

        console.log(projectTitle);
        const newProject = project(projectTitle, globalProjectCounter);
        incrementProjectCounter();

        myProjects.addProject(newProject);

        projectForm.reset();
        projectForm.style.visibility = 'hidden';
        html.style.filter = 'none';

        addProjectToSidebar(newProject);
    
    });
};


