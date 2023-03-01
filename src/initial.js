import { generateSidebar } from "./GenerateDOM/sidebar";
import { setupInitalProjects } from "./appLogic/initialSetup";
import { defaultProject } from "./appLogic/initialSetup";

const defaultProject = setupInitalProjects();

generateSidebar();

generateMainContent(defaultProject);

// main page generation follows the same format everytime. 
// title -> todos
// button bottom left for adding a new todo
// generateProjectPage(page)