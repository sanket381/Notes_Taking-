
let submit = document.getElementById("submitBt");

var inde;

let parent = document.getElementById("parent");

//show();

showImp();
let arr =  [];

for(let g = 0; g < localStorage.length;g++){
  let templ = localStorage.getItem(g);
  arr.push(templ);
}

 submit.addEventListener("click",addElem);

 function addElem (addElem){
        
    let currentBtn = addElem.currentTarget;
    let currentInp = currentBtn.previousElementSibling;
    let currentVal = currentInp.value;
    arr.push(currentVal);

    let er = localStorage.length;

    localStorage.setItem(er, currentVal);
   
    let newLi = document.createElement("li");

    if (parent.children[0].className == "text-muted") {
        
        parent.children[0].remove();

      }

    newLi.className = "list-group-item d-flex justify-content-center";
    newLi.innerHTML = ` <h3 class="flex-grow-1"> ${currentVal}</h3>
    <button class="btn btn-warning me-2" onclick="editThis(this)">
        Edit
      </button>
    <button class="btn btn-danger" onclick="removeFromList(this)">
        Remove
      </button>`;

      parent.appendChild(newLi);

 };

 function removeFromList(kl){

  let cval = kl.previousElementSibling.previousElementSibling.textContent;

  let ip = arr.indexOf(cval.trim());

  console.log(ip);
    
       localStorage.removeItem(ip);
     kl.parentElement.remove();
     if(parent.children.length <=0){
        let notify = document.createElement("h3");
        notify.classList.add("text-muted");
        notify.textContent = "nothing is here ... please add some stuff";
        parent.appendChild(notify);
      }
     
 }




 function editThis(edf){
    
 
    if(edf.textContent == "Done"){
        
        edf.textContent = "Edit";
        let cval = edf.previousElementSibling.value;
        arr[inde] = cval;
        localStorage.setItem(inde,cval);
        let newHeading = document.createElement("h3");
        newHeading.classList.add("flex-grow-1");
        newHeading.textContent = cval;
        edf.parentElement.replaceChild(newHeading,edf.previousElementSibling);
       

    } else{
    edf.textContent = "Done";
    edf.classList.add("btn-outline-success");

    let vl = edf.previousElementSibling.textContent;
   
  
    vl = vl.trim();
    
    console.log(vl);
    
     for(let i=0; i< arr.length;i++){
         if(arr[i] == vl){
           inde = i;
           console.log(inde);
         }  
     }

    
    let inp = document.createElement("input");
    inp.type = "text";
    inp.placeholder = "chapter name";
    inp.classList.add("form-control");

    inp.value = vl;
    

    edf.parentElement.replaceChild(inp, edf.previousElementSibling);
    
    
     }


 };

  function show(){
    
    for(let i = 0; i< localStorage.length;i++ ){
      let newLi = document.createElement("li");
    newLi.className = "list-group-item d-flex justify-content-center";
      let currentVal = localStorage.getItem(i);
      newLi.innerHTML = ` <h3 class="flex-grow-1"> ${currentVal}</h3>
    <button class="btn btn-warning me-2" onclick="editThis(this)">
        Edit
      </button>
    <button class="btn btn-danger" onclick="removeFromList(this)">
        Remove
      </button>`;

      parent.appendChild(newLi);
    }
    
  }

// let xx = arr.indexOf("mango");
// console.log(xx);



showImp();

function showImp(){

    
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

   let pa = document.getElementById("impparent");

   if(notesObj != 0){
      pa.innerHTML = html;
   }else{
       pa.innerHTML= " please add some stuff here";
   }

}


function removeFromList(del){
  let notes = localStorage.getItem("ip");

  if(notes == null){
      notesObj = [];
  }else{
      notesObj = JSON.parse(notes);
  }

  notesObj.splice(del,1);
  localStorage.setItem("ip", JSON.stringify(notesObj));
  showImp();
}

function editThis(edf,id){

  let notes = localStorage.getItem("ip");

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
      localStorage.setItem("ip", JSON.stringify(notesObj));
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

