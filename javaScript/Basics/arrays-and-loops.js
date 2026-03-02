const newArr = ["hello",90,9.9,{object: "this is an object inside array", object2: "yes"},true];
console.log(newArr);

//change
newArr[2]=67.889;
console.log(newArr[3]);

//Array is an object
console.log(typeof newArr);

//Skipped index 5 ->filled as empty (no out of index error)
newArr[6]="new";
console.log(newArr);

console.log(Array.isArray(newArr));
console.log(newArr.length);

//adds a value at end of array
newArr.push(100);
console.log(newArr);

//removes everything from index "start" and delete "deleteCount" elements
newArr.splice(0,2);
console.log(newArr);

