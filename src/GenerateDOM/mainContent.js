const html = document.querySelector('.container');

function generateMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    generateHeading(mainContent, project.getTitle());

    generateTodoPanel(mainContent, project.getTodoList());

    addTodoButton(leftPanel, project);
    
    html.appendChild(mainContent);
};