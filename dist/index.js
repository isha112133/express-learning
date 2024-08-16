"use strict";

// commands in collapsing screen
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

// droppable menu button
document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");
  const draggableMenu = document.getElementById("draggable-menu");
  let isDragging = false;
  let startX, startY, offsetX, offsetY;

  if (dropdownButton && dropdownContent && draggableMenu) {
    dropdownButton.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownContent.classList.toggle("show");
    });

    draggableMenu.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      offsetX = draggableMenu.offsetLeft;
      offsetY = draggableMenu.offsetTop;
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        draggableMenu.style.left = `${offsetX + dx}px`;
        draggableMenu.style.top = `${offsetY + dy}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.querySelector(".menu-icon");
  const dropdownContent = document.querySelector(".dropdown-content1");
  const draggableMenu = document.getElementById("draggable-menu1");
  let isDragging = false;
  let startX, startY, offsetX, offsetY;

  if (dropdownButton && dropdownContent && draggableMenu) {
    dropdownButton.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownContent.classList.toggle("show");
    });

    draggableMenu.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      offsetX = draggableMenu.offsetLeft;
      offsetY = draggableMenu.offsetTop;
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        draggableMenu.style.left = `${offsetX + dx}px`;
        draggableMenu.style.top = `${offsetY + dy}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.querySelector(".menu-bar");
  const dropdownContent = document.querySelector(".dropdown-content2");
  const draggableMenu = document.getElementById("draggable-menu2");
  let isDragging = false;
  let startX, startY, offsetX, offsetY;

  if (dropdownButton && dropdownContent && draggableMenu) {
    dropdownButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.add("hide");
        dropdownContent.classList.remove("show");
      } else {
        dropdownContent.classList.remove("hide");
        dropdownContent.classList.add("show");
      }
    });

    document.addEventListener("click", (e) => {
      if (
        !dropdownContent.contains(e.target) &&
        !dropdownButton.contains(e.target)
      ) {
        dropdownContent.classList.add("hide");
        dropdownContent.classList.remove("show");
      }
    });

    draggableMenu.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      offsetX = draggableMenu.offsetLeft;
      offsetY = draggableMenu.offsetTop;
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        draggableMenu.style.left = `${offsetX + dx}px`;
        draggableMenu.style.top = `${offsetY + dy}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const selectBtn = document.getElementById("select-btn");
  const text = document.getElementById("text");
  const list = document.querySelector(".list");
  const selectMenu = document.getElementById("draggableMenu");
  const option = document.getElementsByClassName("option");

  let isDragging = false;
  let startX, startY, offsetX, offsetY;

  selectBtn.addEventListener("click", function () {
    selectBtn.classList.toggle("active");
  });

  for (let options of option) {
    options.onclick = function () {
      text.innerHTML = this.textContent;
      selectBtn.classList.remove("active");
    };
  }

  // Make the select menu draggable
  selectMenu.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    offsetX = selectMenu.offsetLeft;
    offsetY = selectMenu.offsetTop;
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      selectMenu.style.left = `${offsetX + dx}px`;
      selectMenu.style.top = `${offsetY + dy}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});
