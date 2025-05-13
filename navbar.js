const burger = document.getElementById("menu-burger")
const links = document.getElementById("links")

burger.addEventListener("click", () => {
    if (links.classList.contains("active")) {
        links.classList.remove("active")
        burger.classList.remove("active")
    } else {
        links.classList.add("active")
        burger.classList.add("active")
    }
});