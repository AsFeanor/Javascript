// Creating New Element

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

// Text Content

// cardbody.textContent = "asdfasdfa";

// Text Node

// const text = document.createTextNode("What's up");
// cardbody.appendChild(text);
// console.log(cardbody);

newLink.appendChild(document.createTextNode("Go to the Different Page."));
cardbody.appendChild(newLink);


console.log(newLink);