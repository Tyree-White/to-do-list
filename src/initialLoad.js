function initialPageLoad() {
    const body = document.querySelector('body');
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'To-Do List';
    body.appendChild(header);

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    body.appendChild(sidebar);

    const content = document.createElement('div');
    content.classList.add('content');
    body.appendChild(content)
}

export default initialPageLoad;