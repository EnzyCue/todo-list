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

  cancelButton.addEventListener('click', () => {
    todoForm.reset();
    todoForm.style.visibility = 'hidden';
    html.style.filter = 'none';
  });

  const today = new Date().toISOString().split('T')[0];
  document.querySelector('input[type="date"]').value = today;
  

  projectSelectionFiller();

  const submitButton = document.querySelector('.newTodoForm .submitButton');

  submitButton.addEventListener('click', () => {
    const todoTitle = document.querySelector('#todoTitle').value;
    const todoDueDate = document.querySelector('#todoDueDate').value;
    const todoPriority = radioButtonChecker(todoForm.elements.priority);

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

    const selectedProjectId = document.querySelector('#projectSelect').value;
    console.log(selectedProjectId);

    const selectedProject = myProjects.getProjectById(parseInt(selectedProjectId));

    selectedProject.getTodoList().addTodo(newTodo);
    defaultProject.getTodoList().addTodo(newTodo);

    displayNewTodo(newTodo);

    todoForm.reset();
    todoForm.style.visibility = 'hidden';
    html.style.filter = 'none';
  });

  
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