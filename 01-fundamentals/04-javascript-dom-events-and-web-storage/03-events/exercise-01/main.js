const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. copy this file and edit only it
// 1.1. note that one of the boxes is slightly above the others; why does this occur?

// 2. create a function that adds the 'tech' class to the `li` element when it is clicked
// 2.1. there must be only one element with the class 'tech'; how is it possible to do this? tip: remember the `.classList.remove` method
const handleTech = (event) => {
  const focusedTech = document.querySelector(".tech");

  focusedTech.classList.remove("tech");
  event.target.classList.add("tech");
  input.value = "";
};

firstLi.addEventListener("click", handleTech);
secondLi.addEventListener("click", handleTech);
thirdLi.addEventListener("click", handleTech);

// 3. create a function that, when typing in the text box, changes the text of the element with class 'tech'
input.addEventListener("input", (event) => {
  const focusedTech = document.querySelector(".tech");

  focusedTech.innerText = event.target.value;
});

// 4. create a function that, when double clicking on 'My Spotrybefy top 3', redirect to some page
// 4.1. how about redirecting it to your portfolio; tip: remember the `window.location.replace` and `window.open` methods

// 5. create a function that, when hovering over 'My Spotrybefy top 3', changes its color

// below is an example of using event.target

const resetText = (event) => {
  // the event is passed as a parameter to the function
  event.target.innerText = "Opção reiniciada";
  // the event has several properties, but the most used is event.target, which returns the object that triggered the event.
};

firstLi.addEventListener("dblclick", resetText);

// no need to pass the parameter inside the resetText callback; the browser itself will do this work for you, isn't that cool?
// this way, the event.target in the function will return the 'firstLi' object.
