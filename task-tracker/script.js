const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const message = document.getElementById("message");
const taskList = document.getElementById("task-list");
const countText = document.getElementById("count");
const emptyState = document.getElementById("empty-state");
const filterButtons = document.querySelectorAll(".filters button");

let tasks = [];
let nextId = 1;
let currentFilter = "all";

function addTask(text) {
  tasks.push({ id: nextId, text: text, completed: false });
  nextId++;
}

function toggleTask(id) {
  tasks.forEach(function (task) {
    if (task.id === id) {
      task.completed = !task.completed;
    }
  });
}

function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });
}

function getVisibleTasks() {
  if (currentFilter === "active") {
    return tasks.filter(function (task) { return !task.completed; });
  }
  if (currentFilter === "completed") {
    return tasks.filter(function (task) { return task.completed; });
  }
  return tasks;
}

function render() {
  taskList.textContent = "";
  const visibleTasks = getVisibleTasks();

  visibleTasks.forEach(function (task) {
    const li = document.createElement("li");
    if (task.completed) {
      li.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task-" + task.id;
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
      toggleTask(task.id);
      render();
    });

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", "Delete task: " + task.text);
    deleteButton.addEventListener("click", function () {
      deleteTask(task.id);
      render();
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });

  // Count of incomplete tasks (all tasks, not just visible ones)
  const incomplete = tasks.filter(function (task) {
    return !task.completed;
  }).length;
  countText.textContent = incomplete + (incomplete === 1 ? " task left" : " tasks left");

  // Empty state
  if (visibleTasks.length === 0) {
    if (currentFilter === "active") {
      emptyState.textContent = "No active tasks.";
    } else if (currentFilter === "completed") {
      emptyState.textContent = "No completed tasks yet.";
    } else {
      emptyState.textContent = "No tasks yet. Add one above!";
    }
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
  }

  // Highlight the selected filter button
  filterButtons.forEach(function (button) {
    const isSelected = button.dataset.filter === currentFilter;
    button.classList.toggle("active", isSelected);
    button.setAttribute("aria-pressed", isSelected);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value.trim();

  if (text === "") {
    message.textContent = "Please type a task before adding.";
    input.focus();
    return;
  }

  message.textContent = "";
  addTask(text);
  input.value = "";
  input.focus();
  render();
});

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentFilter = button.dataset.filter;
    render();
  });
});

render();
