let recordPath = {
    play: document.getElementById("play"),
    record: document.getElementById("record"),
    clear: document.getElementById("clear"),
    animation: document.getElementById("canvas"),
    recording: false,
    properties: [],
    path_time: 0,
    setTimeouts: []
}

document.addEventListener("keydown", keydown)
document.addEventListener("keyup", keyup)
recordPath.play.addEventListener("click", play)
recordPath.record.addEventListener("click", clickRecord)
recordPath.clear.addEventListener("click", clearPath)
