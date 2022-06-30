const dashboard = function () {

  header.innerHTML = "";
  header.textContent = "Dashboard";
  main.innerHTML = "";

  db.publishers.toCollection().count(function (count) {
    console.log(count + " friends in total");
    var congSize = count;
    main.textContent = "Number of Contacts = " + congSize;
  });
  
};

const publishers = function () {
  header.innerHTML = "";
  header.textContent = "Publishers";
  header.addEventListener("click", () => {
    addPublisherScreen(pub, pub.id);
  });
  main.innerHTML = "";

  publisherList.innerHTML = "";
  publisherList.className = "card"
  main.appendChild(publisherList);
  let i = 0;
  db.publishers.orderBy("surname").each((pub) => {
    let card = document.createElement("div");
    card.className = "name"
    card.addEventListener("click", () => {
      publisherView(pub, pub.id);
    });
    card.innerText = pub.surname + ", " + pub.firstname;
    publisherList.appendChild(card);
    i = i + 1;
  });
};
