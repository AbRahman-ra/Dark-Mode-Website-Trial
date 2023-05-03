// Fill the page with some webpageContent
let cellsContent = [];
let numOfCells = 10;
let pageSubheaderH2 = document.querySelector("#underH1");
let names = [
  "The Intouchables",
  "Sorry for Disturbance",
  "Like Today",
  "Buskas",
  "Orage",
  "L'homme a la Rose",
  "Rashed",
  "My Girlfriend",
  "Sleeping",
  "Money",
];

let cellsDiv = document.createElement("div");
cellsDiv.setAttribute("class", "cellsDiv");

for (let i = 0; i < numOfCells; i++) {
  cell = document.createElement("div");
  cell.setAttribute("id", `${names[i]}`);
  cell.setAttribute("class", "cell");

  let cellHeader = document.createElement("h3");
  cellHeader.innerHTML = names[i];

  let cellDescription = document.createElement("p");
  cellDescription.innerHTML = `Any description for ${names[i]}`;

  cellHeader.after(cellDescription);
  cell.append(cellHeader);
  cell.append(cellDescription);
  cellsDiv.append(cell);
  pageSubheaderH2.after(cellsDiv);
  cellsContent.push(cell);
}

// Hide Webpage Content on load for user prompt
let webpageContent = document.querySelector("#webpageContent");
window.onload = function () {
  webpageContent.style.display = "none";
};

// Event Triggers
// Select Mode - Before Loading Content
// Initialization
let popUp = document.querySelector("#userPrompt");
let lightDivOnLoad = document.querySelector("#lightPrompt");
let lightBtnOnLoad = document.querySelector("#lightBtnPrompt");
let dimDivOnLoad = document.querySelector("#dimPrompt");
let dimBtnOnLoad = document.querySelector("#dimBtnPrompt");
let darkDivOnLoad = document.querySelector("#darkPrompt");
let darkBtnOnLoad = document.querySelector("#darkBtnPrompt");
let confirmModeOnLoad = document.querySelector("#confirmPrompt");

// Light Mode - Before Load
lightDivOnLoad.addEventListener("click", function () {
  popUp.setAttribute("light", "light");
  popUp.removeAttribute("dim");
  popUp.removeAttribute("dark");
  this.setAttribute("light", "selected");
  lightBtnOnLoad.setAttribute("checked", "checked");
  dimDivOnLoad.removeAttribute("dim");
  darkDivOnLoad.removeAttribute("dark");
});

// Dim Mode - Before Load
dimDivOnLoad.addEventListener("click", function () {
  popUp.removeAttribute("light");
  popUp.setAttribute("dim", "dim");
  popUp.removeAttribute("dark");
  this.setAttribute("dim", "selected");
  dimBtnOnLoad.setAttribute("checked", "checked");
  lightDivOnLoad.removeAttribute("light");
  darkDivOnLoad.removeAttribute("dark");
});

// Dark Mode - Before Load
darkDivOnLoad.addEventListener("click", function () {
  popUp.removeAttribute("light");
  popUp.removeAttribute("dim");
  popUp.setAttribute("dark", "dark");
  this.setAttribute("dark", "selected");
  darkBtnOnLoad.setAttribute("checked", "checked");
  lightDivOnLoad.removeAttribute("light");
  dimDivOnLoad.removeAttribute("dim");
});

// Confirming The Selected Mode & Entering The Website
confirmModeOnLoad.onclick = function () {
  popUp.style.display = "none";
  webpageContent.style.display = "";
  if (popUp.hasAttribute("light")) {
    cssFile.setAttribute("href", "./Styles/light.css");
    let lightBtnInside = document.getElementById("lightBtn");
    lightBtnInside.setAttribute("checked", "checked");
    light.setAttribute("light", "selected");
  } else if (popUp.hasAttribute("dim")) {
    cssFile.setAttribute("href", "./Styles/dim.css");
    let dimBtnInside = document.getElementById("dimBtn");
    dimBtnInside.setAttribute("checked", "checked");
    dim.setAttribute("dim", "selected");
  } else {
    cssFile.setAttribute("href", "./Styles/dark.css");
    let darkBtnInside = document.getElementById("darkBtn");
    darkBtnInside.setAttribute("checked", "checked");
    dark.setAttribute("dark", "selected");
  }
};

// Change Mode after Loading webpageContent
// Initialization
let lightDiv = document.querySelector("#light");
let lightBtn = document.querySelector("#lightBtn");
let dimDiv = document.querySelector("#dim");
let dimBtn = document.querySelector("#dimBtn");
let darkDiv = document.querySelector("#dark");
let darkBtn = document.querySelector("#darkBtn");
let cssFile = document.querySelector("#variableCSS");

// Light Mode - After Load
lightDiv.addEventListener("click", function () {
  cssFile.setAttribute("href", "./Styles/light.css");
  this.setAttribute("light", "selected");
  dimBtn.removeAttribute("checked");
  darkBtn.removeAttribute("checked");
  lightBtn.setAttribute("checked", "checked");
  dimDiv.removeAttribute("dim");
  darkDiv.removeAttribute("dark");
});

// Dim Mode - After Load
dimDiv.addEventListener("click", function () {
  cssFile.setAttribute("href", "./Styles/dim.css");
  this.setAttribute("dim", "selected");
  lightBtn.removeAttribute("checked");
  darkBtn.removeAttribute("checked");
  dimBtn.setAttribute("checked", "checked");
  lightDiv.removeAttribute("light");
  darkDiv.removeAttribute("dark");
});

// Dark Mode - After Load
darkDiv.addEventListener("click", function () {
  cssFile.setAttribute("href", "./Styles/dark.css");
  this.setAttribute("dark", "selected");
  lightBtn.removeAttribute("checked");
  dimBtn.removeAttribute("checked");
  darkBtn.setAttribute("checked", "checked");
  light.removeAttribute("light");
  dim.removeAttribute("dim");
});
