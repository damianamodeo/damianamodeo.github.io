const addPublisher = function () {
  const backToPublishersViewIcon = document.createElement("div");
  backToPublishersViewIcon.innerText = "Cancel";
  headerLeftContainer.innerHTML = "";
  headerLeftContainer.appendChild(backToPublishersViewIcon);
  backToPublishersViewIcon.addEventListener("click", () => {
    publishers();
  });

  title.innerText = "Add Publisher";

  const submitNewPublisherIcon = document.createElement("div");
  submitNewPublisherIcon.innerText = "Submit";
  headerRightContainer.innerHTML = "";
  headerRightContainer.appendChild(submitNewPublisherIcon);
  submitNewPublisherIcon.addEventListener("click", () => {
    db.publishers.add({
      firstname: firstName.value,
      surname: lastName.value,
    });
    newPublisherForm.reset();
    publishers();
  });

  main.innerHTML = "";

  const newPublisherForm = document.createElement("form");
  const firstName = document.createElement("input");
  const lastName = document.createElement("input");

  newPublisherForm.appendChild(firstName);
  newPublisherForm.appendChild(lastName);
  main.appendChild(newPublisherForm);
};

const publisherView = function (publisher) {
  const backToPublishersIcon = document.createElement("div");
  backToPublishersIcon.innerHTML =
    '<span class="material-symbols-sharp nav-icon"> arrow_back_ios </span>';
  headerLeftContainer.innerHTML = "";
  headerLeftContainer.appendChild(backToPublishersIcon);
  backToPublishersIcon.addEventListener("click", () => {
    publishers();
  });

  title.innerText = publisher.firstname + " " + publisher.surname;

  const editPublisherIcon = document.createElement("div");
  editPublisherIcon.innerText = "Edit";
  headerRightContainer.innerHTML = "";
  headerRightContainer.appendChild(editPublisherIcon);
  editPublisherIcon.addEventListener("click", () => {
    editPublisher(publisher);
  });

  main.innerHTML = "";

  const firstName = document.createElement("div");
  firstName.innerText = publisher.firstname;
  main.appendChild(firstName);

  // const middleName = document.createElement("div");
  // middleName.innerText = publisher.middlename;
  // main.appendChild(middleName);

  const surname = document.createElement("div");
  surname.innerText = publisher.surname;
  main.appendChild(surname);

  // const otherName = document.createElement("div");
  // otherName.innerText = publisher.othername;
  // main.appendChild(otherName);

  // const dateBirth = document.createElement("div");
  // dateBirth.innerText = publisher.datebirth;
  // main.appendChild(dateBirth);

  // const dateBaptism = document.createElement("div");
  // dateBaptism.innerText = publisher.datebaptism;
  // main.appendChild(dateBaptism);

  // const phoneMobile = document.createElement("div");
  // phoneMobile.innerText = publisher.phonemobile;
  // main.appendChild(phoneMobile);

  // const phoneHome = document.createElement("div");
  // phoneHome.innerText = publisher.phonehome;
  // main.appendChild(phoneHome);

  // const emailPersonal = document.createElement("div");
  // emailPersonal.innerText = publisher.emailpersonal;
  // main.appendChild(emailPersonal);

  // const emailTheocratic = document.createElement("div");
  // emailTheocratic.innerText = publisher.emailtheocratic;
  // main.appendChild(emailTheocratic);
};

