/* element selector in js
1. single element selector
2. multi element selector
*/


// single element selector
    // using id
    let element = document.getElementById("first");
    // console.log(element);

    //element= element.className; // will give the class name
    // element=element.childNodes; // will give the child nodes
    // element=element.parentNode;// will give the parent nodes
   element.style.color='red';// will change the color to red
   element.style.background='blue';
   element.innerText="dheeraj is awesome";
   element.innerHTML="<b> dheeraj is awesome</b>"
//    console.log(element.innerHTML);


   //using selector

   let sel= document.querySelector('#first');// # will get using id
    // console.log(sel);
    let sel2=document.querySelector('.child');// . for class name
    // console.log(sel2);

    let sel3 = document.querySelector('b'); // empty for tags
    console.log(sel3);
    sel3.style.background='white';

// multi element selector
let elems= document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName('child'));

let elems2 = document.getElementsByTagName('div');

Array.from(elems2).forEach(element => {
    element.style.color="pink";
});

