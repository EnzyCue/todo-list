import { todo } from "../appLogic/toDoObject";
import { globalTodoCounter, incrementTodoCounter } from "../appLogic/initialSetup";
import { myProjects } from "../appLogic/initialSetup";
import { displayNewTodo } from "./mainContent";
import { defaultProject } from '../index'
import { todoFormValidation } from "./formValidation";

const todoForm = document.querySelector('.newTodoForm');
const html = document.querySelector('.container');

export function makeTodoFormVisible() {
  todoForm.style.visibility = 'visible';
  html.style.filter = 'blur(5px)';
}

export function activateTodoFormEventListeners() {

  const todoForm = document.querySelector('.newTodoForm');
  const cancelButton = document.querySelector('.newTodoForm .cancelButton');
  const submitButton = document.querySelector('.newTodoForm .submitButton');
  
  
  cancelButton.addEventListener('click', () => {
    todoForm.reset();
    todoForm.style.visibility = 'hidden';
    html.style.filter = 'none';
  });
  

  
  submitButton.addEventListener('click', () => {
    const newTodoButton = document.querySelector('.newTodoButton');
    const todoTitleInput = document.querySelector('#todoTitle');
    const todoDescriptionInput = document.querySelector('#todoDescription');
    const todoDueDateInput = document.querySelector('#todoDueDate');
    const todoPriorityInput = todoForm.elements.priority;
    const projectSelectInput = document.querySelector('#projectSelect');
    const todoTitle = todoTitleInput.value;
    const todoDescription = todoDescriptionInput.value;
    const todoDueDate = todoDueDateInput.value;
    const todoPriority = radioButtonChecker(todoPriorityInput);
    const currentProjectID = newTodoButton.dataset.projectid;
  
    console.log(todoTitle, todoDueDate, todoPriority);
  
    const newTodo = todo(
      todoTitle,
      todoDescription,
      todoDueDate,
      todoPriority,
      false,
      globalTodoCounter
    );
    incrementTodoCounter();
  
    const selectedProjectId = projectSelectInput.value;
    console.log(selectedProjectId, currentProjectID);
  
    const selectedProject = myProjects.getProjectById(parseInt(selectedProjectId));
    selectedProject.getTodoList().addTodo(newTodo);
    defaultProject.getTodoList().addTodo(newTodo);
   

    if ((selectedProjectId == currentProjectID) || (currentProjectID == 0)){
      displayNewTodo(newTodo);
    };

    todoForm.reset();
    todoForm.style.visibility = 'hidden';
    html.style.filter = 'none';

  });
  
  // loads today's date into date form control
  document.querySelector('input[type="date"]').value = new Date().toISOString().split('T')[0];
  //  loads current projects into selection form control

  todoFormValidation();

};

export function projectSelectionFiller(currentProject){

  // const submitButton = document.querySelector('.newTodoForm .submitButton');

  const projectSelect = document.querySelector('#projectSelect');
  const projectList = myProjects.getProjectList();
  removeSelections();

  for (let i = 0; i < projectList.length; i++) {
    let option = document.createElement('option');
    option.value = projectList[i].getId();
    option.textContent = projectList[i].getTitle();
    projectSelect.appendChild(option);
  };

  projectSelect.value = currentProject.getId();


  function removeSelections(){
    while (projectSelect.firstChild) {
      projectSelect.removeChild(projectSelect.firstChild);
    }
  };

  // submitButton.addEventListener('click', () => { 
    
  //   if (projectSelect.value === currentProject.getID()){
  //     displayNewTodo();
  //   }

  // });
};


function radioButtonChecker(radios){
  let selectedValue;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedValue = radios[i].value;
      break;
    }
  }
  return selectedValue;
  
};