const editPublisher = function (publisher) {
  const backToPublisherViewIcon = document.createElement("div");
  backToPublisherViewIcon.innerText = "Cancel";
  headerLeftContainer.innerHTML = "";
  headerLeftContainer.appendChild(backToPublisherViewIcon);
  backToPublisherViewIcon.addEventListener("click", () => {
    publisherView(publisher);
  });

  title.innerText = "Edit Publisher";

  const ammendPublisherIcon = document.createElement("div");
  ammendPublisherIcon.innerText = "Done";
  headerRightContainer.innerHTML = "";
  headerRightContainer.appendChild(ammendPublisherIcon);

  main.innerHTML = "";

  const ammendPublisherForm = document.createElement("form");
  const firstName = document.createElement("input");
  const firstNameLabel = document.createElement('div')
  const firstNameContainer = document.createElement('div')
  
  const middleName = document.createElement("input");
  const middleNameLabel = document.createElement('div')
  const middleNameContainer = document.createElement('div')
  
  const surname = document.createElement("input");
  const surnameLabel = document.createElement('div')
  const surnameContainer = document.createElement('div')
  
  const otherName = document.createElement("input");
  const otherNameLabel = document.createElement('div')
  const otherNameContainer = document.createElement('div')
  
  const dateBirth = document.createElement("input");
  const dateBirthLabel = document.createElement('div')
  const dateBirthContainer = document.createElement('div')
  
  const dateBaptism = document.createElement("input");
  const dateBaptismLabel = document.createElement('div')
  const dateBaptismContainer = document.createElement('div')
  
  const phoneMobile = document.createElement("input");
  const phoneMobileLabel = document.createElement('div')
  const phoneMobileContainer = document.createElement('div')
  
  const phoneHome = document.createElement("input");
  const phoneHomeLabel = document.createElement('div')
  const phoneHomeContainer = document.createElement('div')
  
  const emailTheocratic = document.createElement("input");
  const emailTheocraticLabel = document.createElement('div')
  const emailTheocraticContainer = document.createElement('div')
  
  const emailPersonal = document.createElement("input");
  const emailPersonalLabel = document.createElement('div')
  const emailPersonalContainer = document.createElement('div')
  

  dateBirth.type = "date";
  dateBaptism.type = "date";
  phoneMobile.type = "tel";
  phoneHome.type = "tel";
  emailPersonal.type = "email";
  emailTheocratic.type = "email";

  firstName.value = publisher.firstname;
  middleName.value = publisher.middlename;
  surname.value = publisher.surname;
  otherName.value = publisher.othername;
  dateBirth.value = publisher.datebirth;
  dateBaptism.value = publisher.datebaptism;
  phoneMobile.value = publisher.phonemobile;
  phoneHome.value = publisher.phonehome;
  emailTheocratic.value = publisher.emailtheocratic;
  emailPersonal.value = publisher.emailpersonal;

  
  
  
  
  
  
  
  
  
  

  const names = document.createElement("div");
  names.className = "names-container";
  const phoneNumbers = document.createElement("div");
  phoneNumbers.className = "phoneNumbers-container";
  const emails = document.createElement("div");
  emails.className = "emails-container";
  const dates = document.createElement("div");
  dates.className = "dates-container";

  ammendPublisherForm.appendChild(firstName);
  ammendPublisherForm.appendChild(middleName);
  ammendPublisherForm.appendChild(surname);
  ammendPublisherForm.appendChild(otherName);
  ammendPublisherForm.appendChild(dateBirth);
  ammendPublisherForm.appendChild(dateBaptism);
  ammendPublisherForm.appendChild(phoneMobile);
  ammendPublisherForm.appendChild(phoneHome);
  ammendPublisherForm.appendChild(emailTheocratic);
  ammendPublisherForm.appendChild(emailPersonal);

  main.appendChild(ammendPublisherForm);

  ammendPublisherIcon.addEventListener("click", () => {
    db.publishers.update(publisher.id, {
      firstname: firstName.value,
      surname: lastName.value,
    });
    ammendPublisherForm.reset();
    db.publishers
      .where("id")
      .equals(publisher.id)
      .first(function (updatedPublisher) {
        publisherView(updatedPublisher);
      });
  });
};

const updatePub = function (pub) {
  db.publishers.put({
    id: pub,
    firstname: firstName.value,
    middlename: middleName.value,
    surname: surname.value,
    othername: otherName.value,
    datebirth: dateBirth.value,
    datebaptism: dateBaptism.value,
    phonemobile: phoneMobile.value,
    phonehome: phoneHome.value,
    emailtheocratic: emailTheocratic.value,
    emailpersonal: emailPersonal.value,
  });
};
