const navBar = function () {
  home.innerHTML = "";
  publisherView.innerHTML = "";

  let btnHome = document.createElement("button");
  btnHome.innerText = "Home";
  btnHome.addEventListener("click", () => {
    homeScreen();
  });
  home.appendChild(btnHome);

  let btnAddPublisher = document.createElement("button");
  btnAddPublisher.innerText = "Add";
  btnAddPublisher.addEventListener("click", () => {
    addPublisherScreen();
  });
  home.appendChild(btnAddPublisher);
};

const homeScreen = function () {
  navBar();
  publisherList.innerHTML = ''
  home.appendChild(publisherList);
  let i = 0;
  db.publishers.orderBy("surname").each((pub) => {
    let li = document.createElement("li");
    li.addEventListener("click", () => {
      publisherViewScreen(pub);
    });
    li.innerText = pub.surname + ", " + pub.firstname;
    publisherList.appendChild(li);
    i = i + 1;
  });
};

const publisherViewScreen = function (pub) {
  navBar();

  firstName.value = pub.firstname;
  middleName.value = pub.middlename;
  lastName.value = pub.surname;
  otherName.value = pub.othername;
  dateBirth.value = pub.datebirth;
  dateBaptism.value = pub.datebaptism;
  phoneMobile.value = pub.phonemobile;
  phoneHome.value = pub.phonehome;
  emailPersonal.value = pub.emailpersonal;
  emailTheocratic.value = pub.emailtheocratic;

  home.appendChild(publisherView);
  publisherView.appendChild(firstName);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(middleName);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(lastName);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(otherName);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(dateBirth);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(dateBaptism);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(phoneMobile);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(phoneHome);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(emailPersonal);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(emailTheocratic);
  publisherView.appendChild(document.createElement("br"));
};

const addPublisherScreen = function () {
  navBar();

  home.appendChild(publisherView);
  publisherView.appendChild(firstName);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(middleName);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(lastName);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(otherName);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(dateBirth);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(dateBaptism);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(phoneMobile);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(phoneHome);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(emailPersonal);
  publisherView.appendChild(document.createElement("br"));
  publisherView.appendChild(emailTheocratic);
  publisherView.appendChild(document.createElement("br"));

  publisherView.reset()

  let btnReset = document.createElement("button");
  btnReset.innerText = "Reset";
  btnReset.addEventListener("click", (event) => {
    publisherView.reset()
  });
  home.appendChild(btnReset);

  let btnSubmit = document.createElement("button");
  btnSubmit.innerText = "Submit";
  btnSubmit.addEventListener("click", (event) => {
    submitNewPub(event);
  });
  home.appendChild(btnSubmit);
};

const submitNewPub = function (event) {
  event.preventDefault();
  if (firstName == "" || lastName == "") {
    alert("hello");
  } else {
    db.publishers.add({
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
    publisherView.reset();
  }
};

const home = document.querySelector("#home");

const publisherList = document.createElement("ul");

const publisherView = document.createElement("form");

const firstName = document.createElement("input");
const middleName = document.createElement("input");
const lastName = document.createElement("input");
const otherName = document.createElement("input");
const dateBirth = document.createElement("input");
const dateBaptism = document.createElement("input");
const phoneMobile = document.createElement("input");
const phoneHome = document.createElement("input");
const emailPersonal = document.createElement("input");
const emailTheocratic = document.createElement("input");

dateBirth.type = "date";
dateBaptism.type = "date";
phoneMobile.type = "tel";
phoneHome.type = "tel";
emailPersonal.type = "email";
emailTheocratic.type = "email";

homeScreen();
