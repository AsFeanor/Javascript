// Session Storage

// Selecting Buttons

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputs

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#allvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addtem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addtem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);

}

function deleteItem(e) {

}

function clearItems(e) {

}