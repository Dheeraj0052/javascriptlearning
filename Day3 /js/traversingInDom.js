let cont= document.querySelector('.container');
console.log(cont.childNodes);
// child nodes will also include texts(lines) and comments

// if we want to ignore texts and comments we have to use children

console.log(cont.children);
let nodeName=cont.children[0].nodeName;// gives node name
console.log(nodeName);

let nodeType= cont.children[0].nodeType;// gives node types
console.log(nodeType);

// node types
/* 
1- element
2-attribute
3-text node
8 -comment
9 -document
10-doctype
*/

// accessing childrens children
let contChild= cont.children[1].children;
let c=contChild[0].children;

console.log(c);
console.log(cont.firstChild);// gives first child

console.log(cont.firstElementChild);// gives first element child

console.log(cont.lastChild);// gives last child
console.log(cont.lastElementChild);// given last element

console.log(cont.childElementCount);// counts child elements

console.log(cont.firstElementChild.nextElementSibling);// gives next sibling
