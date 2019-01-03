document.addEventListener("DOMContentLoaded", () => {

    //MENU ANIMATION
    let hamburger = document.querySelector(".hamburger"),
        menu = document.querySelector(".menu"),
        nav = document.querySelector("nav")

    hamburger.addEventListener("click", (e) => {
        e.preventDefault()
        hamburger.classList.toggle("open")
        if (menu.classList.contains("menu-close")) {
            menu.classList.remove("menu-close")
            menu.classList.add("menu-open")
            nav.classList.remove("close")
            nav.classList.add("open")
        }
        else if (menu.classList.contains("menu-open")) {
            menu.classList.add("menu-close")
            menu.classList.remove("menu-open")
            nav.classList.add("close")
            nav.classList.remove("open")
        }
        else {
            menu.classList.add("menu-open")
            nav.classList.add("open")
        }

    })

    //LOADING ANIMATIONS - SOURCE

    let sourceBtn = document.querySelector(".view-source"),
        sourceBtnClose = document.querySelector(".source-close-btn"),
        sourceContainer = document.querySelector(".animations-source"),
        arrowLeft = document.querySelector(".arrow-left"),
        arrowRight = document.querySelector(".arrow-right"),
        counter = 1,
        sizeAnimations = [120, 140, 290, 140, 120, 200, 440, 240],
        animationsContainer = document.querySelector(".animations"),
        animationHandles = document.querySelectorAll(".animations > ul > li"),
        animationSourceHandles = document.querySelectorAll(".animate-source"),
        animationsBackground = document.querySelector(".loading-animations-container")

        try {
            sourceBtn.addEventListener("click", openSource)
            sourceBtnClose.addEventListener("click", closeSource)
            arrowRight.addEventListener("click", nextAnimation)
            arrowLeft.addEventListener("click", beforeAnimation)
        } catch (error) {
            
        }
    

    /*************************************************
     * HAMBURGERS ANIMATIONS
     */

    let hamburger_3 = document.querySelector(".hamburger-3 div"),
    hamburger_4 = document.querySelector(".hamburger-4 div"),
    hamburger_5 = document.querySelector(".hamburger-5 div"),
    hamburger_6 = document.querySelector(".hamburger-6 div"),
    hamburger_7 = document.querySelector(".hamburger-7 div"),
    hamburger_8 = document.querySelector(".hamburger-8 div"),
    hamburger_9 = document.querySelector(".hamburger-9 div")


    

    hamburger_3.addEventListener("mouseover", () => hamburger_3.classList.add("active"))
    hamburger_3.addEventListener("mouseout", () => hamburger_3.classList.remove("active"))
    hamburger_3.addEventListener("mouseover", () => hamburger_3.classList.remove("unactive"))
    hamburger_3.addEventListener("mouseout", () => hamburger_3.classList.add("unactive"))


    hamburger_4.addEventListener("mouseover", () => hamburger_4.classList.add("active"))
    hamburger_4.addEventListener("mouseout", () => hamburger_4.classList.remove("active"))
    hamburger_4.addEventListener("mouseover", () => hamburger_4.classList.remove("unactive"))
    hamburger_4.addEventListener("mouseout", () => hamburger_4.classList.add("unactive"))

    hamburger_5.addEventListener("mouseover", () => hamburger_5.classList.add("active"))
    hamburger_5.addEventListener("mouseout", () => hamburger_5.classList.remove("active"))
    hamburger_5.addEventListener("mouseover", () => hamburger_5.classList.remove("unactive"))
    hamburger_5.addEventListener("mouseout", () => hamburger_5.classList.add("unactive"))

    hamburger_6.addEventListener("mouseover", () => hamburger_6.classList.add("active"))
    hamburger_6.addEventListener("mouseout", () => hamburger_6.classList.remove("active"))
    hamburger_6.addEventListener("mouseover", () => hamburger_6.classList.remove("unactive"))
    hamburger_6.addEventListener("mouseout", () => hamburger_6.classList.add("unactive"))

    hamburger_7.addEventListener("mouseover", () => hamburger_7.classList.add("active"))
    hamburger_7.addEventListener("mouseout", () => hamburger_7.classList.remove("active"))
    hamburger_7.addEventListener("mouseover", () => hamburger_7.classList.remove("unactive"))
    hamburger_7.addEventListener("mouseout", () => hamburger_7.classList.add("unactive"))

    hamburger_8.addEventListener("mouseover", () => hamburger_8.classList.add("active"))
    hamburger_8.addEventListener("mouseout", () => hamburger_8.classList.remove("active"))
    hamburger_8.addEventListener("mouseover", () => hamburger_8.classList.remove("unactive"))
    hamburger_8.addEventListener("mouseout", () => hamburger_8.classList.add("unactive"))

    hamburger_9.addEventListener("mouseover", () => hamburger_9.classList.add("active"))
    hamburger_9.addEventListener("mouseout", () => hamburger_9.classList.remove("active"))
    hamburger_9.addEventListener("mouseover", () => hamburger_9.classList.remove("unactive"))
    hamburger_9.addEventListener("mouseout", () => hamburger_9.classList.add("unactive"))
    
    function openSource(e) {
        e.preventDefault()
        sourceContainer.style.display = "block"
        sourceContainer.classList.remove("source-close")
        sourceContainer.classList.add("source-open")
        animationsContainer.classList.add("animations-active-source")
        hamburger.style.display = "none"
        arrowRight.style.display = "none"
        arrowLeft.style.display = "none"
    }

    function closeSource(e) {
        e.preventDefault()
        sourceContainer.classList.remove("source-open")
        sourceContainer.classList.add("source-close")
        animationsContainer.classList.remove("animations-active-source")

        setTimeout(() => {
            sourceContainer.style.display = "none"
            hamburger.style.display = "block"
            arrowRight.style.display = "block"
            arrowLeft.style.display = "block"
        }, 800)
    }

    function nextAnimation(e) {
        e.preventDefault()

        let a = 0
        for (let index = 0; index <= counter; index++) {
            (index === counter) ? a += (sizeAnimations[index]) / 2 : a += sizeAnimations[index]
        }
        animationHandles.item(counter - 1).classList.remove("selected")
        animationHandles.item(counter).classList.add("selected")
        animationsContainer.style.transform = `translateX(-${a}px) translateY(-50%)`
        animationSourceHandles.item(counter - 1).style.display = "none"
        animationSourceHandles.item(counter).style.display = "block"
        animationsBackground.classList.remove(`active${counter}`)
        animationsBackground.classList.add(`active${counter + 1}`)
        counter++
        (counter >= animationHandles.length) ? arrowRight.style.display = "none" : arrowLeft.style.display = "block"

    }

    function beforeAnimation(e) {
        e.preventDefault()
        counter--
        let a = 0
        for (let index = 1; index <= counter; index++) {
            (index === counter) ? a += (sizeAnimations[index - 1]) / 2 : a += sizeAnimations[index - 1]
        }
        animationHandles.item(counter).classList.remove("selected")
        animationHandles.item(counter - 1).classList.add("selected")
        animationsContainer.style.transform = `translateX(-${a}px) translateY(-50%)`
        animationSourceHandles.item(counter).style.display = "none"
        animationSourceHandles.item(counter - 1).style.display = "block"
        animationsBackground.classList.remove(`active${counter + 1}`)
        animationsBackground.classList.add(`active${counter}`)
        console.log(counter)
        if (counter <= 1)
            arrowLeft.style.display = "none"
        else
            arrowRight.style.display = "block"
    }
})
