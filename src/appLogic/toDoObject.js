export {toDo};

const toDo = (title, description, dueDate, priority, isComplete) => {
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle;
  
    const getDescription = () => description;
    const setDescription = (newDescription) => description = newDescription;
  
    const getDueDate = () => dueDate;
    const setDueDate = (newDueDate) => dueDate = newDueDate;
  
    const getPriority = () => priority;
    const setPriority = (newPriority) => priority = newPriority;
  
    const getIsComplete = () => isComplete;
    const setIsComplete = (newIsComplete) => isComplete = newIsComplete;
  
    return {
      getTitle,
      setTitle,
      getDescription,
      setDescription,
      getDueDate,
      setDueDate,
      getPriority,
      setPriority,
      getIsComplete,
      setIsComplete
    };
  }
  