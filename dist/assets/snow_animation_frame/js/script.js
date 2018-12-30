let snowballs = [],
animStatus = true,
containerHandle = document.querySelector(".animation-container"),
loop = 0

class Snowball{
    constructor(){
        this.rand = Math.random()
        this.maxXStartPosition = window.innerWidth
        this.minXStartPosition = 0
        this.XStartOffset = 0
        this.YStartOffset = -window.innerHeight
        this.maxSpeedX = this.rand
        this.maxSpeedY = 2.5
        this.minSpeedY = 1
        this.minSize = 10
        this.maxSize = 25
        this.spiraleSpeed = Math.floor(Math.random()*50+20)
    }

    move(){
        this.snowballHandle.style.top = (this.positionY+=this.speedY) + "px"
        this.snowballHandle.style.left = this.positionX+=(Math.sin(loop/this.spiraleSpeed * this.rand) * this.speedX)
        if (this.positionY > window.innerHeight) {
            this.positionY = this.YStartOffset * this.rand - this.size
        }
    }

    init(){
        let snowball = document.createElement("div")
        this.snowballHandle = snowball
        snowball.classList.add("snowball")

        //snowaball size
        this.size = this.maxSize * Math.random() + this.minSize

        //snowball position
        this.positionX = Math.random() * this.maxXStartPosition
        this.positionY = this.YStartOffset * Math.random() - this.size

        //snowball speed
        this.speedX = this.maxSpeedX * (Math.sign(-0.5 + this.rand)*Math.random()*2)
        this.speedY = this.minSpeedY + this.rand * this.maxSpeedY

        // set flake size & opacity
        this.snowballHandle.style.width = this.snowballHandle.style.height = this.size + "px"
        this.snowballHandle.style.opacity = Math.random()

        return snowball
    }
}

generateSnowballs(500, containerHandle)
document.querySelector(".buttonStartStop").addEventListener("click", animationStartStop)


