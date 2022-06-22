var db = new Dexie("Congregation");
db.version(1).stores({
    publishers: "++id, firstname, middlename, surname, othername, datebirth, datebaptism, phonemobile, phonehome, emailtheocratic, emailpersonal, *tags",
});

const init = function(){
  document.querySelector("#reset-new-pub").addEventListener('click', resetNewPub);
  document.querySelector("#submit-new-pub").addEventListener('click', submitNewPub);
  createPublisherList()
}

const resetNewPub = function(event){ 
  event.preventDefault();
  document.querySelector("#new-pub-form").reset();
}

const submitNewPub = function(event){
  event.preventDefault();
  var nameFirst = document.querySelector('#new-pub-firstname').value;
  var nameMiddle = document.querySelector('#new-pub-middlename').value;
  var nameLast= document.querySelector('#new-pub-surname').value;
  var nameOther = document.querySelector('#new-pub-othername').value;
  var dateBirth = document.querySelector('#new-pub-date-birth').value;
  var dateBaptism = document.querySelector('#new-pub-date-baptism').value;
  var phoneMobile = document.querySelector('#new-pub-phone-mobile').value;
  var phoneHome = document.querySelector('#new-pub-phone-home').value;
  var emailTheocratic = document.querySelector('#new-pub-email-theocratic').value;
  var emailPersonal = document.querySelector('#new-pub-email-personal').value;
  if (nameFirst == '' || nameLast == '') {
    alert("hello")
  }else{
    db.publishers.add({
      firstname: nameFirst, 
      middlename: nameMiddle, 
      surname: nameLast, 
      othername: nameOther, 
      datebirth: dateBirth, 
      datebaptism: dateBaptism, 
      phonemobile: phoneMobile, 
      phonehome: phoneHome, 
      emailtheocratic: emailTheocratic, 
      emailpersonal: emailPersonal
    });
    document.querySelector("#new-pub-form").reset();
    removePublisherList();
    createPublisherList();
  }
}

const saveAsPublishers = function(){
  file = window.showSaveFilePicker({
    suggestedName: "publishers.ord",
    types: [{
      description: 'Orderly file',
      accept: {'application/ord': ['.ord']},
    }]
  });
  file.write(JSON.stringify(db.publishers));
  file.close();
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