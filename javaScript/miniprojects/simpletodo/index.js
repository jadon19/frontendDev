const dateInput = document.querySelector(".js-due-date");
dateInput.min = getISTDateString();


const taskList =[];
let title = document.querySelector(".js-title");
let description = document.querySelector(".js-description");
let addButton = document.querySelector(".js-add-task-button");
let title_error = document.querySelector(".js-title-error");
let dueDate_error = document.querySelector(".js-due-date-error");
let pendingCount = 0;


addButton.addEventListener("click",createTaskObject);
function createTaskObject(){
    title_error.textContent="";
    dueDate_error.textContent="";
    if(title.value!="" && dateInput.value!=""){
        let obj = {
        "id" : Date.now(),
        "title" : title.value,
        "description" : description.value,
        "dueDate": dateInput.value,
        "status":"pending"
        }
        // push object in array
        taskList.push(obj);
        pendingCount+=1;

        //print values
        printTasks();
    }
    if(title.value===""){
        title_error.textContent=`Please enter a title`;
    }
    if(dateInput.value===""){
        dueDate_error.textContent=`Enter a date`;
    }
    //reset input field
    title.value ="";
    description.value="";
    dateInput.value="";
}


let area = document.querySelector(".js-task-list");
function printTasks(){
    area.innerHTML = "";
    fetch("task-list.html")
    .then(response=>response.text())
    .then(html =>{
        taskList.forEach(task =>{
            if(task.status === "pending"){
                // you created an empty container (not visible yet)
                const temp = document.createElement("div");
                temp.innerHTML = html;



                // we created temp div-> inside which html as a string is passed
                // convert that html string to html
                //now tempdiv has my actual div, i need to access actual div ->first element of tempdiv

                const taskElement = temp.querySelector(".task-row");
                //so we get the first "thing" inside temp div


                taskElement.querySelector(".js-show-title").textContent = task.title;
                taskElement.querySelector(".js-show-description").textContent = task.description||" ";
                taskElement.querySelector(".js-show-date").textContent = task.dueDate;


                const toDelete = taskElement.querySelector(".js-delete");
                toDelete.addEventListener("click",()=>deleteTask(task.id));


                area.appendChild(taskElement);
            }
        })
    })
    .catch(err=>console.error(err));

}
function deleteTask(id){
    const index = taskList.findIndex(t=>t.id===id);
    if(index!==-1){
        taskList.splice(index,1);
    }
    printTasks();
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