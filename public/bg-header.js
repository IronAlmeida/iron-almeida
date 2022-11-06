const bg = document.querySelector("#bg");
const bg2 = document.querySelector("#bg2");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 10){
        bg.classList.add("bg")
        bg2.classList.add("bg2")
        bg2.classList.remove("justify-between")
    } else {
        bg.classList.remove("bg")
        bg2.classList.remove("bg2")
        bg2.classList.add("justify-between")
    }
})