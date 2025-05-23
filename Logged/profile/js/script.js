// Side Menu Toggle Script
let menu_img = document.querySelector(".menu");
let menu = document.querySelector(".closed");

menu_img.addEventListener("click", () => {
    if (menu_img.textContent == "Menu") {
        menu_img.textContent = "Close";
    } else {
        menu_img.textContent = "Menu";
    }
    menu_img.classList.toggle("pink");

    menu.classList.toggle("open");


})

