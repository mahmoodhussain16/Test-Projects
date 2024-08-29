document.querySelector('#addProjectBtn').addEventListener('click', addProject);

function addProject() {
    const projectTitle = document.querySelector('#projectTitle').value;
    const projectDescription = document.querySelector('#projectDescription').value;
    const projectURL = document.querySelector('#projectURL').value;
    const projectDate = new Date().toLocaleDateString();

    if (projectTitle && projectDescription && projectURL) {
        const project = {
            id: Date.now(), 
            title: projectTitle,
            description: projectDescription,
            url: projectURL,
            date: projectDate
        };

        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));

}

}