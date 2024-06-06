// selectors
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

// 1. add a click event to the element that has the id href. In the event function, implement the preventDefault method to prevent the element's default behavior. In other words, when you click on the link, nothing should happen
hrefLink.addEventListener("click", (event) => event.preventDefault());

// 2. add a click event on the checkbox element that has the input-checkbox id. In the event function, implement the preventDefault method to prevent the element's default behavior. In other words, when you click on the box, nothing should happen
inputCheckbox.addEventListener("click", (event) => event.preventDefault());
