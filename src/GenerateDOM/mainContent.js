import prioritySVGHigh from '../svg/prioritySVGHigh.svg';
import prioritySVGMedium from '../svg/prioritySVGMedium.svg';
import prioritySVGLow from '../svg/prioritySVGLow.svg';

import progressIconComplete from '../svg/progressIconComplete.svg';
import progressIconUnfinished from '../svg/progressIconUnfinished.svg';

export {generateMainContent};

const html = document.querySelector('.container');

function addTodoButton(container, project){

    const todoButton = document.createElement('button'); 

    todoButton.classList.add('todoButton');

    todoButton.textContent = 'Add New To-Do Item';


    container.appendChild(mainContent);

};

function generateMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    generateHeading(mainContent, project.getTitle());

    generateTodoPanel(mainContent, project.getTodoList());

    addTodoButton(mainContent, project);
    
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

    todoList.array.forEach(todoItem => {
        generateTodoItem(todoPanel, todoItem);
    });

    container.appendChild(todoPanel);
};

function generateTodoItem(container, todo){
    const todoButton = document.createElement('button');
    todoButton.classList.add('todoItem');
    
    generatePrioritySvg(todoButton, todo.getPriority());
    generateTodoTitle(todoButton, todo.getTitle());
    generateTodoDate(todoButton, todo.getDate());

    const todoButtonWrapper = document.createElement('div');
    todoButtonWrapper.classList.add('todoButtonWrapper');

    generateTodoIsCompleteButton(todoButtonWrapper, todo.isComplete());
    todoButton.appendChild(todoButtonWrapper);

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
    const todoDate= document.createElement('span');
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