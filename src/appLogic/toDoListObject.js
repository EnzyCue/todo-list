export {todoListModule};

const todoListModule = () => {
    let todos = [];
  
    const addTodo = (todo) => {
      todos.push(todo);
    }
  
    const removeTodo = (todo) => {
      const index = todos.indexOf(todo);
      if (index !== -1) {
        todos.splice(index, 1);
        return true;
      }
    }
  
    const getTodos = () => {
      return todos;
    }
  
    const setTodos = (newTodos) => {
      todos = newTodos;
    }
    
    const getTodoById = (id) => {
      return getTodos().find(todo => todo.getId() === id);
    };
  
    return { addTodo, removeTodo, getTodos, setTodos, getTodoById };
};