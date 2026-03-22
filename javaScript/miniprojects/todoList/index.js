window.tasks = JSON.parse(localStorage.getItem("tasks"))||[];
let child = document.querySelector(".task-child");
let parent = document.querySelector(".js-tasks-list");
let emptyDisplay = document.querySelector(".empty-task");
let countPending = document.querySelector(".js-count");
const buttons = document.querySelector(".buttons");
let currentView = "today";
let currentPage = "tasks"; 
const heading = document.querySelector(".page-heading");


function getTodayDate() {
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata"
    });

    const today = new Date(now);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function computeStats() {
    const today = getTodayDate();

    let total = 0;
    let pending = 0;
    let completed = 0;
    let lapsed = 0;

    tasks.forEach(task => {
        total++;

        if (task.status === "completed") {
            completed++;
        } else if (task.status === "pending") {
                pending++;
        } else {
            lapsed++;
        }
    });

    console.log({ total, pending, completed, lapsed });
}
function updateLapsedTasks() {
    const today = getTodayDate();
    let changed = false;
    tasks = tasks.map(task => {
        if (task.status === "pending" && task.dueDate < today) {
            changed = true;
            return { ...task, status: "lapsed" };
        }
        return task;
    });
    if (changed) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

function renderTasks() {
    parent.innerHTML = "";
    const today = getTodayDate();
    let filteredTasks;
    heading.textContent = currentView === "today" ? "Today" : "Upcoming";
    if (currentView === "today") {
        filteredTasks = tasks.filter(task =>
            task.status === "pending" && task.dueDate === today
        );
    } else if (currentView === "upcoming") {
        filteredTasks = tasks.filter(task =>
            task.status === "pending" && task.dueDate > today
        );
    }
    if (filteredTasks.length === 0) {
    countPending.textContent = 0;

    let clone = emptyDisplay.content.cloneNode(true);

    clone.querySelector("h3").textContent =
        currentView === "today" ? "No tasks today" : "No upcoming tasks";
    clone.querySelector(".empty-msg").textContent = currentView==="today"? "Add a new task or view upcoming tasks":"Add a new task";
    parent.appendChild(clone);
    buttons.classList.add("hidden");
    return;
    }
    buttons.classList.remove("hidden");
    filteredTasks.forEach(task => {
        let clone = child.content.cloneNode(true);
        clone.querySelector(".render-title").textContent = task.title;
        clone.querySelector(".js-mark-done").dataset.id = task.id;
        parent.appendChild(clone);
    });
    countPending.textContent = filteredTasks.length;
    computeStats();
}
setInterval(() => {
    updateLapsedTasks();
    computeStats();
    renderTasks();
}, 86400000);
window.showPage = function(page) {
    document.querySelectorAll(".view").forEach(v => {
        v.classList.add("hidden");
    });

    document.querySelector(`.${page}`).classList.remove("hidden");
    currentPage = page;
}
updateLapsedTasks();
computeStats(); // every 60 sec
renderTasks();
