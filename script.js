// Change the text content and style
document.getElementById("change-text-btn").addEventListener("click", () => {
    const introText = document.getElementById("intro-text");
    introText.textContent = "You changed the intro paragraph! 🎉";
    introText.style.color = "darkblue";
    introText.style.fontWeight = "bold";
  });
  
  // Toggle the magic box (add/remove)
  document.getElementById("toggle-box-btn").addEventListener("click", () => {
    const box = document.getElementById("magic-box");
  
    // Check if the box is visible using display
    if (box.style.display === "none" || box.style.display === "") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
  
  