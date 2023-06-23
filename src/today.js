function loadToday() {
    const sidebar = document.querySelector('.sidebar');
    const today = document.createElement('div');
    today.textContent = 'Today'
    today.classList.add('today');
    sidebar.appendChild(today);
}

export default loadToday;