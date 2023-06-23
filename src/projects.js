function loadProjects() {
    const sidebar = document.querySelector('.sidebar');
    const projects = document.createElement('div');
    projects.textContent = 'Projects'
    projects.classList.add('projects');
    sidebar.appendChild(projects);
}

export default loadProjects;