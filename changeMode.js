// This Webpage is divided into 1: Pop-up & 2: Content

// [1] PROJECT INITIALIZATION
// [1.1] Pop-up Initialization
let popUp = document.querySelector("#popUp");
let puModes = document.querySelectorAll(".puModeOption");

// [1.2] Pop-up Default Mode Initialization (Dark Mode)
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

// [1.3] CSS Theme File (Changed by Changing Mode, Applies to Whole Document)
let cssFile = document.querySelector("#theme");

// [1.4] Webpage Default Mode Initialization (Dark Mode)
let wbModes = document.querySelectorAll(".wbOptionSec");
let webpage = document.querySelector("#webpage");
let wbDefaultMode;
let wbRadioBtn;

// [1.5] When The Page Loads
window.onload = () => {
  // [1.5.1] Display Pop-up When Page Loads For The First Time / Preferences Are Reset
  if (window.localStorage.length === 0) {
    popUp.style.display = "flex";
    webpage.style.filter = "blur(5px)";
    wbDefaultMode = wbModes[2];
  }
  // [1.5.2] Change The Default Mode to the one Saved in the Local Storage
  else {
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
  // [1.5.3] For Both Cases, Show The Default Mode Selected (Done By CSS)
  wbDefaultMode.classList.add("default");
  wbDefaultMode.classList.add("selected");
  wbRadioBtn = wbDefaultMode.querySelector(`input[type="radio"]`);
  wbRadioBtn.checked = true;
};

// [2] POP-UP EVENTS
// [2.1] Change The Mode Upon Pop-up Modes' Buttons Click
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
    // [2.1.1] Assign "selected" class only to the clicked button
    puModes.forEach((el) => {
      el.classList.add("hoverable");
      el.classList.remove("selected");
    });
    el.classList.add("selected");
    el.classList.remove("hoverable");

    // [2.1.2] Update the selected mode in local storage
    selectedMode = document
      .querySelector(".selected")
      .querySelector("label").textContent;
    window.localStorage.Mode = selectedMode;

    // [2.1.3] add selected classes for webpage modes
    wbModes.forEach((el) => {
      el.classList.remove("selected");
      el.classList.add("hoverable");
    });
    currentWbMode = document.querySelector(`#wb${selectedMode}Sec`);
    currentWbMode.classList.add("selected");
    currentWbMode.classList.remove("hoverable");

    // [2.1.4] Check the radio button in pop-up & webpage
    puRadioBtn.checked = true;
    wbRadioBtn = document.querySelector(`#wb${selectedMode}Btn`);
    wbRadioBtn.checked = true;

    // [2.1.5] Display selected mode message for the user
    puSelectedModeOutput.textContent = `Selected Mode: ${selectedMode}`;

    // [2.1.6] Link the proper CSS theme file
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

// [2.2] "Save My Selection" Checkbox Event
// [2.2.0] Checkbox initialization
let saveNextTime = document.querySelector(`input[type=checkbox]`);
let isSaveNxtTimeChecked = saveNextTime.checked;
console.log(isSaveNxtTimeChecked);

// [2.2.1] Update the check status on click
saveNextTime.addEventListener("click", () => {
  isSaveNxtTimeChecked = saveNextTime.checked;
});

// [2.3] "Confirm Selection" Button Event
// [2.3.0] Button initialization
let puConfirmSelectionBtn = document.querySelector("button");

// [2.3.1] Hide pop-up on button click
puConfirmSelectionBtn.onclick = () => {
  popUp.style.display = "none";
  webpage.style.filter = "blur(0px)";

  // [2.3.2] Save selection to local storage only if the checkbox is checked
  if (isSaveNxtTimeChecked) {
    window.localStorage.setItem("Mode", selectedMode);
    selectedMode = window.localStorage.Mode;
  } else {
    window.localStorage.removeItem("Mode");
  }
};

// [3] MODES & CLEAR PREFERENCES ON THE WEBPAGE
// [3.1] Clear Preferences Events
// [3.1.0] Clear preferences initialization
let clearPreferencesDiv = document.querySelector("#wbNavBtn");
let dialogBox = document.querySelector("#rUSure");
let yesDelBtn = document.querySelector("#yesDelBtn");
let noCancelBtn = document.querySelector("#noCancelBtn");

// [3.1.1] Display a dialog box when the clear preferences button is clicked
clearPreferencesDiv.onclick = () => {
  dialogBox.style.display = "flex";
};

// [3.1.2] Clear preferences initialization if user confirmed by clicking "yes delete"
yesDelBtn.onclick = () => {
  window.localStorage.clear();
  dialogBox.style.display = "none";
  // [3.1.2.1] Display "Cleared!" as a button text for 3 seconds
  clearPreferencesDiv.querySelector("button").textContent = "Cleared!";
  setTimeout(() => {
    clearPreferencesDiv.querySelector("button").textContent =
      "Clear Preferences";
  }, 3000);
};

// [3.1.2] Hide the dialog box if user clicked on "no, cancel"
noCancelBtn.onclick = () => {
  dialogBox.style.display = "none";
};

// [3.2] Buttons On Webpage
// [3.2.1] Make all buttons hoverable (for CSS)
wbModes.forEach((el) => {
  el.classList.remove("selected");
  el.classList.add("hoverable");

  wbRadioBtn = el.querySelector(`input[type="radio"]`);
  wbRadioBtn.hidden = false; // Hide & Unhide to check that event works

  // [3.2.2] On The Buttons Click
  el.addEventListener("click", () => {
    // [3.2.2.1] Add selected class only to the clicked mode
    wbModes.forEach((el) => {
      el.classList.add("hoverable");
      el.classList.remove("selected");
    });
    el.classList.add("selected");
    el.classList.remove("hoverable");

    // [3.2.2.2] Update selected mode in local storage (if the pop-up checkbox is initially checked)
    selectedMode = document
      .querySelector(".wbModeOption")
      .querySelector(".selected")
      .querySelector("label").textContent;
    window.localStorage.Mode = selectedMode;

    // [3.2.2.3] Check the selected mode button in webpage
    wbRadioBtn = document.querySelector(`#wb${selectedMode}Btn`);
    wbRadioBtn.checked = true;

    // [3.2.2.4] Select proper CSS File
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

// Disable the "Clear preferences" button if the local storage is empty
if (window.localStorage.Mode === "") {
  clearPreferencesDiv.querySelector("button").disabled = true;
}
