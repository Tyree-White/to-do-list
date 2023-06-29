function loadAll() {
    const sidebar = document.querySelector('.sidebar');
    const all = document.createElement('div');
    all.textContent = 'All'
    all.classList.add('all');
    sidebar.appendChild(all);

    const content = document.querySelector('.content');
    const container = document.createElement('div');
    container.classList.add('allContainer');
    content.appendChild(container);

    const addTaskBtn  = document.createElement('button');
    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.classList.add('allTaskBtn');
    content.appendChild(addTaskBtn);

    const form = document.querySelector('form');

    addTaskBtn.addEventListener('click', () => form.style.visibility = 'visible');
}

export default loadAll;

export function loadAllTask() {
    
}