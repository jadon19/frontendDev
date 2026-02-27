function changeStyle(){
    const element = document.querySelector('.subscribe-button');


    //CAN DO THIS
    /*element.style.backgroundColor = 'white';
    element.style.border = '1px solid black';
    element.style.color = 'black';
    */

    //A classList is a list of classes associated to an element
    //Applies/removes the style
    element.classList.toggle('subscribed-button');
    // Switch on/off css class named "subscribed-button"


    //changes for html
    //depends which class is active
    //.classList.contains() accepts a string of class name
    //checks if that class is active -> True else false
    //Never check "base class"->always active and present in classList
    //Check class which toggles
    if(element.classList.contains("subscribed-button")){
        element.innerText = "Subscribed";
    }
    else{
        element.innerText = "Subscribe";
    }
}

