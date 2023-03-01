import prioritySVGHigh from '../svg/prioritySVGHigh.png';
import prioritySVGMedium from '../svg/prioritySVGMedium.png';
import prioritySVGLow from '../svg/prioritySVGLow.png';

import progressIconComplete from '../svg/progressIconComplete.png';
import progressIconUnfinished from '../svg/progressIconUnfinished.png';

import { project } from '../appLogic/projectObject';

export {generateMainContent};

const html = document.querySelector('.container');

function addTodoButton(container){

    const todoButton = document.createElement('button'); 

    todoButton.classList.add('todoButton');

    todoButton.textContent = 'Add New To-Do Item';


    container.appendChild(todoButton);

};

function generateMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    generateHeading(mainContent, project.getTitle());

    generateTodoPanel(mainContent, project.getTodoList());

    addTodoButton(mainContent);
    
    html.appendChild(mainContent);

    console.log(project.getTodoList().getTodos());
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

    console.log({todoList});

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


function generatePrioritySvg(container, priority){

    const priorityIcon = document.createElement('img');
    priorityIcon.classList.add('priorityIcon');

    switch(priority){
        case 'high':
            priorityIcon.src = prioritySVGHigh;
            break;

        case 'medium':
            priorityIcon.src = prioritySVGMedium;
            break;

        case 'low':
            priorityIcon.src = prioritySVGLow;
            break;
    };
    container.appendChild(priorityIcon);
};