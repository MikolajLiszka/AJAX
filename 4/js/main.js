const getData = () => {
  fetch("https://akademia108.pl/api/ajax/get-users.php")
    .then((response) => response.json())
    .then((data) => {
      for (item in data) {
        let person = data[item];
        // let personId = person.id;
        // let personName = person.name;
        // let personWebsite = person.website;
        let personId = document.createElement("p");
        let personName = document.createElement("p");
        let personWebsite = document.createElement("p");
        let p = document.createElement("p");

        personId.innerText = `User ID: ${person.id}`;
        document.body.appendChild(personId);

        personName.innerText = `User Name: ${person.name}`;
        document.body.appendChild(personName);

        personWebsite.innerText = `User URL: ${person.website}`;
        document.body.appendChild(personWebsite);

        p.innerText = "--------";
        document.body.appendChild(p);

        // console.log(person.id);
        // console.log(person.name);
        // console.log(person.website);
      }
    });
};

const scrollToEndOfThePage = () => {
  let doc = document.documentElement;
  let scrollHeight = doc.scrollHeight;
  let scrollTop = doc.scrollTop;
  let clientHeight = doc.clientHeight;
  let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

  if (sumScrollTopClientHeight >= scrollHeight) {
    getData();
  }

};

window.addEventListener("scroll", scrollToEndOfThePage);
