let var1=9;
const var2 = 19;
// const cannot be changed
var var3 = 90;
// var has issues and not used in new versions of JS
console.log(typeof var1);
console.log(3=='3'); 
// true
console.log(3===3); 
// true
console.log(3==='3');
// false

/*
Brackets
Divide/multiply
subtract/add 
compare
logical operators
*/


//truthy and falsy values
console.log(0);
//falsy
console.log('text'/5);
//falsy ->NaN value
let variable;
console.log(variable);
//undefined ->no value
const var4 = undefined;


//ternary operator '?:'
let age = 15;
const result = age>18 ? 'Eligible':'Not eligible';
console.log(result);



//Short circuit boolean conditions
let view = false ;
const messageStatus  = view && 'Not replied';

//if user has not seen the message ->view = false 
//  messageViewed = false
//  else messageViewed is 'Not replied'

const currency = 'EUR'|| 'USD';
console.log(`Selected curreny is ${currency}`);
//if currency exist , it will take it or else default value of USD

