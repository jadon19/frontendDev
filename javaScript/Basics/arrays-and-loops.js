const newArr = ["hello",90,9.9,{object: "this is an object inside array"},true];
console.log(newArr);

//change
newArr[2]=67.889;
console.log(newArr[3]);

//Array is an object
console.log(typeof newArr);

//Skipped index 5 ->filled as empty
newArr[6]="new";
console.log(newArr);

console.log(Array.isArray(newArr));
console.log(newArr.length);
newArr.push(100);
console.log(newArr);
newArr.splice(3);

console.log(newArr);

