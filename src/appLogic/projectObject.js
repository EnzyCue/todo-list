export {project};
import { todoListModule } from "./toDoListObject";

const project = (title) => {
    let todoList = todoListModule();
  
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle;
  
    const getTodoList = () => todoList;
    const setTodoList = (newTodoList) => todoList = newTodoList;
  
    return { getTitle, setTitle, getTodoList, setTodoList };
  };
  


