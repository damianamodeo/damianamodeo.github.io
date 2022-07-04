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
  const lastName = document.createElement("input");

  firstName.value = publisher.firstname;
  lastName.value = publisher.surname;

  ammendPublisherForm.appendChild(firstName);
  ammendPublisherForm.appendChild(lastName);
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
    surname: lastName.value,
    othername: otherName.value,
    datebirth: dateBirth.value,
    datebaptism: dateBaptism.value,
    phonemobile: phoneMobile.value,
    phonehome: phoneHome.value,
    emailtheocratic: emailTheocratic.value,
    emailpersonal: emailPersonal.value,
  });
};
