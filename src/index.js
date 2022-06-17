const menuIcon = document.querySelector(".header__menu");
const menu = document.querySelector(".menu");
const project = document.querySelectorAll(".project__container");
const projectArray = [...project];
const projectPusher = document.querySelectorAll(".pusher");
const projectPusherArray = [...projectPusher]
const themeButton = document.querySelectorAll(".themeButton");
const themeButtonArray = [...themeButton];
const skillset = document.getElementById("skillset");

menuIcon.addEventListener( "click", (e) => {
    menu.classList.toggle("show")
});

projectArray.map((project, index) => {
    project.addEventListener("mouseenter", () => projectPusherArray[index].classList.add("push"));
})

projectArray.map((project, index) => {
    project.addEventListener("mouseleave", () => projectPusherArray[index].classList.remove("push"));
})

themeButtonArray.map(themeButton => {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        
        themeButton.innerText === "Light mode"
        ? themeButton.innerText = "Dark mode"
        : themeButton.innerText = "Light mode"
    })
})

const observer = new IntersectionObserver(handlerIntersection, {
    threshold: 0.01,
});

observer.observe(skillset);

function handlerIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= 0.01;

    if (isVisible) {
        skillset.classList.add("animation");
    }
};