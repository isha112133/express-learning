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
document.addEventListener("DOMContentLoaded", () => {
  let toggle = document.querySelector(".toggle");
  let menu = document.querySelector(".menu");

  toggle.onclick = function () {
    menu.classList.toggle("active");
  };

  const draggableMenu = document.getElementById("draggable-menu");
  let isDragging = false;
  let startX, startY, initialX, initialY;

  draggableMenu.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = draggableMenu.offsetLeft;
    initialY = draggableMenu.offsetTop;
    draggableMenu.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      let dx = e.clientX - startX;
      let dy = e.clientY - startY;
      draggableMenu.style.left = `${initialX + dx}px`;
      draggableMenu.style.top = `${initialY + dy}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    draggableMenu.style.cursor = "grab";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const plusWrapper = document.querySelector(".plus-wrapper");
  const icons = document.querySelectorAll(".icon-handle");
  const tooltips = document.querySelectorAll(".tooltip");
  const draggableNavbar = document.getElementById("draggable-navbar");

  icons.forEach((icon) => {
    icon.style.display = "none";
  });

  plusWrapper.addEventListener("click", function () {
    const isVisible = icons[0].style.display === "flex";

    icons.forEach((icon) => {
      icon.style.display = isVisible ? "none" : "flex";
    });

    draggableNavbar.style.backgroundColor = isVisible ? "#fff" : "#e0e0e0"; // Change to your desired color
  });

  let isDragging = false;
  let startX, startY, initialX, initialY;

  draggableNavbar.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = draggableNavbar.offsetLeft;
    initialY = draggableNavbar.offsetTop;
    draggableNavbar.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      let dx = e.clientX - startX;
      let dy = e.clientY - startY;
      draggableNavbar.style.left = `${initialX + dx}px`;
      draggableNavbar.style.top = `${initialY + dy}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    draggableNavbar.style.cursor = "grab";
  });

  icons.forEach((icon) => {
    const iconElement = icon.querySelector(".icon");
    iconElement.addEventListener("click", function () {
      tooltips.forEach((tooltip) => {
        tooltip.style.opacity = 0;
      });
      icons.forEach((icon) => {
        icon.querySelector(".icon").style.backgroundColor = "transparent";
        icon.querySelector(".icon").style.color = "#000";
      });
      this.style.backgroundColor = "rgb(4,86,237)";
      this.style.color = "#fff";
      this.style.padding = "8px";

      let tooltip = this.querySelector(".tooltip");
      if (tooltip) {
        tooltip.style.opacity = 0.55;
      }
    });
  });
});
