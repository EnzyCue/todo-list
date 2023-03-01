import { generateSidebar } from "./GenerateDOM/sidebar";
import { setupInitalProjects } from "./appLogic/initialSetup";



// make a heap of fake tasks -> add them to two todolists, one default and
// one specific.
// do the same until you have 3 specific projects and 1 default project
// ... each project having at least 5 to-dos.
// everytime you make a new project add them to myProjects.

setupInitalProjects();

generateSidebar();

// main page generation follows the same format everytime. 
// title -> todos
// button bottom left for adding a new todo
// generateProjectPage(page)