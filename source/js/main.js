var header = document.querySelector(".page-header");
var toggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__list");
var menuHeader = document.querySelector(".main-nav__header");

header.classList.remove("page-header--nojs");
header.classList.add("page-header--minimized");
menu.classList.remove("main-nav__list--nojs");
menu.classList.add("main-nav__list--minimized");
menuHeader.classList.add("main-nav__header--minimized");

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu.classList.contains("main-nav__list--minimized")) {
    header.classList.remove("page-header--minimized");
    menu.classList.remove("main-nav__list--minimized");
    menuHeader.classList.remove("main-nav__header--minimized");
  }
  else {
    header.classList.add("page-header--minimized");
    menu.classList.add("main-nav__list--minimized");
    menuHeader.classList.add("main-nav__header--minimized");
  }
});
