let submit = document.getElementById("submitBt");
let searchBox = document.getElementById("inputBox");
let imp = document.getElementById("imp");
let ViewImp = document.getElementById("ShowImp");

submit.addEventListener("click",addElem);
searchBox.addEventListener("input", searching);
imp.addEventListener("click", important);
ViewImp.addEventListener("click", test);

show();

let notes = localStorage.getItem("ip");
var impNote = JSON.parse(notes);

function test(e){

    window.location.href = "imp.html";
   // showImp();
}




function important(e){
    let currentBtn = e;
    let currentInp = currentBtn.previousElementSibling.previousElementSibling.previousElementSibling;
    let currentVal = currentInp.textContent;

    let notes = localStorage.getItem("ip");

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.push(currentVal);
    localStorage.setItem("ip", JSON.stringify(notesObj));

    console.log(notesObj);

}


/* function showImp(){

    
   let notes = localStorage.getItem("ip");

    let html = "";

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.forEach((element,index) => {
        html += ` <div class="impnotes">
          <li  class="list-group-item d-flex justify-content-center">
        <h3 class="flex-grow-1">${element}</h3>
        <button id= "${index}" class="btn btn-warning me-2" onclick="editThis(this,this.id)">
            Edit
          </button>
        <button id= "${index}" class="btn btn-danger" onclick="removeFromList(this.id)">
            Remove
          </button>
          <button id= "imp" class="ml-5 btn btn-danger " onclick="important(this)" >
            imp
          </button>
       </li>
       </div>
     `;

     
    });

    let pa = document.getElementById("samePage");

    if(notesObj != 0){
       pa.innerHTML = html;
    }else{
        pa.innerHTML= " please add some stuff here";
    }

}*/

function addElem(e){
    let currentBtn = e.currentTarget;
    let currentInp = currentBtn.previousElementSibling;
    let currentVal = currentInp.value;

    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.push(currentVal);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    currentInp.value = "";

    console.log(notesObj);

    show();
}


function show(){

    
    let notes = localStorage.getItem("notes");

    let html = "";

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.forEach((element,index) => {
        html += ` <div class="notes">
          <li  class="list-group-item d-flex justify-content-center">
        <h3 class="flex-grow-1">${element}</h3>
        <button id= "${index}" class="btn btn-warning me-2" onclick="editThis(this,this.id)">
            Edit
          </button>
        <button id= "${index}" class="btn btn-danger" onclick="removeFromList(this.id)">
            Remove
          </button> 
          <button id= "imp" class="ml-5 btn btn-danger " onclick="important(this)" >
            imp
          </button>
       </li>
       </div>
     `;

       
     
    });

    let pa = document.getElementById("parent");

    if(notesObj != 0){
       pa.innerHTML = html;
    }else{
        pa.innerHTML= " please add some stuff here";
    }

}

function removeFromList(del){
    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(del,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    show();
}


function editThis(edf,id){

    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

   
    if(edf.textContent == "Done"){
        
        edf.textContent = "Edit";
        let cval = edf.previousElementSibling.value;
        notesObj[id] = cval;
        // localStorage.setItem(inde,cval);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        let newHeading = document.createElement("h3");
        newHeading.classList.add("flex-grow-1");
        newHeading.textContent = cval;
        edf.parentElement.replaceChild(newHeading,edf.previousElementSibling);
       

    } else{
    edf.textContent = "Done";
    edf.classList.add("btn-outline-success");

    let vl = edf.previousElementSibling.textContent;
   

    
    let inp = document.createElement("input");
    inp.type = "text";
    inp.placeholder = "chapter name";
    inp.classList.add("form-control");

    inp.value = vl;
    

    edf.parentElement.replaceChild(inp, edf.previousElementSibling);
    
     }

 };

function searching(){
    let vl = searchBox.value;
   // console.log("input event fired",vl);

    let notesCard = document.getElementsByClassName("notes");

    Array.from(notesCard).forEach((element)=>{
      let cardTxt = element.getElementsByTagName("h3")[0];
      cardTxt = cardTxt.textContent;

      if(cardTxt.includes(vl)){
          element.style.display = "block";
      }else{
        element.style.display = "none";
      }
    }
    );

}