document.addEventListener("DOMContentLoaded", function () {

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {

      const target = button.getAttribute("data-tab");

      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove("active"));

      // Hide all panels
      tabPanels.forEach(panel => panel.classList.remove("active"));

      // Activate clicked button
      button.classList.add("active");

      // Show corresponding panel
      document.getElementById(target).classList.add("active");

    });
  });

});
