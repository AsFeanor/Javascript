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
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
}
function deleteTodo(e) {

    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo basari ile silindi...")
    }
}
function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo,index) {
        if (todo === deletetodo){
            todos.splice(index,1); // Deleting value from array.
        }

    });

    localStorage.setItem("todos",JSON.stringify(todos));
}
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        addTodoToUI(todo);

    })
}
function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === ""){

        showAlert("danger","Lutfen bir todo girin...");
    }
    else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo basari ile eklendi");
    }


    e.preventDefault();
}
function getTodosFromStorage() { // This is getting all todos from storage
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));

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