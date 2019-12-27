"use strict";

document.body.append(document.createElement("br"));
const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
document.body.append(clearButton);

clearButton.onclick = () => {
  localStorage.removeItem("area");
  area.value = "";
}

const area = document.getElementById("area");
area.placeholder = "Write here";

area.value = localStorage.getItem("area");
area.oninput = () => {
  if (area.value) {
    localStorage.setItem("area", area.value);
  }
}
