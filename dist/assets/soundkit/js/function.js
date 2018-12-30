function buttonClick(a, upOrDown) {
    (upOrDown) ? a.classList.add("sound-click") : a.classList.remove("sound-click")  //add new styles to buttons
}

//add keypress and time of pressing key to array
function record(key) {
    let time = new Date().getTime()
    if (recordPath.recording === true) {
        recordPath.properties.push({ time: time, key: key })  //add new sound to path
    }
}

//play single sound
function playSound(key) {
    let sound = document.querySelector(`audio[data-key="${key}"]`)
    sound.currentTime = 0
    sound.play()
}

//play sounds from array
function play() {
    let time = 0,
        lastSound = document.querySelector(`audio[data-key="${recordPath.properties[recordPath.properties.length - 1].key}"]`)  //handle to lastSound in the recording

    recordPath.setTimeouts.forEach(function (timer) {        //clear all setTimeouts in quenne
        clearTimeout(timer)
    })

    //clear animation time
    recordPath.path_time = 0

    recordPath.recording = false
    //calculate length the recording
    recordPath.path_time += recordPath.properties[recordPath.properties.length - 1].time - recordPath.properties[0].time + lastSound.currentTime * 1000  

    //adding sounds to play to the quenne
    for (let i = 0; i < recordPath.properties.length; i++) {        
        if (i === 0)
            recordPath.setTimeouts.push(setTimeout(function () { playSound(recordPath.properties[i].key) }, 0))
        else {
            time += recordPath.properties[i].time - recordPath.properties[i - 1].time
            recordPath.setTimeouts.push(setTimeout(function () {
                playSound(recordPath.properties[i].key)
            }, time))
        }
    }

    recordPath.play.style.color = "blue"
    recordPath.record.style.color = ""
    setTimeout(() => {
        recordPath.play.style.color = ""
    }, recordPath.path_time)
    animation()
}

function keyup(e) {
    if (e.keyCode === 81 || e.keyCode === 87 || e.keyCode === 69 || e.keyCode === 82 || e.keyCode === 84 || e.keyCode === 89 || e.keyCode === 85 || e.keyCode === 73 || e.keyCode === 79) {
        buttonClick(document.querySelector(`button[data-key="${e.keyCode}"]`), false)
    }
}


function keydown(e) {
    if (e.keyCode === 81 || e.keyCode === 87 || e.keyCode === 69 || e.keyCode === 82 || e.keyCode === 84 || e.keyCode === 89 || e.keyCode === 85 || e.keyCode === 73 || e.keyCode === 79) {
        record(e.keyCode)
        playSound(e.keyCode)
        buttonClick(document.querySelector(`button[data-key="${e.keyCode}"]`), true)
    }
}

//clearing path
function clearPath() {
    recordPath.recording = false
    recordPath.properties = []
    recordPath.path_time = 0
    animation()
}

//switch betwen recording or not recording
function clickRecord() {
    if (recordPath.recording === false){
        recordPath.recording = true
        recordPath.record.style.color = "red"
    }
    else {
        recordPath.recording = false
        recordPath.record.style.color = ""
    }
}

function animation() {
    if (recordPath.recording === false && recordPath.properties.length !== 0) {
        let animHandle = document.querySelector(".animation")
        animHandle.style.animationDuration = `${recordPath.path_time / 1000}s`
        animHandle.classList.remove("animation-active")
        setTimeout(() => {
            animHandle.classList.add("animation-active")
        }, 10)
    }
}

