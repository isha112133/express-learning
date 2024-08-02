"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("input-command");
  const collapseScreen = document.getElementById("collapse-screen");
  const commandsContainer = document.getElementById("commands");
  const toggleBtn = document.getElementById("toggle-btn");
  const closeBtn = document.getElementById("close-btn");

  if (
    textarea &&
    commandsContainer &&
    toggleBtn &&
    closeBtn &&
    collapseScreen
  ) {
    textarea.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && textarea.value.trim() !== "") {
        event.preventDefault();
        collapseScreen.classList.add("open");
        toggleBtn.style.display = "none";
        closeBtn.style.display = "block";
        const lines = textarea.value.trim().split("\n");
        const lastCommand = lines[lines.length - 1];
        const command = document.createElement("div");
        command.textContent = lastCommand;
        command.className = "command";
        commandsContainer.appendChild(command);
        textarea.value += "\n";
      }
    });
    toggleBtn.addEventListener("click", function () {
      collapseScreen.classList.add("open");
      toggleBtn.style.display = "none";
      closeBtn.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
      collapseScreen.classList.remove("open");
      toggleBtn.style.display = "block";
      closeBtn.style.display = "none";
    });
  }
});
