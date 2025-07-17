const themeToggleBtn = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");

// Apply saved theme or system preference
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  lightIcon.classList.remove("hidden");
  darkIcon.classList.add("hidden");
} else {
  document.documentElement.classList.remove("dark");
  darkIcon.classList.remove("hidden");
  lightIcon.classList.add("hidden");
}

// Toggle theme on button click
themeToggleBtn.addEventListener("click", () => {
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");

  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
