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