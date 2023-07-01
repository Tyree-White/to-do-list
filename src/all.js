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

      if (titleInfo.value === '') {
        return alert('Fill in the title field');
      } else if (descriptionInfo.value === '') {
        return alert('Fill in the description field');
      } else if (priorityInfo.value === '') {
        return alert('Choose prioity level');
      }

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
      
        let i = 0;
        allLibrary.forEach(task => {
          i++;
  
          const allContainer = document.querySelector('.allContainer');
          const taskDiv = document.createElement('div');
          taskDiv.className = 'task';
          taskDiv.dataset.index = i;
          allContainer.appendChild(taskDiv);
  
          const titleDiv = document.createElement('div');
          titleDiv.className = 'title';
          titleDiv.dataset.index = `${i}-title`;
          const descriptionDiv = document.createElement('div');
          descriptionDiv.className = 'description';
          descriptionDiv.dataset.index = `${i}-description`;
          const priorityDiv = document.createElement('div');
          priorityDiv.className = 'priority';
          priorityDiv.dataset.index = `${i}-priority`;
          const dateDiv = document.createElement('div');
          dateDiv.className = 'date';
          dateDiv.dataset.index = `${i}-date`;
          const statusBtn = document.createElement('button');
          statusBtn.className = 'statusBtn';
          statusBtn.type = 'button';
          statusBtn.dataset.index =  i;
          statusBtn.textContent = 'Change date Status';
          const editBtn = document.createElement('button');
          editBtn.className = 'editBtn';
          editBtn.type = 'button';
          editBtn.dataset.index = i;
          editBtn.textContent = 'Edit';
          const deleteBtn = document.createElement('button');
          deleteBtn.className = 'deleteBtn';
          deleteBtn.type = 'button';
          deleteBtn.dataset.index = i;
          deleteBtn.textContent = 'Delete';
  
          taskDiv.appendChild(titleDiv);
          taskDiv.appendChild(descriptionDiv);
          taskDiv.appendChild(priorityDiv);
          taskDiv.appendChild(dateDiv);
          taskDiv.appendChild(statusBtn);
          taskDiv.appendChild(editBtn);
          taskDiv.appendChild(deleteBtn);
  
          titleDiv.textContent = `${task.title}`;
          descriptionDiv.textContent = `${task.description}`;
          priorityDiv.textContent = `${task.priority}`;
          dateDiv.textContent = `${task.date}`;
        });
    }
}

export default loadAll;

export function loadAllTask() {
    
}