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
  // document
  //   .querySelector("#reset-new-pub")
  //   .addEventListener("click", resetNewPub);
  // document
  //   .querySelector("#submit-new-pub")
  //   .addEventListener("click", submitNewPub);
  // createPublisherList();
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





document.addEventListener("DOMContentLoaded", init);
