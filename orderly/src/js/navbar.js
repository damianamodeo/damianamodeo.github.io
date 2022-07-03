const dashboard = function () {
  headerLeft.innerHTML = ''
  title.innerText = "Dashboard"
  headerRight_1.innerHTML = ''


  // header.innerText = "";
  // title.innerText = 'Dashboard';
  // header.appendChild(title);
  // main.innerHTML = "";

  // db.publishers.toCollection().count(function (count) {
  //   console.log(count + " friends in total");
  //   var congSize = count;
  //   main.textContent = "Number of Contacts = " + congSize;
  // });
  
};

const publishers = function () {
  title.innerText = "Publishers"
  headerRight_1.innerHTML = '<i class="material-symbols-sharp nav-icon"> add </i>'
  
  headerRight_1.addEventListener("click", () => {
    addPublisher();
  });

  main.innerHTML = "";

  publisherList.innerHTML = "";
  publisherList.className = "card-list"
  main.appendChild(publisherList);
  let i = 0;
  db.publishers.orderBy("surname").each((publisher) => {
    let card = document.createElement("div");
    card.className = "card"
    card.addEventListener("click", () => {
      publisherView(publisher);
    });
    card.innerText = publisher.surname + ", " + publisher.firstname;
    publisherList.appendChild(card);
    i = i + 1;
  });
};
