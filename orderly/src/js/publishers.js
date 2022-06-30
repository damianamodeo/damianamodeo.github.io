
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

  firstName.className = 'details'
  middleName.className = 'details'
  lastName.className = 'details'
  otherName.className = 'details'
  dateBirth.className = 'details'
  dateBaptism.className = 'details'
  phoneMobile.className = 'details'
  phoneHome.className = 'details'
  emailPersonal.className = 'details'
  emailTheocratic.className = 'details'

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