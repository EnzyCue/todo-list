export {project};
import { todoListModule } from "./toDoListObject";

const project = (title, id) => {
  let todoList = todoListModule();

  const getTitle = () => title;
  const setTitle = (newTitle) => title = newTitle;

  const getTodoList = () => todoList;
  const setTodoList = (newTodoList) => todoList = newTodoList;

  const getId = () => id;

  return { getTitle, setTitle, getTodoList, setTodoList, getId };
};

  


