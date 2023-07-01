function loadAll() {
    let allLibrary = [];

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
    const allSubmitBtn = document.createElement('button');
    allSubmitBtn.type = 'submit';
    allSubmitBtn.textContent = 'Create Task';
    allSubmitBtn.style.background = '#3882f6';
    form.appendChild(allSubmitBtn);

    allSubmitBtn.addEventListener('click', createTask);
    addTaskBtn.addEventListener('click', () => form.style.visibility = 'visible');

    function createTask() {
      event.preventDefault();
      let titleInfo = document.getElementById('title');
      let descriptionInfo = document.getElementById('description');
      let priorityInfo = document.getElementById('priority');
      let dateInfo = document.getElementById('date');

      function addTaskToAllLibrary(task) {
        allLibrary.push(task);
      }      

      class Task {
        constructor(title, description, priority, date) {
          this.title = title;
          this.description = description;
          this.priority = priority;
          this.date = date;
        }
      }

      const newTask = new Task(titleInfo.value, descriptionInfo.value, priorityInfo.value, dateInfo.value);
      addTaskToAllLibrary(newTask);
      console.log(newTask, allLibrary);

      titleInfo.value = '';
      descriptionInfo.value = '';
      priorityInfo.value = '';

      form.style.visibility = 'hidden';
    }
}

export default loadAll;

export function loadAllTask() {
    
}