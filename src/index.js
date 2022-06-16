const menuIcon = document.querySelector(".header__menu");
const menu = document.querySelector(".menu");
const projectDescription = document.querySelector(".project__container");
const pusher = document.querySelector(".pusher");

menuIcon.addEventListener( "click", (e) => {
    menu.classList.toggle("show")
});

projectDescription.addEventListener( "mouseenter", (e) => {
    pusher.classList.add("push")
});

projectDescription.addEventListener( "mouseleave", (e) => {
    pusher.classList.remove("push")
});