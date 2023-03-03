import { todoListModule } from "./toDoListObject";
import { todo } from "./toDoObject";
import { project } from "./projectObject";
import { myProjects } from "./myProjectsObject";
export { myProjects };
export { globalProjectCounter, globalTodoCounter };
export { setupInitalProjects };

let globalProjectCounter = 0;
let globalTodoCounter = 0;

export const incrementProjectCounter = () => {
  globalProjectCounter++;
};

export const getProjectCounterValue = () => {
  return globalProjectCounter;
};

export const incrementTodoCounter = () => {
  globalTodoCounter++;
};

export const getTodoCounterValue = () => {
  return globalTodoCounter;
};

function setupInitalProjects() {

    const exampleTodos = [
        todo("Update website design", "Revamp the website layout and make it more user-friendly", "01/04/2023", "high", false, ++globalTodoCounter),
        todo("Optimize server performance", "Analyze server logs and optimize server settings to improve performance", "02/04/2023", "medium", false, ++globalTodoCounter),
        todo("Implement new feature", "Add a new feature to the website that allows users to save their preferences", "03/04/2023", "high", true, ++globalTodoCounter),
        todo("Debug payment gateway", "Fix issues with payment gateway that are preventing customers from making purchases", "04/04/2023", "high", false, ++globalTodoCounter),
        todo("Write user documentation", "Create a user guide to help customers use our product more effectively", "05/04/2023", "low", false, ++globalTodoCounter),
        todo("Update product specifications", "Update the product specifications document to reflect recent changes", "06/04/2023", "medium", false, ++globalTodoCounter),
        todo("Test website on different devices", "Check website functionality and layout on different devices to ensure compatibility", "07/04/2023", "low", false, ++globalTodoCounter),
        todo("Update website content", "Add new content to the website to keep it fresh and engaging for users", "08/04/2023", "medium", false, ++globalTodoCounter),
        todo("Create marketing campaign", "Develop a marketing campaign to increase brand awareness and attract new customers", "09/04/2023", "high", false, ++globalTodoCounter),
        todo("Conduct user research", "Gather feedback from users to improve the product and address their needs", "10/04/2023", "medium", false, ++globalTodoCounter),
        todo("Improve site speed", "Optimize website performance to improve site speed and reduce page load times", "11/04/2023", "high", false, ++globalTodoCounter),
        todo("Create training materials", "Develop training materials to help employees learn new skills and improve performance", "12/04/2023", "low", false, ++globalTodoCounter),
        todo("Resolve customer complaints", "Address customer complaints and resolve issues to maintain customer satisfaction", "13/04/2023", "high", false, ++globalTodoCounter),
        todo("Improve search functionality", "Improve the search functionality of the website to make it easier for users to find what they need", "14/04/2023", "medium", false, ++globalTodoCounter),
        todo("Create product roadmap", "Develop a roadmap for the product to guide future development and prioritize features", "15/04/2023", "high", false, ++globalTodoCounter),
        todo("Perform security audit", "Conduct a security audit of the website to identify vulnerabilities and implement fixes", "16/04/2023", "high", false, ++globalTodoCounter),
        todo("Improve user interface", "Redesign the user interface to improve user experience and make the website more intuitive to use", "17/04/2023", "medium", false, ++globalTodoCounter)
    ];

    const defaultProject = setupDefaultProject(exampleTodos);

    const todosSet1 = exampleTodos.slice(0, 6);
    const todosSet2 = exampleTodos.slice(6, 11);
    const todosSet3 = exampleTodos.slice(11);
  
    setupExampleProject("Website Redesign Project", todosSet1);
    setupExampleProject("Server Optimization Project", todosSet2);
    setupExampleProject("Product Development Project", todosSet3);


    

    return defaultProject;
    
};



function setupExampleProject(title, todoSet){

    const todoList = todoListModule();
    todoList.setTodos(todoSet);

    const theProject = project(title, globalProjectCounter++);
    theProject.setTodoList(todoList);
    myProjects.addProject(theProject);

};


function setupDefaultProject(todoSet){

    const defaultList = todoListModule();
    defaultList.setTodos(todoSet);

    const defaultProject = project("All Tasks", globalProjectCounter++);

    defaultProject.setTodoList(defaultList);

    return defaultProject;
};

// function addTodoToProject(todo, project){
//     project.getTodoList().addTodo(todo);
// };

// function removeTodofromProject(todo, project){
//     project.getTodoList().removeTodo(todo);
// };

