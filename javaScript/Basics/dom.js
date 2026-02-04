console.log(document.title);
console.log(typeof document.title);
//its a string

document.title = "Changed title";

console.log(document.body);
console.log(typeof document.body);
//its an object 

document.body.innerHTML = `<button>Changed</button> 
    <button  class="js-button">Second button</button>`;
//property

console.log(document.querySelector('button'));
//method
document.querySelector('button').innerHTML = "changed using query selector";
//change contents by picking elements

//target second button after complete html changed
document.querySelector('.js-button').innerHTML = "changed using QS And class";