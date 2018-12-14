document.addEventListener("DOMContentLoaded", ()=>{

    //MENU ANIMATION
    let hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    nav = document.querySelector("nav")

    hamburger.addEventListener("click", (e) => {
        e.preventDefault()
        hamburger.classList.toggle("open")
        if(menu.classList.contains("menu-close")){
            menu.classList.remove("menu-close")
            menu.classList.add("menu-open")
            nav.classList.remove("close")
            nav.classList.add("open")
        }
        else if(menu.classList.contains("menu-open")){
            menu.classList.add("menu-close")
            menu.classList.remove("menu-open")
            nav.classList.add("close")
            nav.classList.remove("open")
        }
        else{
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
    animationHandlers = document.querySelectorAll(".animations > ul > li"),
    animationSourceHandlers = document.querySelectorAll(".animate-source"),
    animationsBackground = document.querySelector(".loading-animations-container")

    sourceBtn.addEventListener("click", openSource)
    sourceBtnClose.addEventListener("click", closeSource)
    arrowRight.addEventListener("click", nextAnimation)
    arrowLeft.addEventListener("click", beforeAnimation)

    function openSource(e){
        e.preventDefault()
        sourceContainer.style.display = "block"
        sourceContainer.classList.remove("source-close")
        sourceContainer.classList.add("source-open")
        animationsContainer.classList.add("animations-active-source")
        hamburger.style.display = "none"
        arrowRight.style.display = "none"
        arrowLeft.style.display = "none"
    }

    function closeSource(e){
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

    function nextAnimation(e){
        e.preventDefault()

        let a = 0
        for (let index = 0; index <= counter; index++) {
            (index===counter) ? a += (sizeAnimations[index])/2 : a += sizeAnimations[index]
        }
        animationHandlers.item(counter-1).classList.remove("selected")
        animationHandlers.item(counter).classList.add("selected")
        animationsContainer.style.transform = `translateX(-${a}px) translateY(-50%)`
        animationSourceHandlers.item(counter-1).style.display = "none"
        animationSourceHandlers.item(counter).style.display = "block"
        animationsBackground.classList.remove(`active${counter}`)
        animationsBackground.classList.add(`active${counter+1}`)
        counter++
        (counter>=animationHandlers.length) ? arrowRight.style.display = "none" : arrowLeft.style.display = "block"

    }

    function beforeAnimation(e){
        e.preventDefault()
        counter--
        let a = 0
        for (let index = 1; index <= counter; index++) {
            (index===counter) ? a += (sizeAnimations[index-1])/2 : a += sizeAnimations[index-1]
        }
        animationHandlers.item(counter).classList.remove("selected")
        animationHandlers.item(counter-1).classList.add("selected")
        animationsContainer.style.transform = `translateX(-${a}px) translateY(-50%)`
        animationSourceHandlers.item(counter).style.display = "none"
        animationSourceHandlers.item(counter-1).style.display = "block"
        animationsBackground.classList.remove(`active${counter+1}`)
        animationsBackground.classList.add(`active${counter}`)
        console.log(counter)
        if(counter<=1)
            arrowLeft.style.display = "none" 
        else 
            arrowRight.style.display = "block"
    }



})