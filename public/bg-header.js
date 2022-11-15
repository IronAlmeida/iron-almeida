const bg = document.querySelector("#bg");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
        bg.classList.add("bg")    
    } else {
        bg.classList.remove("bg")
    }
})