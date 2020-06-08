const filterInput = document.getElementById("filter");
const todoform = document.getElementById("todo-form");

todoform.addEventListener("submit", submitform);

function submitform(e) {
    console.log("Submit Event");

    e.preventDefault();

}
// filterInput.addEventListener("focus", function (e) {
//
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
//     // console.log("What's up");
// });
// filterInput.onfocus = function () {
//     console.log("What's up");
//
// }

