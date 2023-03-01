export {project};

const project = (title) => {
    let todoList = [];
  
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle;
  
    const addTodo = (todo) => {
      todoList.push(todo);
    }
  
    const removeTodo = (index) => {
      todoList.splice(index, 1);
    }
  
    const getTodos = () => {
      return todoList;
    }
  
    const setTodoList = (newTodoList) => {
      todoList = newTodoList;
    }
  
    return { getTitle, setTitle, addTodo, removeTodo, getTodos, setTodoList };
  };
  


