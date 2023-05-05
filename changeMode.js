// This Webpage is divided into 1: Pop-up & 2: Content

// [1] POP-UP
// [1][a] Pop-up SetUp
// [1][a][i] Initialization
let popUp = document.querySelector("#popUp");
let webpage = document.querySelector("#webpage");
let puModes = document.querySelectorAll(".puModeOption");
let wbModes = document.querySelectorAll(".wbOptionSec");
console.log;

// [1][a][ii] Default Mode Initialization (Dark Mode)
// Modes shown in pop-up
let defaultMode = puModes[2]; //0 = light, 1 = dim, 2 = dark
defaultMode.classList.add("defaultMode");
defaultMode.classList.add("selected");

let selectedMode = document
  .querySelector(".selected")
  .querySelector("label").textContent;
let defaultModeBtn = defaultMode.querySelector(`input[type="radio"]`);
console.log(defaultModeBtn);
console.log(selectedMode);
defaultModeBtn.checked = true;

let cssFile = document.querySelector("#theme");

// initialization for webpage
let wbDefaultMode;
let wbRadioBtn;

// [1][b] Display Pop-up When Page Loads For The First Time / Preferences Are Reset & Keep The Saved Settings in The Local Storage
window.onload = () => {
  if (window.localStorage.length === 0) {
    popUp.style.display = "flex";
    webpage.style.filter = "blur(5px)";
    wbDefaultMode = wbModes[2];
  } else {
    switch (window.localStorage.Mode) {
      case "Light":
        cssFile.href = "./Styles/light.css";
        wbDefaultMode = wbModes[0];
        break;

      case "Dim":
        cssFile.href = "./Styles/dim.css";
        wbDefaultMode = wbModes[1];
        break;

      case "Dark":
        cssFile.href = "./Styles/dark.css";
        wbDefaultMode = wbModes[2];
        break;
    }
  }
  wbDefaultMode.classList.add("default");
  wbDefaultMode.classList.add("selected");
  wbRadioBtn = wbDefaultMode.querySelector(`input[type="radio"]`);
  wbRadioBtn.checked = true;
};

// [1][c] Change The Mode Upon Pop-up Modes' Buttons Click
puModes.forEach((el) => {
  let puRadioBtn = el.querySelector(`input[type="radio"]`);
  let puSelectedModeOutput = document.querySelector("#puSelectedMode");
  puRadioBtn.hidden = true; // Hide & Unhide to check that event works
  el.classList.add("hoverable");
  let currentWbMode = document.querySelector(`#wb${selectedMode}Sec`);
  wbRadioBtn = document.querySelector(`#wb${selectedMode}Btn`);

  wbModes.forEach((el) => {
    el.classList.remove("selected");
    el.classList.add("hoverable");
  });

  // On Mode Button Click
  el.addEventListener("click", () => {
    // [1][c][i] Assign "selected" class only to the clicked button
    puModes.forEach((el) => {
      el.classList.add("hoverable");
      el.classList.remove("selected");
    });
    el.classList.add("selected");
    el.classList.remove("hoverable");

    // [1][c][ii] Update the selected mode
    selectedMode = document
      .querySelector(".selected")
      .querySelector("label").textContent;
    window.localStorage.Mode = selectedMode;

    // add selected classes for webpage
    wbModes.forEach((el) => {
      el.classList.remove("selected");
      el.classList.add("hoverable");
    });
    currentWbMode = document.querySelector(`#wb${selectedMode}Sec`);
    currentWbMode.classList.add("selected");
    currentWbMode.classList.remove("hoverable");

    // [1][c][iii] Check the radio button in pop-up
    puRadioBtn.checked = true;

    // [1][c][iii] Check the selected mode button in webpage
    wbRadioBtn = document.querySelector(`#wb${selectedMode}Btn`);
    wbRadioBtn.checked = true;

    // [1][c][iv] Display selected mode message for the user
    puSelectedModeOutput.textContent = `Selected Mode: ${selectedMode}`;

    // [1][c][v] Link the proper CSS file
    switch (selectedMode) {
      case "Light":
        cssFile.href = "./Styles/light.css";
        break;

      case "Dim":
        cssFile.href = "./Styles/dim.css";
        break;

      case "Dark":
        cssFile.href = "./Styles/dark.css";
        break;
    }
  });
});

// [1][d] "Save My Selection" & "Confirm Selection" Buttons Configuration
// [1][d][i] Initialization
let saveNextTime = document.querySelector(`input[type=checkbox]`);
let isSaveNxtTimeChecked = saveNextTime.checked;
console.log(isSaveNxtTimeChecked);

// [1][d][ii] Update the check status on click
saveNextTime.addEventListener("click", () => {
  isSaveNxtTimeChecked = saveNextTime.checked;
  console.log(isSaveNxtTimeChecked);
});

// [1][d][iii] Hide Pop-up & save selected mode in local storage if the selection is confirmed & the button checked
let puConfirmSelectionBtn = document.querySelector("button");
puConfirmSelectionBtn.onclick = () => {
  popUp.style.display = "none";
  webpage.style.filter = "blur(0px)";
  if (isSaveNxtTimeChecked) {
    window.localStorage.setItem("Mode", selectedMode);
    selectedMode = window.localStorage.Mode;
  } else {
    window.localStorage.removeItem("Mode");
  }
};
// Update the default selected mode to the one stored

// Update the checked button on webpage

// Add "selected" class

// [2] WEBPAGE CONTENT
// [2][a] Modes & Clear Preferences

//clear preferences
let clearPreferencesDiv = document.querySelector("#wbNavBtn");
let dialogBox = document.querySelector("#rUSure");
let yesDelBtn = document.querySelector("#yesDelBtn");
let noCancelBtn = document.querySelector("#noCancelBtn");
console.log(clearPreferencesDiv);
console.log(dialogBox);

clearPreferencesDiv.onclick = () => {
  dialogBox.style.display = "flex";
};

yesDelBtn.onclick = () => {
  window.localStorage.clear();
  dialogBox.style.display = "none";
  clearPreferencesDiv.querySelector("button").textContent = "Cleared!";
  setTimeout(() => {
    clearPreferencesDiv.querySelector("button").textContent =
      "Clear Preferences";
  }, 3000);
};

noCancelBtn.onclick = () => {
  dialogBox.style.display = "none";
};

// Buttons on webpage
wbModes.forEach((el) => {
  el.classList.remove("selected");
  el.classList.add("hoverable");

  wbRadioBtn = el.querySelector(`input[type="radio"]`);
  wbRadioBtn.hidden = false; // Hide & Unhide to check that event works
  el.classList.add("hoverable");

  el.addEventListener("click", () => {
    // add selected class only to the selected
    wbModes.forEach((el) => {
      el.classList.add("hoverable");
      el.classList.remove("selected");
    });
    el.classList.add("selected");
    el.classList.remove("hoverable");

    // update selected mode in local storage
    selectedMode = document
      .querySelector(".wbModeOption")
      .querySelector(".selected")
      .querySelector("label").textContent;
    window.localStorage.Mode = selectedMode;

    // [1][c][iii] Check the selected mode button in webpage
    wbRadioBtn = document.querySelector(`#wb${selectedMode}Btn`);
    wbRadioBtn.checked = true;

    // Select proper CSS File
    switch (selectedMode) {
      case "Light":
        cssFile.href = "./Styles/light.css";
        break;

      case "Dim":
        cssFile.href = "./Styles/dim.css";
        break;

      case "Dark":
        cssFile.href = "./Styles/dark.css";
        break;
    }
  });
});
