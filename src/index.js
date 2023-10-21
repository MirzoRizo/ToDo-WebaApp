import "./style.css";

const leftList = document.querySelector("[left-list]");
const newListForm = document.querySelector("[data-new-list-form");
const newListInput = document.querySelector("[data-new-list-input");
const deleteListButton = document.querySelector("[data-delete-list-button]");

const listDisplayContainer = document.querySelector(
  "[data-list-display-container]"
);
const listTitleElement = document.querySelector("[data-list-title]");
const taskContainer = document.querySelector("[data-task]");
const taskTamplate = document.getElementById("task-template");

const newTaskForm = document.querySelector("[data-new-task-form]");
const newTaskInput = document.querySelector("[data-new-task-input]");

const clearTasksBtn = document.querySelector("[data-clear-tasks-btn]");

const LOCAL_SOTAGE_LIST_KEY = "left.lists";
const LOCAL_SOTAGE_SELECTED_LIST_ID_KEY = "left.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_SOTAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_SOTAGE_SELECTED_LIST_ID_KEY);

leftList.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

clearTasksBtn.addEventListener("click", () => {
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  saveAndRender();
});

// deleteListButton.addEventListener("click", (e) => {
//   lists = lists.filter((list) => list.id !== selectedListId);
//   selectedListId = null;
//   saveAndRender();
// });

taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedList = lists.find((list) => list.id === selectedListId);
    const selectedTask = selectedList.tasks.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    save();
  }
});

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  if (taskName == null || taskName === "") return;
  const task = createTask(taskName);
  newTaskInput.value = null;
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
});

function createList(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}

function createTask(name) {
  return {
    id: Date.now().toString(),
    name: name,
    complete: false,
    priority: "gray",
    dueDate: 0,
  };
}

function save() {
  localStorage.setItem(LOCAL_SOTAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_SOTAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

function render() {
  clearList(leftList);
  renderList();

  const selectedList = lists.find((list) => list.id === selectedListId);
  if (selectedListId == null) {
    // listDisplayContainer.style.display = "none";
    clearList(listTitleElement);
  } else {
    listTitleElement.innerText = selectedList.name;
  }
  clearList(taskContainer);
  renderTasks(selectedList);
}

render();

function renderTasks(selectedList) {
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTamplate.content, true);
    const chackbox = taskElement.querySelector("input");
    const taskColor = taskElement.querySelector(".task");
    const changePriority = taskElement.querySelector("select");
    const dueDate = taskElement.querySelector(".dueDate");
    chackbox.id = task.id;
    chackbox.checked = task.complete;
    changePriority.addEventListener("change", (e) => {
      const selectedTask = task;
      selectedTask.priority = changePriority.value;
      saveAndRender();
    });
    dueDate.addEventListener("change", () => {
      const selectedTask = task;
      selectedTask.dueDate = dueDate.value;
      saveAndRender();
    });

    dueDate.value = task.dueDate;
    changePriority.value = task.priority;
    taskColor.style.background = task.priority;

    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.name);
    taskContainer.appendChild(taskElement);
  });
}

function renderList() {
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    const listName = document.createElement("div");
    const trashBox = document.createElement("i");
    trashBox.classList.add("fi", "fi-rs-trash", "trash");
    listElement.dataset.listId = list.id;
    trashBox.dataset.listId = list.id;
    // trashBox.setAttribute("onclick", `deleteListByIcon(${list.id})`);
    trashBox.onclick = function deleteListByIcon(e) {
      const target = e.target.dataset.listId;
      lists = lists.filter((list) => list.id !== target);
      clearList(listTitleElement);
      clearList(taskContainer);
      saveAndRender();
    };
    listElement.classList.add("left-list-item");
    listName.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
    }
    listElement.appendChild(listName);
    listElement.appendChild(trashBox);
    leftList.appendChild(listElement);
  });
  //   trashBox.addEventListener("click", (e) => {});
}

function saveAndRender() {
  save();
  render();
}

function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
