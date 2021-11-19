
// localstorage is an part of window

// adding a key value pair inside local storage
window.localStorage.setItem('name','dheeraj');

console.log(localStorage);
localStorage.setItem('name2',"rao");
console.log(localStorage);

// get item from local storage
let name1= localStorage.getItem('name');
console.log(name1);

let a=localStorage.getItem('naodsnf');// will return null as no item
console.log(a);

// clearing local storage completely
localStorage.clear();
console.log(localStorage);

// deleting particular item
localStorage.setItem('name2',"rao");
console.log(localStorage);
localStorage.removeItem('name2');// will remove particular item
console.log(localStorage);

// we cannot add item array in local storage directly
let vegetables=['paneer','chole','bhindi'];
localStorage.setItem('sabzi',JSON.stringify(vegetables));

// stringify will store as array 
// if donot use that it will store as string
console.log(localStorage);

let myArray= JSON.parse(localStorage.getItem('sabzi'));
/* if we don't use json. parese it
will give 
a string*/
console.log(myArray);


//session storage

//adding items
sessionStorage.setItem('sessionName',"dheerajrao");

//getting items
console.log(sessionStorage.getItem('sessionName'));

//removing items
sessionStorage.removeItem('sessionName');
