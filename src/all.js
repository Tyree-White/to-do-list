function loadAll() {
    const sidebar = document.querySelector('.sidebar');
    const all = document.createElement('div');
    all.textContent = 'All'
    all.classList.add('all');
    sidebar.appendChild(all);


}

export default loadAll;

export function loadAllTask() {
    
}