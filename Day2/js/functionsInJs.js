function demo(name)
{
    console.log(`call from ${name}`)
}

let name1 ="dheeraj";
demo(name1);

function demo1(name,name1='rao')// setting default
{
    console.log(`call from ${name} ${name1}`)
}
demo1(name1);
demo1(name1,"yadav")

function demo2()
{
    return "1";// returning values
    
}
let returned=demo2();
console.log(returned);

arr=["abc","def","ghi"]

arr.forEach(function(element,index,array){
    console.log(element,array,index);
})
