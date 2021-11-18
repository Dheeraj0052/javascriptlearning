// basic practice excercise to fetch all documents links and check whether it contains a text or not

let a = prompt("Give the link text to filter");
let arr= document.links;
console.log(a);
for(let i=0;i<arr.length;i++)
{
   let link= arr[i].href;
   if(link.includes(a))
   {
       console.log(arr[i].href);
   }
}