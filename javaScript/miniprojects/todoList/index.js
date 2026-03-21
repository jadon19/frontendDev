window.tasks = JSON.parse(localStorage.getItem("tasks"))||[];
let child = document.querySelector(".task-child");
let parent = document.querySelector(".js-tasks-list");
let emptyDisplay = document.querySelector(".empty-task");
let countPending = document.querySelector(".js-count");
const buttons = document.querySelector(".buttons");



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
            if (task.dueDate < today) {
                lapsed++;
            } else {
                pending++;
            }
        } else if (task.status === "lapsed") {
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
    const todayPendingTasks = tasks.filter(task =>
        task.status === "pending" && task.dueDate === today
    );
    if (todayPendingTasks.length === 0) {
        countPending.textContent = 0;
        let clone = emptyDisplay.content.cloneNode(true);
        parent.appendChild(clone);
        buttons.classList.add("hidden");
        return;
    }
    buttons.classList.remove("hidden");
    todayPendingTasks.forEach(task => {
        let clone = child.content.cloneNode(true);
        clone.querySelector(".render-title").textContent = task.title;
        clone.querySelector(".js-mark-done").dataset.id = task.id;
        parent.appendChild(clone);
    });
    countPending.textContent = todayPendingTasks.length;
    computeStats();
}
setInterval(() => {
    updateLapsedTasks();
    computeStats();
    renderTasks();
}, 86400000);

updateLapsedTasks();
computeStats(); // every 60 sec
renderTasks();

