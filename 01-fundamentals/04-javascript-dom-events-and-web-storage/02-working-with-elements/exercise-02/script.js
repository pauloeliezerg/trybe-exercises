// 1. create a sibling for "elementoOndeVoceEsta"
let elementoOndeVoceEstaSibling = document.createElement("section");
elementoOndeVoceEstaSibling.innerText = "elementoOndeVoceEsta's sibling";

let elementoOndeVoceEstaParent = document.getElementById(
  "elementoOndeVoceEsta",
).parentNode;

elementoOndeVoceEstaParent.appendChild(elementoOndeVoceEstaSibling);

// 2. create a child for "elementoOndeVoceEsta"
let elementoOndeVoceEstaChild = document.createElement("section");
elementoOndeVoceEstaChild.innerText = "elementoOndeVoceEsta's child";

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
elementoOndeVoceEsta.appendChild(elementoOndeVoceEstaChild);

// 3. create a child for "primeiroFilhoDoFilho"
let primeiroFilhoDoFilhoChild = document.createElement("section");
primeiroFilhoDoFilhoChild.innerText = "primeiroFilhoDoFilho's child";

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoChild);

// 4. from this created child, access "terceiroFilho"
let terceiroFilho =
  primeiroFilhoDoFilhoChild.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);
