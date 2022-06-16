const menuIcon = document.querySelector(".header__menu");
const menu = document.querySelector(".menu");
const project = document.querySelectorAll(".project__container");
const projectArray = [...project];
const projectPusher = document.querySelectorAll(".pusher");
const projectPusherArray = [...projectPusher]

menuIcon.addEventListener( "click", (e) => {
    menu.classList.toggle("show")
});

projectArray.map((project, index) => {
    project.addEventListener("mouseenter", () => projectPusherArray[index].classList.add("push"));
})

projectArray.map((project, index) => {
    project.addEventListener("mouseleave", () => projectPusherArray[index].classList.remove("push"));
})
