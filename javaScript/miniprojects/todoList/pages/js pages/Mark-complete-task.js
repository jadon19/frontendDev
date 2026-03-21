let complete = document.querySelector(".js-done");
let delete_task = document.querySelector(".js-delete");
parent.addEventListener("change",(e)=>{
    if(e.target.classList.contains("js-mark-done")){
        const anychecked = document.querySelector(".js-mark-done:checked");
        console.log(anychecked);
        complete.disabled = !anychecked;
        delete_task.disabled = !anychecked;
        
    }
});

complete.addEventListener("click",()=>{
    const list = document.querySelectorAll(".js-mark-done:checked");
    const selectedId = Array.from(list).map(cb=>cb.dataset.id);
    tasks = tasks.map(task=>{
        if(selectedId.includes(task.id)){
            return {...task,status:"completed"};
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    complete.disabled = true;
    delete_task.disabled = true;
    renderTasks();
});