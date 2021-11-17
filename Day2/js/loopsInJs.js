// for loop
console.log("for loop");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while
console.log("while loop");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do while
console.log("do while loop");
j = 0;
do {
    console.log(j);
    j++;

} while (j < 5);


//loops in arr

let arr=[1,2,3,4]
console.log("loops in array");
arr.forEach(function(element)
{
console.log(element);
});


// loops in object
console.log("loop for object")
let myObject ={
    name :"dheeraj",
    age: 21,
    salary : 0
}
for(let key in myObject)
{
    console.log(myObject[key]);
}

