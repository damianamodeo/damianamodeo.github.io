function testFunction(event){

  event.preventDefault();
  console.log("testFunction() run")
  Dexie.delete('MyDatabase');

}

function deleteDatabase(event){

  event.preventDefault();
  console.log("deleteDatabase() run")
  Dexie.delete('Congregation');

}

function createDatabase(event){

  event.preventDefault();
  console.log("createDatabase() run")

  
  var db = new Dexie("Congregation");
  db.version(1).stores({
      elders: "++id, surname, age, *tags",
  });

  db.elders.bulkAdd([
    {surname: "Foo", age: 31},
    {surname: "Bar", age: 32}
  ]);




}

