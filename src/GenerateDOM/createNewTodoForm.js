import { todo } from "../appLogic/toDoObject";
import { globalTodoCounter, incrementTodoCounter } from "../appLogic/initialSetup";
import { myProjects } from "../appLogic/initialSetup";
import { displayNewTodo } from "./mainContent";
import { defaultProject } from '../index'

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

    const todoTitleInput = document.querySelector('#todoTitle');
    const todoDueDateInput = document.querySelector('#todoDueDate');
    const todoPriorityInput = todoForm.elements.priority;
    const projectSelectInput = document.querySelector('#projectSelect');


    
    cancelButton.addEventListener('click', () => {
      todoForm.reset();
      todoForm.style.visibility = 'hidden';
      html.style.filter = 'none';
    });
    

    
    submitButton.addEventListener('click', () => {
      const todoTitle = todoTitleInput.value;
      const todoDueDate = todoDueDateInput.value;
      const todoPriority = radioButtonChecker(todoPriorityInput);
    
      console.log('we in');
      console.log(todoTitle, todoDueDate, todoPriority);
    
      const newTodo = todo(
        todoTitle,
        'Filler Description',
        todoDueDate,
        todoPriority,
        false,
        globalTodoCounter
      );
      incrementTodoCounter();
    
      const selectedProjectId = projectSelectInput.value;
      console.log(selectedProjectId);
    
      const selectedProject = myProjects.getProjectById(parseInt(selectedProjectId));
      selectedProject.getTodoList().addTodo(newTodo);
      defaultProject.getTodoList().addTodo(newTodo);
    
      displayNewTodo(newTodo);
    
      todoForm.reset();
      todoForm.style.visibility = 'hidden';
      html.style.filter = 'none';
    });
    
    // loads today's date into date form control
    document.querySelector('input[type="date"]').value = new Date().toISOString().split('T')[0];
    //  loads current projects into selection form control
    projectSelectionFiller();

};

function projectSelectionFiller(){
    const projectSelect = document.querySelector('#projectSelect');
    const projectList = [];
    myProjects.getProjectList().forEach(project => {
        projectList.push({id: project.getId(), title: project.getTitle()})
    });

    for (let i = 0; i < projectList.length; i++) {
        const option = document.createElement('option');
        option.value = projectList[i].id;
        option.textContent = projectList[i].title;
        projectSelect.appendChild(option);
    };
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