/* Menu */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* Automatically updating footer copyright year */
const year = document.querySelector("#current-year");
year.innerHTML = new Date().getFullYear();

/* Flipping project-img to see more information */
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("flipped");
  });
});
