const btn = document.getElementById("btn");

const getData = () => {
  fetch("https://akademia108.pl/api/ajax/get-post.php")
    .then((response) => response.json())
    .then((data) => {
      let id = document.createElement("p");
      let userId = document.createElement("p");
      let title = document.createElement("p");
      let body = document.createElement("p");
      let hr = document.createElement("hr");

      id.innerText = data.id;
      userId.innerText = data.userId;
      title.innerText = data.title;
      body.innerText = data.body;

      document.body.appendChild(id);
      document.body.appendChild(userId);
      document.body.appendChild(title);
      document.body.appendChild(body);
      document.body.append(hr);
    });
};

btn.addEventListener("click", getData);
