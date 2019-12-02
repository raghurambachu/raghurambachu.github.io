const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-navigation")

const nav = document.querySelector(".nav")

closeButton.addEventListener("click",() => {
    nav.classList.remove("nav-open");

});

openButton.addEventListener("click",() => {
    nav.classList.add("nav-open")
})