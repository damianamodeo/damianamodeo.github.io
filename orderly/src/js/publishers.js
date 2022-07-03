const addPublisher = function () {
  main.innerHTML = "";

  const newPublisherForm = document.createElement("form");
  const firstName = document.createElement("input");
  const lastName = document.createElement("input");
  const submitNewPublisher = document.createElement("button");
  submitNewPublisher.innerText = 'Submit'
  submitNewPublisher.addEventListener("click", () => {
    db.publishers.add({
      firstname: firstName.value,
      surname: lastName.value,
    });
    newPublisherForm.reset();
  });
  newPublisherForm.appendChild(firstName);
  newPublisherForm.appendChild(lastName);
  newPublisherForm.appendChild(submitNewPublisher);
  main.appendChild(newPublisherForm);
};

const publisherView = function (publisher) {
  headerLeft.innerHTML = '<i class="material-symbols-sharp nav-icon"> arrow_back_ios </i>'
  title.innerText =  publisher.firstname + ' ' + publisher.surname
  headerRight_1.innerHTML = '<div>Edit</div>'
  
  headerLeft.addEventListener("click", () => {
    publishers();
  });
  headerRight_1.addEventListener("click", () => {
    // editPublisher();
  });

  main.innerHTML = "";

  const firstName = document.createElement('div')
  firstName.innerText = publisher.firstname
  main.appendChild(firstName)

  const middleName = document.createElement('div')
  middleName.innerText = publisher.middlename
  main.appendChild(middleName)

  const surname = document.createElement('div')
  surname.innerText = publisher.surname
  main.appendChild(surname)

  const otherName = document.createElement('div')
  otherName.innerText = publisher.othername
  main.appendChild(otherName)

  const dateBirth = document.createElement('div')
  dateBirth.innerText = publisher.datebirth
  main.appendChild(dateBirth)

  const dateBaptism = document.createElement('div')
  dateBaptism.innerText = publisher.datebaptism
  main.appendChild(dateBaptism)

  const phoneMobile = document.createElement('div')
  phoneMobile.innerText = publisher.phonemobile
  main.appendChild(phoneMobile)

  const phoneHome = document.createElement('div')
  phoneHome.innerText = publisher.phonehome
  main.appendChild(phoneHome)

  const emailPersonal = document.createElement('div')
  emailPersonal.innerText = publisher.emailpersonal
  main.appendChild(emailPersonal)

  const emailTheocratic = document.createElement('div')
  emailTheocratic.innerText = publisher.emailtheocratic
  main.appendChild(emailTheocratic)

}
