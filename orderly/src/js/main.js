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
  publisherList.innerHTML = "";
  home.appendChild(publisherList);
  let i = 0;
  db.publishers.orderBy("surname").each((pub) => {
    let li = document.createElement("li");
    li.addEventListener("click", () => {
      publisherViewScreen(pub, pub.id);
    });
    li.innerText = pub.surname + ", " + pub.firstname;
    publisherList.appendChild(li);
    i = i + 1;
  });
};

const publisherViewScreen = function (pub, id) {
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

  let btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.addEventListener("click", () => {
    db.publishers.delete(id);
    homeScreen();
  });
  home.appendChild(btnDelete);

  let btnUpdate = document.createElement("button");
  btnUpdate.innerText = "Update";
  btnUpdate.addEventListener("click", (event) => {
    updatePub(id);
  });
  home.appendChild(btnUpdate);
};

const addPublisherScreen = function () {
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

  publisherView.reset();

  let btnReset = document.createElement("button");
  btnReset.innerText = "Reset";
  btnReset.addEventListener("click", (event) => {
    publisherView.reset();
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

const exportPublishers = function () {
  db.open()
    .then(function () {
      const idbDatabase = db.backendDB(); // get native IDBDatabase object from Dexie wrapper
      // export to JSON, clear database, and import from JSON
      exportToJsonString(idbDatabase, "publishers", function (err, jsonString) {
        if (err) {
          console.error(err);
        } else {
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, "0");
          var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
          var yyyy = today.getFullYear();
          const data = jsonString;
          const blob = new Blob([data], { "application/json": [".json"] });
          const href = URL.createObjectURL(blob);
          const a = Object.assign(document.createElement("a"), {
            href,
            style: "display:none",
            download: "publishers " + yyyy + "-" + mm + "-" + dd + ".ord",
          });
          document.body.appendChild(a);
          a.click();
          URL.revokeObjectURL(href);
          a.remove();
        }
      });
    })
    .catch(function (e) {
      console.error("Could not connect. " + e);
    });
};

const importPublishers = function () {
  var file = document.querySelector("#import-publishers").files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    clearDatabase(db.backendDB(), "publishers");
    importFromJsonString(db.backendDB(), reader.result, function (err) {});
  };
  reader.readAsText(file);
};

var db = new Dexie("Congregation");
db.version(5).stores({
  publishers:
    "++id, firstname, middlename, surname, othername, datebirth, datebaptism, phonemobile, phonehome, emailtheocratic, emailpersonal, familyhead, family, pioneer, report, *tags",
  clam: "week, chaiman, talk",
});

// const header = document.querySelector("#header-container");
// const main = document.querySelector("main");

// const title =  document.createElement('div')
// title.className = 'title'
// title.innerText = ''

// const addPublisher = document.createElement("div");
// addPublisher.innerHTML = '<i class="material-symbols-sharp nav-icon"> add </i>'
// addPublisher.addEventListener("click", () => {
//   addPublisherScreen();
// });

// const publisherList = document.createElement("div");

// // const home = document.querySelector("#home");

// const publisherDetails = document.createElement("form");

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


const header = document.querySelector('header')
const headerContainer = document.querySelector('.header-container')
const headerLeft = document.querySelector('.header-left')
const title = document.querySelector('.title')
const headerRightContainer = document.querySelector('.header-right-container')
const headerRight_1 = document.querySelector('.header-right-1')

const main = document.querySelector('main')

const publisherList = document.createElement("div");




dashboard();