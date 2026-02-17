const createTask = document.querySelector('.js-open-task');
const createTaskForm = document.querySelector(".js-create-task");
console.log(createTask);
createTask.addEventListener("click" ,()=>{
    
    // after user clicks '+' ->fetch the task creation form

    fetch("pages/create-task.html")
    .then(res=>res.text())
    .then(html=>{
        createTaskForm.innerHTML =html;
        const closeTask = document.querySelector(".js-close-icon");
        closeTask.addEventListener("click", ()=>{
            createTaskForm.innerHTML=``;
        })
    })
    .catch(err=>console.log("some error in loading the file",err));

    
})


