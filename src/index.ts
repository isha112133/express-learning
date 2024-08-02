document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById(
    "input-command"
  ) as HTMLTextAreaElement | null;
  const commandsContainer = document.getElementById(
    "commands"
  ) as HTMLDivElement | null;

  if (textarea && commandsContainer) {
    textarea.addEventListener("keydown", function (event: KeyboardEvent) {
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
