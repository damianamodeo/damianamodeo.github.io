var db = new Dexie("Congregation");
db.version(1).stores({
    publishers: "++id, surname, firstname, othername, birthdate, age, *tags",
});

const init = function(){
  document.getElementById("reset-new-pub").addEventListener('click', resetNewPub);
  document.getElementById("submit-new-pub").addEventListener('click', submitNewPub);
  createPublisherList()
}

const resetNewPub = function(event){ 
  event.preventDefault();
  document.getElementById("new-pub-form").reset();
}

const submitNewPub = function(event){
  event.preventDefault();
  var fn = document.getElementById('new-pub-firstname').value;
  var sn = document.getElementById('new-pub-surname').value;
  if (fn == '' || sn == '') {
    alert("hello")
  }else{
    db.publishers.add({
      firstname: fn,
      surname: sn
    });
    document.getElementById("new-pub-form").reset();
    removePublisherList();
    createPublisherList();
  }
}

const validate = function(){

}

function testFunction(event){
  event.preventDefault(); 
  console.log("testFunction() run")
  Dexie.delete('MyDatabase');
}

function deleteDatabase(event){
  event.preventDefault();
  console.log("deleteDatabase() run")
  Dexie.delete('Congregation');
}

const removePublisherList = function(){
  var e = document.querySelector("#pub-list");
  var child = e.lastElementChild; 
  while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
  }
}

const createPublisherList = function(){
  var e = document.querySelector("#pub-list");
  let i = 0;
  db.publishers.orderBy('surname').each(publisher => {
    let li = document.createElement("li");
    const removePub = document.createElement('span');
    removePub.innerHTML = '       x';
    removePub.addEventListener('click', ()=>{
      removePub.parentElement.remove();
      db.publishers.delete(publisher.id);
    })
    li.innerText = publisher.surname + ", " + publisher.firstname;
    e.appendChild(li);
    li.appendChild(removePub);
    i = i+1;
  })

}

document.addEventListener('DOMContentLoaded', init)

