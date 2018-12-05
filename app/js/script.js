document.addEventListener("DOMContentLoaded", ()=>{

    let hamburger = document.querySelector(".hamburger")
    let menu = document.querySelector(".menu")
    let nav = document.querySelector("nav")

    hamburger.addEventListener("click", (e) => {
        e.preventDefault()
        hamburger.classList.toggle("open")
        nav.classList.toggle("open")
        menu.classList.toggle("menu-open")
    })
})