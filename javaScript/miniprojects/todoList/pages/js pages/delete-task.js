delete_task.addEventListener("click", () => {
    console.log("its clicking");
    const list = document.querySelectorAll(".js-mark-done:checked");
    console.log(list);
    
    const selectedId = Array.from(list).map(cb => cb.dataset.id);
    console.log(selectedId);
    tasks = tasks.filter(task => !selectedId.includes(task.id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    complete.disabled = true;
    delete_task.disabled = true;
    renderTasks();
});