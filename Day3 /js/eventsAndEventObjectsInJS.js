
document.getElementById('heading').addEventListener(
    'click',function(e){
    alert('you haved clicked the heading');
    console.log(e);
    let variable=e.target;// gives the target
    console.log(variable);

    console.log(variable.className);
   
    console.log(e.offsetX);// relative click positon

})

document.getElementById('heading').addEventListener(
    'mouseover',function(e){
   // alert('you haved clicked the heading');
    // console.log(e);
    // let variable=e.target;// gives the target
    // console.log(variable);

    // console.log(variable.className);
   
    console.log(e.offsetX);// relative click positon

})

let btn= document.getElementById('btn');

btn.addEventListener('click',func1);

function func1()
{
    console.log('thanks');
    document.body.style.background='blue';

}
btn.addEventListener('dblclick',func2);
function func2()
{
    document.body.style.background='white';
}
