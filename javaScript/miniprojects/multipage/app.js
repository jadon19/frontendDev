const content = document.querySelector('.js-content');
const navbarButtons =document.querySelectorAll('.navbar button');

console.log(navbarButtons);
//this is a list of all buttons 


navbarButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        const page = button.getAttribute('data-page');
        // data-page is a custom attribute and doesnt hold any significance


        //remove style from all buttons
        navbarButtons.forEach(btn => btn.classList.remove("button-active"));
        //apply style to clicked button
        button.classList.add("button-active");

        // call function LoadPage()
        loadPage(page);
    })
});


//asyn fetch with promises ->.then,.catch and .finally
function loadPage(pageName){
    fetch(`pages/${pageName}.html`)
    .then(response=>response.text())
    .then(html=>{
        content.innerHTML=html;
    })
    .catch(error=>{
        content.innerHTML = "<p>Error loading page</p>";
    })
    
}