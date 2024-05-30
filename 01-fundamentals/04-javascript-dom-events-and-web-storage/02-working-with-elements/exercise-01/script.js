// 1. access the "where-are-you" element
let whereAreYou = document.getElementById("where-are-you");

// 2. access "parent" from "where-are-you" and add a color to it
let parentFromWhereAreYou = whereAreYou.parentNode;
parentFromWhereAreYou.style.color = "red";

// 3. Go to "first-child-of-child" and add text to it
let firstChildOfChild = document.getElementById("first-child-of-child");
firstChildOfChild.innerText = "Lorem Ipsum";

// 4. access "first child" from "parent"
let firstChildFromParent = parentFromWhereAreYou.firstElementChild;

// 5. access first-child from "where-are-you"
let firstChildFromWhereAreYou = whereAreYou.previousElementSibling;

// 6. access the text Attention! from "where-are-you"
let attentionFromWhereAreYou = whereAreYou.nextSibling.textContent;

// 7. access the third-child from "where-are-you"
let thirdChildFromWhereAreYou = whereAreYou.nextElementSibling;

// 8. access the "third-child" from "parent"
let thirdChildFromParent = parentFromWhereAreYou.children[2];
console.log(thirdChildFromParent);
