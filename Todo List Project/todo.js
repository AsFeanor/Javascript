// Selecting all elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { // All Event Listeners
    form.addEventListener("submit",addTodo);

}
function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === ""){
        /*<div class="alert alert-danger" role="alert">
                This is a danger alert—check it out!
            </div>
         */
        showAlert("danger","Lutfen bir todo girin...");
    }
    else{
        addTodoToUI(newTodo);
        showAlert("success","Todo basari ile eklendi");
    }



    e.preventDefault();
}
function showAlert(type,message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    // setTimeout

    setTimeout(function () {
        alert.remove();
    },1250);

}
function addTodoToUI(newTodo) { //It will add the string value to the UI as a list item
    /*

    <li class="list-group-item d-flex justify-content-between">
                    Todo 1
                    <a href = "#" class ="delete-item">
                        <i class = "fa fa-remove"></i>
                    </a>

                </li>
     */
    // Creating List Item
    const listItem = document.createElement("li");
    // Creating Link
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    // Adding Text Node
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // Adding List Item to Todo List

    todoList.appendChild(listItem);
    todoInput.value = "";

}