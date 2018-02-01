var toggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__list");

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu.classList.contains("main-nav__list--compact")) {
    menu.classList.remove("main-nav__list--compact");
  }
  else {
    menu.classList.add("main-nav__list--compact");
  }
});