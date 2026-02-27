const createTask = document.querySelector('.js-open-task');
const createTaskForm = document.querySelector(".js-create-task");
console.log(createTask);
createTask.addEventListener("click" ,()=>{
    fetch("pages/create-task.html")
    .then(res=>res.text())
    .then(html=>{
        createTaskForm.innerHTML =html;


        const closeTask = document.querySelector(".js-close-icon");
        closeTask.addEventListener("click", ()=>{
            createTaskForm.innerHTML=``;
        })
        let heading = document.querySelector('.js-heading');
        let description = document.querySelector('.js-description');
        let date = document.querySelector('.js-date-input');
        let tagOptions = document.querySelectorAll('.tag-btn');
        
        let selectedTag;
        tagOptions.forEach(btn => {
            btn.addEventListener("click", () => {
                if(btn.classList.contains("active")){
                    btn.classList.remove("active");
                }
                else{
                    tagOptions.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                }
                selectedTag = btn;
                console.log(selectedTag);
            });
        });
        
    })
    .catch(err=>console.log("some error in loading the file",err));

    
})
function addTask(){
    // to be called to add a task
}


