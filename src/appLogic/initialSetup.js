import { todoListModule } from "./toDoListObject";
import { todo } from "./toDoObject";
import { project } from "./projectObject";
export { myProjects } from "./myProjectsObject";
export { globalProjectCounter, globalTodoCounter, setupInitalProjects};

let globalProjectCounter = 0;
let globalTodoCounter = 0;


function setupInitalProjects() {

    const todos = [
        todo("Update website design", "Revamp the website layout and make it more user-friendly", "2023-04-01", "high", false, ++globalTodoCounter),
        todo("Optimize server performance", "Analyze server logs and optimize server settings to improve performance", "2023-04-02", "medium", false, ++globalTodoCounter),
        todo("Implement new feature", "Add a new feature to the website that allows users to save their preferences", "2023-04-03", "high", false, ++globalTodoCounter),
        todo("Debug payment gateway", "Fix issues with payment gateway that are preventing customers from making purchases", "2023-04-04", "high", false, ++globalTodoCounter),
        todo("Write user documentation", "Create a user guide to help customers use our product more effectively", "2023-04-05", "low", false, ++globalTodoCounter),
        todo("Update product specifications", "Update the product specifications document to reflect recent changes", "2023-04-06", "medium", false, ++globalTodoCounter),
        todo("Test website on different devices", "Check website functionality and layout on different devices to ensure compatibility", "2023-04-07", "low", false, ++globalTodoCounter),
        todo("Update website content", "Add new content to the website to keep it fresh and engaging for users", "2023-04-08", "medium", false, ++globalTodoCounter),
        todo("Create marketing campaign", "Develop a marketing campaign to increase brand awareness and attract new customers", "2023-04-09", "high", false, ++globalTodoCounter),
        todo("Conduct user research", "Gather feedback from users to improve the product and address their needs", "2023-04-10", "medium", false, ++globalTodoCounter),
        todo("Improve site speed", "Optimize website performance to improve site speed and reduce page load times", "2023-04-11", "high", false, ++globalTodoCounter),
        todo("Create training materials", "Develop training materials to help employees learn new skills and improve performance", "2023-04-12", "low", false, ++globalTodoCounter),
        todo("Resolve customer complaints", "Address customer complaints and resolve issues to maintain customer satisfaction", "2023-04-13", "high", false, ++globalTodoCounter),
        todo("Improve search functionality", "Improve the search functionality of the website to make it easier for users to find what they need", "2023-04-14", "medium", false, ++globalTodoCounter),
        todo("Create product roadmap", "Develop a roadmap for the product to guide future development and prioritize features", "2023-04-15", "high", false, ++globalTodoCounter),
        todo("Perform security audit", "Conduct a security audit of the website to identify vulnerabilities and implement fixes", "2023-04-16", "high", false, ++globalTodoCounter),
        todo("Improve user interface", "Redesign the user interface to improve user experience and make the website more intuitive to use", "2023-04-17", "medium", false, ++globalTodoCounter),
    ];


    setupDefaultProject(todos);

    const todosSet1 = todos.slice(0, 6);
    const todosSet2 = todos.slice(6, 11);
    const todosSet3 = todos.slice(11);
  
    setupInitialProject("Website Redesign Project", todosSet1);
    setupInitialProject("Server Optimization Project", todosSet2);
    setupInitialProject("Product Development Project", todosSet3);
    
};



function setupInitialProject(title, todoSet){

    const todoList = todoListModule();
    todoList.setTodos = todoSet;

    const project = project(title, globalCounter++);
    project.setTodoList(todoList);

    myProjects.push(project);

};

// function addTodoToProject(todo, project){
//     project.getTodoList().addTodo(todo);
// };

// function removeTodofromProject(todo, project){
//     project.getTodoList().removeTodo(todo);
// };


function setupDefaultProject(todoSet){

    const defaultList = todoListModule();
    defaultList.setTodos = todoSet;

    const defaultProject = project("My To Dos", globalCounter++);

    defaultProject.setTodoList(todos);
};