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


const header = document.querySelector("header");
let val=0;
let w= window.scrollY
window.addEventListener("scroll", () => {
  if (window.scrollY > w) {
    val=val+2;
    header.style.backgroundColor = "rgba(0,0,0,0."+ String(val)+ ")";
    w= window.scrollY
  } else {
    val=val-2;
    header.style.backgroundColor = "rgba(0,0,0,0."+ String(val)+ ")";
    w= window.scrollY
  }
});
