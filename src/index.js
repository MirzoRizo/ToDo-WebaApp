import "./style.css";

// const { Template } = require("webpack");

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

const LOCAL_SOTAGE_LIST_KEY = "left.lists";
const LOCAL_SOTAGE_SELECTED_LIST_ID_KEY = "left.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_SOTAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_SOTAGE_SELECTED_LIST_ID_KEY);

leftList.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "div") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

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

deleteListButton.addEventListener("click", (e) => {
  lists = lists.filter((list) => list.id !== selectedListId);
  selectedListId = null;
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
    listDisplayContainer.style.display = "none";
  } else {
    listDisplayContainer.style.display = "";
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
    chackbox.id = task.id;
    chackbox.checked = task.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.name);
    taskContainer.appendChild(taskElement);
  });
}

function renderList() {
  lists.forEach((list) => {
    const listElement = document.createElement("div");
    listElement.dataset.listId = list.id;
    listElement.classList.add("left-list-item");
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
    }
    leftList.appendChild(listElement);
  });
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
