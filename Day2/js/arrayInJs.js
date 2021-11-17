// array of numbers
const number=[1,2,3,4,5];

//array of strings
const strArray=["sfd","fsds","dsfs"];

//mixed 
const mixedArray=["sds",1,"sdfs",true];

console.log(number);
console.log(strArray);
console.log(mixedArray);

console.log(mixedArray[0]);//1st element
console.log(mixedArray[2]);//3rd element

console.log(mixedArray.length);//size of array
console.table(number);

//check whether array or not
console.log(Array.isArray(number));// will return true
console.log(Array.isArray("numfa"));// will return false

//updating or add

mixedArray[0]="dheeraj";
console.log(mixedArray);

//finding in array
let value= mixedArray.indexOf("dheeraj");
console.log(value);

// mutating array
mixedArray.push(12);// will update int he last
console.log(mixedArray);
mixedArray.unshift(123);// will push at first position
console.log(mixedArray);
mixedArray.pop();// will delete from the last
console.log(mixedArray);
mixedArray.shift();// will delete form start
console.log(mixedArray);
mixedArray.splice(0,2);//start removing 2 element from  index 1;
console.log(mixedArray);
mixedArray.reverse();// will reverse the array
console.log(mixedArray);

// object in js

let object1 ={
    name: "dheeraj",
    age: 21,
    profession:"SDE",
    Salary :0.0000
}
console.log(object1);
