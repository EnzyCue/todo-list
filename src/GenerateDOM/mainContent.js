import prioritySVG from '../svg/prioritySVGHigh.png';

import progressIconComplete from '../svg/progressIconComplete.png';
import progressIconUnfinished from '../svg/progressIconUnfinished.png';

import { myProjects } from "../appLogic/initialSetup";

import { makeTodoFormVisible } from './createNewTodoForm';

export {generateMainContent};

const html = document.querySelector('.container');

export function displayNewTodo(todo){
    const todoPanel = document.querySelector('.todoPanel');

    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');
    
    // adding the left info component of the todo item.
    addTodoItem(todoContainer, todo);

    // adding the right complete button.
    addTodoCompleteButton(todoContainer, todo);

    addTodoDescription(todoPanel, todo);

    todoPanel.appendChild(todoContainer);
};

function generateMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    generatePageHeading(mainContent, project.getTitle());

    generateCreateNewItemButton(mainContent);

    generateTodoPanel(mainContent, project.getTodoList());

    html.appendChild(mainContent);
};



function generatePageHeading(container, title){
    const pageHeading = document.createElement('div');
    pageHeading.classList.add('pageHeading');

    pageHeading.textContent = title;

    container.appendChild(pageHeading);
};



function generateCreateNewItemButton(container){
    const newItemButton = document.createElement('button'); 

    newItemButton.classList.add('newTodoButton');

    newItemButton.textContent = 'Add new item';
    container.appendChild(newItemButton);

    activateCreateNewItemButtonListener(newItemButton);
};

function activateCreateNewItemButtonListener(newItemButton){
    newItemButton.addEventListener('click', () => {
        makeTodoFormVisible();
    });
};

function generateTodoPanel(container, todoList) {
    const todoPanel = document.createElement('div');
    todoPanel.classList.add('todoPanel');

    todoList.getTodos().forEach(todo => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todoContainer');
        
        // adding the left info component of the todo item.
        addTodoItem(todoContainer, todo);

        // adding the right complete button.
        addTodoCompleteButton(todoContainer, todo);

        addTodoDescription(todoPanel, todo);

        todoPanel.appendChild(todoContainer);
    });

    container.appendChild(todoPanel);
};

function addTodoDescription(container, todo){
    const todoDescription = document.createElement('div');
    todoDescription.classList.add('todoDescription');
    todoDescription.textContent = todo.getDescription();
    todoDescription.style.display = 'none';

    container.appendChild(todoDescription);
};

function addTodoItem(container, todo) {
    const todoButton = document.createElement('button');
    todoButton.classList.add('todoItem');


    const todoID = todo.getId();
    const parentProject = myProjects.getProjectByTodoId(todoID);
    const projectID = parentProject.getId();


    todoButton.dataset.todoid = todoID;
    todoButton.dataset.projectid = projectID;

    addPriorityIcon(todo.getPriority());
    addTodoTitle(todo.getTitle());
    addTodoDate(todo.getDueDate());


    container.appendChild(todoButton);

    function addTodoDate(date) {
        const todoDate = document.createElement('span');
        todoDate.classList.add('todoDate');
        todoDate.textContent = date;
        todoButton.appendChild(todoDate);
    };
    
    function addTodoTitle(title) {
        const todoTitle = document.createElement('span');
        todoTitle.classList.add('todoTitle');
        todoTitle.textContent = title;
        todoButton.appendChild(todoTitle);
    };

    function addPriorityIcon(priority) {
  
        switch (priority) {
          case 'high':
            todoButton.appendChild(addIcons(3));
            break;
      
          case 'medium':
            todoButton.appendChild(addIcons(2));
            break;
      
          case 'low':
            todoButton.appendChild(addIcons(1));
            break;
        };
    
        function addIcons (count) {
            const iconContainer = document.createElement('div');
            iconContainer.classList.add('priorityIconContainer');
          
            for (let i = 0; i < count; i++) {
              const svgIcon = document.createElement('img');
              svgIcon.classList.add('priorityIcon');
              svgIcon.src = prioritySVG;
              iconContainer.appendChild(svgIcon);
            };
    
            return iconContainer;
        };
    };

    activateTodoButtonListener(todoButton);
};



function addTodoCompleteButton(container, todo){

    const completeButton = document.createElement('button'); 
    completeButton.classList.add('completeButton');

    const todoID = todo.getId();
    const parentProject = myProjects.getProjectByTodoId(todoID);
    const projectID = parentProject.getId();
    
    completeButton.dataset.todoid = todoID;
    completeButton.dataset.projectid = projectID;

    const completeIcon = document.createElement('img');
    completeIcon.classList.add('completeIcon');

    switch(todo.getIsComplete()){
        case true:
            completeIcon.src = progressIconComplete;
            break;

        case false:
            completeIcon.src = progressIconUnfinished;
            break;
    };



    completeButton.appendChild(completeIcon); 
    container.appendChild(completeButton); 
    activateCompleteButtonListener(completeButton, completeIcon, todo);
};


function activateTodoButtonListener(todoButton){

    todoButton.addEventListener('click', () => {
        // selecting the previous sibling because the flex direction is reverse-column
        const todoContainer = todoButton.parentNode;
        const  todoDescription = todoContainer.previousElementSibling;

        // make the description visible
        let descriptionState = todoDescription.style.display;

        if (descriptionState === 'inline' ){
            todoDescription.style.display = 'none'; 
        } else if (descriptionState === 'none'){
            todoDescription.style.display = 'inline';
        };

    });
};


function activateCompleteButtonListener(completeButton, completeIcon, todo){
    
    completeButton.addEventListener('click', () => {
        const newComplete = !todo.getIsComplete();
        todo.setIsComplete(newComplete);

        changeTodoCompleteness(newComplete);
    });


    function changeTodoCompleteness(newComplete){

        switch(newComplete){
            case true:
                completeIcon.src = progressIconComplete;
                break;

            case false:
                completeIcon.src = progressIconUnfinished;
                break;
        };
    };

};