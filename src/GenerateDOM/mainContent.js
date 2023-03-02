import prioritySVG from '../svg/prioritySVGHigh.png';

import progressIconComplete from '../svg/progressIconComplete.png';
import progressIconUnfinished from '../svg/progressIconUnfinished.png';

import { project } from '../appLogic/projectObject';

export {generateMainContent};

const html = document.querySelector('.container');

function addTodoButton(container){

    const todoButton = document.createElement('button'); 

    todoButton.classList.add('todoButton');

    todoButton.textContent = 'Add new item to the list';


    container.appendChild(todoButton);

};

function generateMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    generateHeading(mainContent, project.getTitle());

    addTodoButton(mainContent);

    generateTodoPanel(mainContent, project.getTodoList());

    
    
    html.appendChild(mainContent);

};



function generateHeading(container, title){
    const pageHeading = document.createElement('div');
    pageHeading.classList.add('pageHeading');

    pageHeading.textContent = title;

    container.appendChild(pageHeading);
};

function generateTodoPanel(container, todoList){
    const todoPanel = document.createElement('div');
    todoPanel.classList.add('todoPanel');


    todoList.getTodos().forEach(todoItem => {
        generateTodo(todoPanel, todoItem);
    });

    container.appendChild(todoPanel);
};

function generateTodo(container, todo){
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');

    generateTodoItem(todoContainer, todo);
    generateTodoIsCompleteButton(todoContainer, todo.getIsComplete());

    container.appendChild(todoContainer);
};

function generateTodoItem(container, todo){
    const todoButton = document.createElement('button');
    todoButton.classList.add('todoItem');
    
    generatePrioritySvg(todoButton, todo.getPriority());
    generateTodoTitle(todoButton, todo.getTitle());
    generateTodoDate(todoButton, todo.getDueDate());
    
    container.appendChild(todoButton);
};


function generateTodoIsCompleteButton(container, isComplete){

    const completeButton = document.createElement('button'); 
    completeButton.classList.add('completeButton');

    const completeIcon = document.createElement('img');
    completeIcon.classList.add('completeIcon');

    switch(isComplete){
        case true:
            completeIcon.src = progressIconComplete;
            break;

        case false:
            completeIcon.src = progressIconUnfinished;
            break;
    };

    completeButton.appendChild(completeIcon); 
    container.appendChild(completeButton); 
};


function generateTodoDate(container, date){
    const todoDate = document.createElement('span');
    todoDate.classList.add('todoDate');

    todoDate.textContent = date;

    container.appendChild(todoDate);
};

function generateTodoTitle(container, title){
    const todoTitle = document.createElement('span');
    todoTitle.classList.add('todoTitle');

    todoTitle.textContent = title;

    container.appendChild(todoTitle);
};


function generatePrioritySvg(container, priority) {
    switch (priority) {
      case 'high':
        generateSvg(container, prioritySVG, 3);
        break;
  
      case 'medium':
        generateSvg(container, prioritySVG, 2);
        break;
  
      case 'low':
        generateSvg(container, prioritySVG, 1);
        break;
    };
  };
  
  function generateSvg(container, svgSrc, count) {
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('svgFlexContainer');
  
    for (let i = 0; i < count; i++) {
      const svgIcon = document.createElement('img');
      svgIcon.classList.add('priorityIcon');
      svgIcon.src = svgSrc;
      flexContainer.appendChild(svgIcon);
    }
  
    container.appendChild(flexContainer);
  };