var db = new Dexie("Congregation");
db.version(2).stores({
  publishers:
    "++id, firstname, middlename, surname, othername, datebirth, datebaptism, phonemobile, phonehome, emailtheocratic, emailpersonal, *tags",
  clam: "week, chaiman, talk",
});

// db.clam.bulkAdd([
//   {week: "Foo", chaiman: 'Damian'},
//   {week: "Bar", chaiman: 'Ben'}
// ]);

const init = function () {
  document
    .querySelector("#reset-new-pub")
    .addEventListener("click", resetNewPub);
  document
    .querySelector("#submit-new-pub")
    .addEventListener("click", submitNewPub);
  createPublisherList();
};

const resetNewPub = function (event) {
  event.preventDefault();
  document.querySelector("#new-pub-form").reset();
};

const submitNewPub = function (event) {
  event.preventDefault();
  var nameFirst = document.querySelector("#new-pub-firstname").value;
  var nameMiddle = document.querySelector("#new-pub-middlename").value;
  var nameLast = document.querySelector("#new-pub-surname").value;
  var nameOther = document.querySelector("#new-pub-othername").value;
  var dateBirth = document.querySelector("#new-pub-date-birth").value;
  var dateBaptism = document.querySelector("#new-pub-date-baptism").value;
  var phoneMobile = document.querySelector("#new-pub-phone-mobile").value;
  var phoneHome = document.querySelector("#new-pub-phone-home").value;
  var emailTheocratic = document.querySelector(
    "#new-pub-email-theocratic"
  ).value;
  var emailPersonal = document.querySelector("#new-pub-email-personal").value;
  if (nameFirst == "" || nameLast == "") {
    alert("hello");
  } else {
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
      emailpersonal: emailPersonal,
    });
    document.querySelector("#new-pub-form").reset();
    removePublisherList();
    createPublisherList();
  }
};

const saveAsPublishers = function () {
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

function testFunction(event) {
  event.preventDefault();
  console.log("testFunction() run");
  Dexie.delete("MyDatabase");
}

function deleteDatabase(event) {
  event.preventDefault();
  console.log("deleteDatabase() run");
  Dexie.delete("Congregation");
}

const removePublisherList = function () {
  var e = document.querySelector("#pub-list");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
};

const createPublisherList = function () {
  var e = document.querySelector("#pub-list");
  let i = 0;
  db.publishers.orderBy("surname").each((publisher) => {
    let li = document.createElement("li");
    const removePub = document.createElement("span");
    removePub.innerHTML = "       x";
    removePub.addEventListener("click", () => {
      removePub.parentElement.remove();
      db.publishers.delete(publisher.id);
    });
    li.innerText = publisher.surname + ", " + publisher.firstname;
    e.appendChild(li);
    li.appendChild(removePub);
    i = i + 1;
  });
};

document.addEventListener("DOMContentLoaded", init);
