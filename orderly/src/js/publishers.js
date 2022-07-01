
const publisherView = function (pub, id) {

  main.innerHTML = "";
  publisherDetails.innerHTML = "";



  firstName.textContent = pub.firstname;
  middleName.textContent = pub.middlename;
  lastName.textContent = pub.surname;
  otherName.textContent = pub.othername;
  dateBirth.textContent = pub.datebirth;
  dateBaptism.textContent = pub.datebaptism;
  phoneMobile.textContent = pub.phonemobile;
  phoneHome.textContent = pub.phonehome;
  emailPersonal.textContent = pub.emailpersonal;
  emailTheocratic.textContent = pub.emailtheocratic;

  firstName.className = 'card-details'
  middleName.className = 'card-details'
  lastName.className = 'card-details'
  otherName.className = 'card-details'
  dateBirth.className = 'card-details'
  dateBaptism.className = 'card-details'
  phoneMobile.className = 'card-details'
  phoneHome.className = 'card-details'
  emailPersonal.className = 'card-details'
  emailTheocratic.className = 'card-details'

  main.appendChild(publisherDetails);
  publisherDetails.appendChild(firstName);
  publisherDetails.appendChild(document.createElement("br"));
  publisherDetails.appendChild(middleName);
  publisherDetails.appendChild(document.createElement("br"));
  publisherDetails.appendChild(lastName);
  publisherDetails.appendChild(document.createElement("br"));
  publisherDetails.appendChild(otherName);
  publisherDetails.appendChild(document.createElement("br"));
  publisherDetails.appendChild(dateBirth);
  publisherDetails.appendChild(document.createElement("br"));
  publisherDetails.appendChild(dateBaptism);
  publisherDetails.appendChild(document.createElement("br"));
  publisherDetails.appendChild(phoneMobile);
  publisherDetails.appendChild(document.createElement("br"));
  publisherDetails.appendChild(phoneHome);
  publisherDetails.appendChild(document.createElement("br"));
  publisherDetails.appendChild(emailPersonal);
  publisherDetails.appendChild(document.createElement("br"));
  publisherDetails.appendChild(emailTheocratic);
  publisherDetails.appendChild(document.createElement("br"));

  // let btnDelete = document.createElement("button");
  // btnDelete.innerText = "Delete";
  // btnDelete.addEventListener("click", () => {
  //   db.publishers.delete(id);
  //   homeScreen();
  // });
  // home.appendChild(btnDelete);

  // let btnUpdate = document.createElement("button");
  // btnUpdate.innerText = "Update";
  // btnUpdate.addEventListener("click", (event) => {
  //   updatePub(id);
  // });
  // home.appendChild(btnUpdate);
};

const addPublisher = function () {
  main.innerHTML = "";

  const newPublisherForm = document.createElement('form')
  const firstName = document.createElement('input')
  const lastName = document.createElement('input')
  const submitNewPublisher = document.createElement('button')  
  submitNewPublisher.addEventListener("click", () => {
    db.publishers.add({
      firstname: firstName.value,
      surname: lastName.value,
    });
    newPublisherForm.reset();  });
  newPublisherForm.appendChild(firstName)
  newPublisherForm.appendChild(lastName)
  newPublisherForm.appendChild(submitNewPublisher)
  main.appendChild(newPublisherForm)

};


// const firstName = document.createElement("div");
// firstName.className = 'card-details'
// const middleName = document.createElement("div");
// middleName.className = 'card-details'
// const lastName = document.createElement("div");
// lastName.className = 'card-details'
// const otherName = document.createElement("div");
// otherName.className = 'card-details'
// const dateBirth = document.createElement("div");
// dateBirth.className = 'card-details'
// const dateBaptism = document.createElement("div");
// dateBaptism.className = 'card-details'
// const phoneMobile = document.createElement("div");
// phoneMobile.className = 'card-details'
// const phoneHome = document.createElement("div");
// phoneHome.className = 'card-details'
// const emailPersonal = document.createElement("div");
// emailPersonal.className = 'card-details'
// const emailTheocratic = document.createElement("div");
// emailTheocratic.className = 'card-details'



// dateBirth.type = "date";
// dateBaptism.type = "date";
// phoneMobile.type = "tel";
// phoneHome.type = "tel";
// emailPersonal.type = "email";
// emailTheocratic.type = "email";
