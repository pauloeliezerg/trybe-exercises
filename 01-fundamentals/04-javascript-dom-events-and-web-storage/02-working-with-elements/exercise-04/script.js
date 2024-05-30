// 1. add the h1 tag with the text "TrybeTrip - Agência de Viagens" as a child of the body tag
const h1Tag = document.createElement("h1");
h1Tag.innerText = "TrybeTrip - Agência de Viagens";

document.body.appendChild(h1Tag);

// 2. add the main tag with the main-content class as a child of the body tag
const mainContent = document.createElement("main");
mainContent.className = "main-content";

document.body.appendChild(mainContent);

// 3. add the section tag with the center-content class as a child of the main tag created in step 2
const centerContent = document.createElement("section");
centerContent.className = "center-content";

mainContent.appendChild(centerContent);

// 4. add the p tag as a child of the section created in step 3 and add some text
const someText = document.createElement("p");
someText.innerText = "Lorem Ipsum";

centerContent.appendChild(someText);

// 5. add the section tag with the left-content class as a child of the main tag created in step 2
const leftContent = document.createElement("section");
leftContent.className = "left-content";

mainContent.appendChild(leftContent);

// 6. add the section tag with the right-content class as a child of the main tag created in step 2
const rightContent = document.createElement("section");
rightContent.className = "right-content";

mainContent.appendChild(rightContent);

// 7. add an image with src set to value https://picsum.photos/200 and class small-image. This element must be a child of the section created in step 5
const smallImage = document.createElement("img");
smallImage.src = "https://picsum.photos/200";
smallImage.class = "small-image";

leftContent.appendChild(smallImage);

// 8. add an unordered list with the values ​​1 to 10 spelled out, that is, one, two, three, and so on. This list must be a child of the section created in step 6
const numberList = document.createElement("ul");
const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

rightContent.appendChild(numberList);

for (let index = 0; index < numbers.length; index += 1) {
  const listItem = document.createElement("li");
  listItem.innerText = numbers[index];
  numberList.appendChild(listItem);
}

// 9. add 3 h3 tags, all children of the main created in step 2
for (let index = 0; index < 3; index += 1) {
  const h3Tag = document.createElement("h3");
  h3Tag.innerText = index;

  mainContent.appendChild(h3Tag);
}

// (bonus) 1. add the title class to the created h1 tag
h1Tag.className = "title";

// (bonus) 2. add the description class to the 3 h3 tags created
const h3Tag = document.getElementsByTagName("h3");

for (let index = 0; index < h3Tag.length; index += 1)
  h3Tag[index].className = "description";

// (bonus) 3. remove the section created in step 5 (the one with the left-content class) using the .removeChild() function
mainContent.removeChild(leftContent);

// (bonus) 4. center the section created in step 6 (the one with the right-content class)
rightContent.style.marginRight = "auto";

// (bonus) 5. change the background color of the parent element of the section created in step 3 (the one that has the center-content class) to green
mainContent.style.backgroundColor = "green";

// (bonus) 6. remove the last two elements (nine and ten) from the list created in step 8
numberList.lastChild.remove();
numberList.lastChild.remove();
