function anime() {
    for (let a of snowballs) {
        a.move()
    }

    if (animStatus){
        window.requestAnimationFrame(anime)
        loop++
    }
}

function generateSnowballs(snowballAmount, container){
    for (let i = 0; i < snowballAmount; i++) {
        snowballs[i] = new Snowball()
        container.append(snowballs[i].init())
    }

    anime()
}

function animationStartStop(){
    animStatus = !animStatus
    if(animStatus)
        anime()
}