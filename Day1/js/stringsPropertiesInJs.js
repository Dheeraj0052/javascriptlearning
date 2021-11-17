const myName="Dheeraj";
const greetings= "Good Morning";
console.log(greetings+' '+myName);

let html = "<h1>this is a heading tag</h1>"+
           "<p>this is a paragraph</p>";

    html= html.concat('this ','string2');// used to concatinate the string
    console.log(html);
    console.log(html.length);// for length
    console.log(html.toLocaleLowerCase());// to lower case coversion
    console.log(html.toUpperCase());// to uppercase
    
    console.log(html[0]);// indexing for 1st ccharacter
    console.log(html.indexOf('this'));// gives index at which found if not found gives -1 and gives first index of multiple occurence
    console.log(html.lastIndexOf('this'));// gives index of last occurence
    console.log(html.endsWith('str2')); //check whether it ends with given input 
    console.log(html.includes('is'));//check whether it contains or not
    console.log(html.substring(1,3));// gives substring 3 not including
    console.log(html.slice(0,4));// gives 0 to 4
    console.log(html.slice(0,-4));// gives last 4 character
    console.log(html.split(' '));// gives as array using deliemiter
    console.log(html.replace('this','it')); // replaces first occurence

let firstName="Dheeraj";
let secondName="Rao";
let myHtml=`hello ${firstName} 
${secondName} <h1> this is a heading</h1>
<p> this is a paragraph</p>`;
console.log(myHtml);

document.body.innerHTML=myHtml;// reflects on webpage
