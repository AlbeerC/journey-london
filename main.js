// Menu
const btnToggle = document.getElementById("btnToggle")
const ul = document.querySelector(".section-list")
const links = document.querySelectorAll(".section-list li")

btnToggle.addEventListener("click", () => {
  ul.classList.toggle("d-none")
})
links.forEach((link) => {
  link.addEventListener("click", () => {
    ul.classList.add("d-none")
  })
})