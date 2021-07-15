console.log("welcome armaan");
shownotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  shownotes();
});
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html =
      html +
      `<div class="notecard card my-3 mx-3" style="width: 18rem">
   <div class="card-body">
     <h5 class="card-title">note${index + 1}</h5>
     <p class="card-text">${element}</p>
     <button id="${index}"onclick="deletenotes(this.id)"class="btn btn-primary">delete note</button>
   </div>
 </div>`;
  });
  let noteselm = document.getElementById("notes");
  if (notesobj.length != 0) {
    noteselm.innerHTML = html;
  } else {
    noteselm.innerHTML = `Nothing to show ! use "add notes section " above to add notes.`;
  }
}
function deletenotes(index) {
  console.log("i am deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}
let search= document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval= search.value.toLowerCase();
    let notecards=document.getElementsByClassName('notecard');
    Array.from(notecards).forEach (function(element){
let cardtxt = element.getElementsByTagName("p")[0].innerText;
if(cardtxt.includes(inputval)){
element.style.display="block";
}
else{
    element.style.display="none";
}
    })
})
