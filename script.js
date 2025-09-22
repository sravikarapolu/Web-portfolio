//// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Dark/Light mode toggle (bonus)
let darkMode = false;
function toggleTheme() {
  document.body.style.background = darkMode ? "white" : "#222";
  document.body.style.color = darkMode ? "black" : "white";
  darkMode = !darkMode;
}

// Project Filter Function
function filterProjects(category, button) {
  const projects = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-buttons button");

  // Remove "active" from all buttons
  buttons.forEach(btn => btn.classList.remove("active"));

  // Add "active" to the clicked button
  button.classList.add("active");

  // Show/Hide projects
  projects.forEach(project => {
    if (category === "all" || project.dataset.category === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

