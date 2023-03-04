import { Todo } from "../appLogic/todoObject";
import { globalTodoCounter, incrementTodoCounter } from "../appLogic/initialSetup";
import { myProjects } from "../appLogic/initialSetup";
import { addTodoItem } from './todoList';

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

  const submitButton = document.querySelector('.newTodoForm .submitButton');

  submitButton.addEventListener('click', () => {
    const todoTitle = document.querySelector('#todoTitle').value;
    const todoDueDate = document.querySelector('#todoDueDate').value;
    const todoPriority = document.querySelector('#todoPriority').value;

    console.log('we in');

    console.log(todoTitle, todoDueDate, todoPriority);

    const newTodo = new Todo(
      todoTitle,
      todoDueDate,
      todoPriority,
      globalTodoCounter
    );
    incrementTodoCounter();

    const selectedProjectID = parseInt(
      document.querySelector('#projectSelector').value
    );
    const selectedProject = myProjects.getProjectById(selectedProjectID);
    selectedProject.addTodoToList(newTodo);

    todoForm.reset();
    todoForm.style.visibility = 'hidden';
    html.style.filter = 'none';

    addTodoItem(selectedProject.getContainer(), newTodo);
  });
}
