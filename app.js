const hamBurger = document.querySelector(".fa-bars")
const closeMenu = document.querySelector(".fa-close")
const menu = document.querySelector(".hero-links ul")

hamBurger.addEventListener("click", () =>{
  menu.style.transform = "translateY(0)"
})
closeMenu.addEventListener("click", () =>{
  menu.style.transform = "translateY(-2000px)"
})