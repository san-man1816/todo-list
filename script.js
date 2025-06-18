function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;
  taskList.appendChild(li);
  saveTasks();
  taskInput.value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
  saveTasks();
}

function toggleComplete(span) {
  span.classList.toggle("completed");
  saveTasks();
}

function saveTasks() {
  const tasks = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", tasks);
}

function loadTasks() {
  const tasks = localStorage.getItem("tasks");
  if (tasks) document.getElementById("taskList").innerHTML = tasks;
}

window.onload = loadTasks;
document.getElementById("toggleDarkMode").onclick = function () {
  document.body.classList.toggle("dark");
};
