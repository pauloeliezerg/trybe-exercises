// 1. remove h2 tag, where-are-you's child
let whereAreYou = document.getElementById("where-are-you");
let h2Tag = document.querySelector("#where-are-you > h2");

whereAreYou.removeChild(h2Tag);
