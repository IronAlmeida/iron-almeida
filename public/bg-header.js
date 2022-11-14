const bg = document.querySelector("#bg");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
        bg.classList.add("bg")
    } else {
        bg.classList.remove("bg")
    }
})

const a = document.querySelector(".nav a[href^='#']")