var header = document.querySelector(".page-header");
var toggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__list");

header.classList.remove("page-header--nojs");
header.classList.add("page-header--compact");
menu.classList.remove("main-nav__list--nojs");
menu.classList.add("main-nav__list--compact");

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu.classList.contains("main-nav__list--compact")) {
    header.classList.remove("page-header--compact");
    header.classList.add("page-header--full");
    menu.classList.remove("main-nav__list--compact");
  }
  else {
    header.classList.add("page-header--compact");
    header.classList.remove("page-header--full");
    menu.classList.add("main-nav__list--compact");
  }
});
