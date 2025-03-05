document.addEventListener("DOMContentLoaded", function () {
    const mainMenu = document.querySelector(".mainMenu");
    const openMenu = document.querySelector(".openMenu");
    const closeMenu = document.querySelector(".closeMenu");
  
     
    if (!mainMenu || !openMenu || !closeMenu) {
      console.error("One or more menu elements not found. Check your HTML class names.");
      return;
    }
  
    openMenu.addEventListener("click", function () {
      console.log("Opening menu...");  
      mainMenu.classList.add("active");
    });
  
    closeMenu.addEventListener("click", function () {
      console.log("Closing menu...");  
      mainMenu.classList.remove("active");
    });
  });
  