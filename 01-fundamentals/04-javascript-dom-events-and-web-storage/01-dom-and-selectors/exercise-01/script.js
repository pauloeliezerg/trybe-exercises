// 1. retrieve the element that contains the page title and change it to the name of a movie of your choice
let pageTitle = document.getElementById("page-title");
pageTitle.innerText = "Lorem Ipsum";

// 2. retrieve the first paragraph and change the text to a summary of your favorite movie
let firstParagraphWithId = document.getElementById("first-paragraph");
firstParagraphWithId.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris nunc, blandit a est condimentum, efficitur accumsan turpis. Vestibulum felis turpis, commodo eget sem in, fermentum ornare justo. Aliquam tortor ex, elementum quis elementum et, aliquam mattis quam. Donec tincidunt lorem enim, in placerat dolor cursus ac. Phasellus massa massa, eleifend id nisi ac, hendrerit ultricies libero. Integer tristique mauris vitae lobortis malesuada. Sed neque quam, pretium et massa sed, cursus mollis ipsum. Aliquam pellentesque consequat nunc in dignissim. Maecenas egestas, sapien et gravida ullamcorper, quam justo congue metus, in sollicitudin quam neque nec augue. Integer risus neque, pharetra a vulputate a, accumsan nec massa. Sed pellentesque tellus sit amet erat pellentesque, a tempor velit posuere. Integer vitae ultrices augue.";

// 3. recover the subtitle and change it to: "Main Information"
let subtitleWithId = document.getElementById("subtitle");
subtitleWithId.innerText = "Main information";

// 4. retrieve the paragraphs using getElementsByClassName, and change the font of the first paragraph to italic
let firstParagraphWithClass =
  document.getElementsByClassName("paragraph-style")[0];
firstParagraphWithClass.style.fontStyle = "italic";

// 5. recover the second paragraph and include the main information
let secondParagraph = document.getElementsByClassName("paragraph-style")[1];
secondParagraph.innerText = `
Lorem: Ipsum
Lorem: Ipsum
Lorem: Ipsum
Lorem: Ipsum
Lorem: Ipsum
`;

// 6. retrieve the subtitle using getElementsByTagName and change the font color to one of your choice
let subtitleWithTag = document.getElementsByTagName("h2")[0];
subtitleWithTag.style.color = "green";
