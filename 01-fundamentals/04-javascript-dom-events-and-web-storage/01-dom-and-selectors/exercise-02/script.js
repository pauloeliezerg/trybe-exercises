console.log("Hello!");

// exercise 1
let header = document.querySelector("#header-container > h1");
header.style.backgroundColor = "rgb(0, 176, 105)";

// exercise 2
let urgentTasks = document.querySelectorAll(".emergency-tasks > div");
urgentTasks[0].style.backgroundColor = "rgb(255, 159, 132)";
urgentTasks[1].style.backgroundColor = "rgb(255, 159, 132)";

// exercise 3
let urgentTasksTitle = document.querySelectorAll(".emergency-tasks > div > h3");
urgentTasksTitle[0].style.backgroundColor = "rgb(165, 0, 243)";
urgentTasksTitle[1].style.backgroundColor = "rgb(165, 0, 243)";

// exercise 4
let notUrgentTasks = document.querySelectorAll(".no-emergency-tasks > div");
notUrgentTasks[0].style.backgroundColor = "rgb(249, 219, 94)";
notUrgentTasks[1].style.backgroundColor = "rgb(249, 219, 94)";

// exercise 5
let notUrgentTasksTitle = document.querySelectorAll(
  ".no-emergency-tasks > div > h3",
);
notUrgentTasksTitle[0].style.backgroundColor = "rgb(35, 37, 37)";
notUrgentTasksTitle[1].style.backgroundColor = "rgb(35, 37, 37)";

// exercise 6
let footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "rgb(0, 53, 51)";
