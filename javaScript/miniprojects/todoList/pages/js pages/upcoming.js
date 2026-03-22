document.querySelector(".js-today").addEventListener("click", () => {
    currentView = "today";
    showPage("website-layout");
    renderTasks();
});

document.querySelector(".js-upcoming").addEventListener("click", () => {
    currentView = "upcoming";
    showPage("website-layout");
    renderTasks();
});