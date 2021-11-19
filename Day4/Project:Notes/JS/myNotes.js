let btn= document.getElementById('addBtn');
function showNotes()
{
    let notes= localStorage.getItem('notes');
    let notesObj=[];
    if(notes == null)
    {
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
   for(let i=0;i<notesObj.length;i++){
        html+=`
        <div class="card my-2 mx-2 " style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title" id="noteNumber">Note ${i+1}</h5>
            <p class="card-text" id="notesText">
                ${notesObj[i]}</p>
            <button class="btn btn-primary" id="${i}" onclick=deleteNode(this.id)>Delete</button>
        </div>
    </div>
        `
    };
    let noteDIV=document.getElementById("notes");
    if(notesObj.length!=0)
    {
        noteDIV.innerHTML=html;
    }
    else{
        html=`you have no notes`;
        noteDIV.innerHTML=html;
    }
}
showNotes();

function deleteNode(index)
{ console.log(index);

let notes= localStorage.getItem('notes');
    let notesObj=[];
    if(notes == null)
    {
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
    
}

btn.addEventListener('click',function(e)
{
    let textArea=document.getElementById("addTxt");
    let notes= localStorage.getItem('notes');
    let notesObj=[];
    if(notes == null)
    {
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    }
    let text= textArea.value;

    notesObj.push(text);
    console.log(text);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    console.log(localStorage.getItem("notes"));
    textArea.value="";
    showNotes();

});
