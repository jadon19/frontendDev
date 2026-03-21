let v = document.querySelector(".js-open-task"); //this is the button which triggers opening
let x = document.querySelector(".js-create-task"); //place where paste template
let temp = document.querySelector(".open-form");


function setMinDateToday(selector) {
    const input = document.querySelector(selector);
    if (!input) return; 
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata"
    });
    const today = new Date(now);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    input.min = `${year}-${month}-${day}`;
}
function closeForm(container){
    const closebtn = container.querySelector(".js-close-icon");
    if(!closebtn) return;
    closebtn.addEventListener("click",()=>{
        container.innerHTML="";
    })
}
function setupSaveHandler(container){
    const saveBtn = container.querySelector(".js-save-task");
    if(!saveBtn) return;
    saveBtn.addEventListener("click",()=>{
        const title = container.querySelector(".js-heading").value;
        const description = container.querySelector(".js-description").value;
        const dueDate = container.querySelector(".js-date-input").value;

        const activeTag = container.querySelector(".tag-btn.active");
        const tag = activeTag ? activeTag.dataset.color : null;

        console.log({ title, description, dueDate, tag });
        saveTask(title,description,dueDate,tag);
    })
}
function saveTask(title,description,dueDate,tag){
    let newobj = {
        id: crypto.randomUUID(),
        title: title,
        description: description,
        dueDate: dueDate,
        status: "pending",
        tag: tag
    };
    tasks.push(newobj);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    x.innerHTML="";
    renderTasks();
}

function setupTagSelection(container) {
    const buttons = container.querySelectorAll(".tag-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            if (btn.classList.contains("active")) {
                btn.classList.remove("active");
                return;
            }

            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}



v.addEventListener("click",()=>{
    let clone = temp.content.cloneNode(true);
    x.innerHTML="";
    x.appendChild(clone);
    closeForm(x);
    setupSaveHandler(x);
    setupTagSelection(x);
    setMinDateToday(".js-date-input");
})
