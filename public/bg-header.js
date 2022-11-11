const bg = document.querySelector("#bg");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 10){
        bg.classList.add("bg")
    } else {
        bg.classList.remove("bg")
    }
})