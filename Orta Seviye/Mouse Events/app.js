const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// click event

// title.addEventListener("click",run);
// Double Click
// title.addEventListener("dblclick",run);
// Mouse Down
// title.addEventListener("mousedown",run);
// mouse up
// title.addEventListener("mouseup",run);
// Mouse Over
// title.addEventListener("mouseover",run);
// Mouse Out
// title.addEventListener("mouseout",run);


// cardBody.addEventListener("mouseover",run);

// Mouse Enter and Mouse Leave

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

function run(e) {
    console.log(e.type);

}