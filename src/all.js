function loadAllTasks() {
    const sidebar = document.querySelector('.sidebar');
    const all = document.createElement('div');
    all.textContent = 'All'
    all.classList.add('all');
    sidebar.appendChild(all);
}

export default loadAllTasks;