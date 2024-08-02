"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("input-command");
  const collapseScreen = document.getElementById("collapse-screen");
  const commandsContainer = document.getElementById("commands");

  if (textarea && commandsContainer) {
    textarea.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && textarea.value.trim() !== "") {
        event.preventDefault();
        collapseScreen.classList.add("open");
        const lines = textarea.value.trim().split("\n");
        const lastCommand = lines[lines.length - 1];
        const command = document.createElement("div");
        command.textContent = lastCommand;
        command.className = "command";
        commandsContainer.appendChild(command);
        textarea.value += "\n";
      }
    });
  }
});
