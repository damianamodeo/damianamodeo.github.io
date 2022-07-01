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
  headerLeft.innerHTML = '<span class="material-symbols-sharp nav-icon"> arrow_back_ios </span>'
  title.innerText = "Publishers"
  headerRight_1.innerHTML = '<span class="material-symbols-sharp nav-icon"> add </span>'
  
  headerRight_1.addEventListener("click", () => {
    addPublisher();
  });

  main.innerHTML = "";

  publisherList.innerHTML = "";
  publisherList.className = "card-list"
  main.appendChild(publisherList);
  let i = 0;
  db.publishers.orderBy("surname").each((pub) => {
    let card = document.createElement("div");
    card.className = "card"
    card.addEventListener("click", () => {
      publisherView(pub, pub.id);
    });
    card.innerText = pub.surname + ", " + pub.firstname;
    publisherList.appendChild(card);
    i = i + 1;
  });
};
