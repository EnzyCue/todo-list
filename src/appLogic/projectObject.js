export {project};

const project = (title) => {
    let todoList = [];
  
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle;
  
    const addTodo = (todo) => {
      todoList.push(todo);
    }
  
    const removeTodo = (todo) => {
        const index = todoList.indexOf(todo);
        if (index !== -1) {
          todoList.splice(index, 1);
        }
      }
  
    const getTodoList = () => {
      return todoList;
    }
  
    const setTodoList = (newTodoList) => {
      todoList = newTodoList;
    }
  
    return { getTitle, setTitle, addTodo, removeTodo, getTodoList, setTodoList };
  };
  


