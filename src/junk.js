const body = document.querySelector("body");
const content = document.createElement("div");
const bord = document.createElement("div");
const leftContent = document.createElement("div");
const rightContent = document.createElement("div");

function creatBoard() {
  leftContent.classList.add("left");
  rightContent.classList.add("right");
  content.classList.add("content");
  bord.classList.add("bord");

  bord.appendChild(leftContent);
  bord.appendChild(rightContent);
  content.appendChild(bord);
  body.appendChild(content);
}
function leftContentHolder() {
  const userPic = document.createElement("div");
  userPic.innerHTML = `    
    <div class="card_load"></div>
    <div class="card_load_extreme_title"></div>
    <div class="card_load_extreme_descripion"></div>`;
  userPic.classList.add("card");

  const projects = document.createElement("div");
  projects.innerHTML = `    
    <div id="myDay" class="project"> <img src="/src/sun.png" alt=""> My Day</div>
    <div id="important" class="project"> <img src="/src/important.png" alt=""> Important</div>
    <div id="forMe "class="project"> <img src="/src/pearson.png" alt=""> For Me</div>`;
  projects.classList.add("projects");

  leftContent.appendChild(userPic);
  leftContent.appendChild(projects);
}

function rightContentHolder() {
  const title = document.createElement("h1");
  const task = document.createElement("div");
  const task2 = document.createElement("div");
  const task3 = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = "My Day";
  task.classList.add("task");
  task.innerHTML = "Testing";
  task2.classList.add("task");
  task2.innerHTML = "Testing";
  task3.classList.add("task");
  task3.innerHTML = "Testing";

  rightContent.appendChild(title);
  rightContent.appendChild(task);
  rightContent.appendChild(task2);
  rightContent.appendChild(task3);
}

// creatBoard();
// leftContentHolder();
// rightContentHolder();
