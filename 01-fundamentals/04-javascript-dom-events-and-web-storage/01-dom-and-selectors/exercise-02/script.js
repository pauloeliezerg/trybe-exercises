console.log("Hello!");

// 1. change the header background color to rgb(0, 176, 105)
let header = document.querySelector("#header-container > h1");
header.style.backgroundColor = "rgb(0, 176, 105)";

// 2. change the background color of the Urgent and Important tasks div to rgb(255, 159, 132)
let urgentTasks = document.querySelectorAll(".emergency-tasks > div");
urgentTasks[0].style.backgroundColor = "rgb(255, 159, 132)";
urgentTasks[1].style.backgroundColor = "rgb(255, 159, 132)";

// 3. change the background color of the title of tasks that are Urgent and Important to rgb(165, 0, 243)
let urgentTasksTitle = document.querySelectorAll(".emergency-tasks > div > h3");
urgentTasksTitle[0].style.backgroundColor = "rgb(165, 0, 243)";
urgentTasksTitle[1].style.backgroundColor = "rgb(165, 0, 243)";

// 4. change the background color of the non-Urgent and Important tasks div to rgb(249, 219, 94)
let notUrgentTasks = document.querySelectorAll(".no-emergency-tasks > div");
notUrgentTasks[0].style.backgroundColor = "rgb(249, 219, 94)";
notUrgentTasks[1].style.backgroundColor = "rgb(249, 219, 94)";

// 5. change the background color of the title of tasks that are not Urgent and Important to rgb(35, 37, 37)
let notUrgentTasksTitle = document.querySelectorAll(
  ".no-emergency-tasks > div > h3",
);
notUrgentTasksTitle[0].style.backgroundColor = "rgb(35, 37, 37)";
notUrgentTasksTitle[1].style.backgroundColor = "rgb(35, 37, 37)";

// 6. change the footer background color to rgb(0, 53, 51)
let footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "rgb(0, 53, 51)";
