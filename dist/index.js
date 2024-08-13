"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("input-command");
    const commandsContainer = document.getElementById("commands");
    if (textarea && commandsContainer) {
        textarea.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && textarea.value.trim() !== "") {
                event.preventDefault();
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
