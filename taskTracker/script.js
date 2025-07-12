const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
    updateTaskOrder();
  });

  const span = document.createElement('span');
  span.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = '';

  updateTaskOrder();
}

function updateTaskOrder() {
  const tasks = Array.from(taskList.children);
  tasks.sort((a, b) => a.classList.contains('completed') - b.classList.contains('completed'));
  tasks.forEach(task => taskList.appendChild(task));
}
