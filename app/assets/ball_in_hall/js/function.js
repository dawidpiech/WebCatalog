function losuj(n) {
	let r = Math.floor(Math.random() * n)
	return r
}

function changeOrientation(e){
    a = e.alpha
    b = e.beta
    g = e.gamma
}

function czas(){
    time += 1
    let timer = document.querySelector("#timer").innerHTML = time
}

function closeInstruction(){
    document.querySelector(".instruction-container").style.display = "none"
    time = 0
}
