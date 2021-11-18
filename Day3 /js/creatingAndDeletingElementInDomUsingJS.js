// creating element 


// way 1
let element= document.createElement('li');
element.className='childul';
element.id='createdElement';
console.log(element);

element.setAttribute('title','dheeraj');
element.innerText="dheeraj added"
element.style.color='red';
console.log(element);

let cul=document.querySelector('ul.this');
console.log(cul);

cul.appendChild(element);


// way 2
let element2= document.createElement('li');
let textnode=document.createTextNode("i am a text node");
element2.appendChild(textnode);
element2.class='childul';
cul.appendChild(element2);


//replacing Element
let element3 =document.createElement('h4');
element3.className='elem3';
element3.id='createdelem3';
let tNode= document.createTextNode(" replaced text node");
element3.appendChild(tNode);

element.replaceWith(element3);/// will replace element

let e=document.getElementById('myul');
console.log(e);
e.replaceChild(element3,document.getElementById('fui'));// will replace the child element

e.removeChild(document.getElementById('createdelem3'));//will remove child 