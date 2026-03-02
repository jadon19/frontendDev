const dateInput = document.querySelector(".js-due-date");
dateInput.min = getISTDateString();
console.log(dateInput.min);


const taskList =[];
let title = document.querySelector(".js-title");
let description = document.querySelector(".js-description");
let addButton = document.querySelector(".js-add-task-button");


addButton.addEventListener("click",createTaskObject);
let area = document.querySelector(".js-task-list");

function createTaskObject(){
    let obj = {
        "id" : Date.now(),
        "title" : title.value,
        "description" : description.value,
        "dueDate": dateInput.value,
        "status":"pending"
    }
    taskList.push(obj);
    printTasks();
}


function printTasks(){
    area.innerHTML = "";
    fetch("task-list.html")
    .then(response=>response.text())
    .then(html =>{
        taskList.forEach(task =>{
            if(task.status === "pending"){
                const wrapper = document.createElement("div");
                wrapper.innerHTML = html;

                wrapper.querySelector(".js-show-title").textContent = task.title;

                wrapper.querySelector(".js-show-description").textContent = task.description;

                wrapper.querySelector(".js-show-date").textContent = task.dueDate;

                area.appendChild(wrapper);
            }
        })
    })
    .catch(err=>console.error(err));

}

function getISTDateString() {
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000; 
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utc + istOffset);

    const year = istTime.getFullYear();
    const month = String(istTime.getMonth() + 1).padStart(2, '0');
    const day = String(istTime.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}