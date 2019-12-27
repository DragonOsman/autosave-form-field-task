"use strict";

const area = document.getElementById("area");
area.placeholder = "Write here";

function autoSave() {
  if (area.value) {
    area.oninput = function() {
      localStorage.setItem("area", area.value);
    }
    area.value = localStorage.getItem("area");
  }
}

function onStorage() {
  autoSave();
}

window.onstorage = onStorage;

document.body.append(document.createElement("br"))
const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.onclick = clearValue;
document.body.append(clearButton);

function clearValue(event) {
  if (event.target.value !== "Clear") {
    return;
  }

  localStorage.removeItem("area");
  area.value = "";
}
