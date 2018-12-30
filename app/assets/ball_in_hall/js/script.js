let kx = 100, //kulka pozycja x
	ky = 100,		//kulka pozycja y
	kr = 10,		//kulka promień
	speed_x = 0,  //kulka prędkość w osi x
	speed_y = 0,	//kulka prędkość w osi y
	canvas = document.getElementById("myCanvas"),
	ctx = canvas.getContext("2d"),
	a = 0, //alfa
	b = 0, //beta
	g = 0, //gamma
	time = 0,
	n = 8, //ilość dziur
	p = 0,	//numer aktywnej dziurki
	dziury = [],
	closeInstructionHandle = document.querySelector(".instruction button")

window.addEventListener('deviceorientation', changeOrientation)
closeInstructionHandle.addEventListener("click", closeInstruction)


class dziura {
	constructor() {
		this.r = 20 + losuj(10)
		this.x = 40 + losuj(710)
		this.y = 40 + losuj(710)
	}
	return_x() {
		return this.x
	}
	return_y() {
		return this.y
	}
	return_r() {
		return this.r
	}
}


function rysuj() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	//rysujemy kulkę
	ctx.beginPath()
	ctx.fillStyle = 'blue';
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	ctx.arc(kx, ky, kr, 0, 2 * Math.PI)
	ctx.strokeStyle = 'gray'
	ctx.fillStyle = 'gray'
	ctx.fill()
	ctx.stroke()

	ctx.beginPath()
	ctx.arc(dziury[p].return_x(), dziury[p].return_y(), dziury[p].return_r(), 0, 2 * Math.PI)
	ctx.strokeStyle = 'gray'
	ctx.fillStyle = 'red'
	ctx.fill()
	ctx.stroke()

	let control = Math.sqrt(Math.pow(kx + kr / 2 - dziury[p].return_x(), 2) + Math.pow(ky + kr / 2 - dziury[p].return_y(), 2))	//sprawdzamy odległość dziurki od śrdoka kulki
	if (control < dziury[p].return_r()) {
		p++
		if (p === n) {
			alert("You WIN! Your time " + time + " seconds")
			kx = 0
			ky = 0
			p = 0
			time = 0
		}
	}

	for (i = p + 1; i < n; i++) {
		ctx.beginPath()
		ctx.arc(dziury[i].return_x(), dziury[i].return_y(), dziury[i].return_r(), 0, 2 * Math.PI)
		ctx.strokeStyle = 'gray'
		ctx.fillStyle = "white"
		ctx.fill()
		ctx.stroke()
		control = Math.sqrt(Math.pow(kx + kr / 2 - dziury[i].return_x(), 2) + Math.pow(ky + kr / 2 - dziury[i].return_y(), 2))
		if (control < dziury[i].return_r()) {
			alert("Bad hole! You have to start from the beginning.")
			kx = 0
			ky = 0
			p = 0
		}
	}

	speed_y += Math.tan(b / 180 * Math.PI) * Math.cos(g / 180 * Math.PI) / 3		// prędkość kulki przeliczamy z tangensa ponieważ on szybciej narasta(chodzi o to że dla małych kątów dla sinusa kulka by się prawie nie ruszała)
	speed_x += Math.tan(g / 180 * Math.PI) * Math.cos(b / 180 * Math.PI) / 3
	kx += speed_x / 10
	ky += speed_y / 10

	if (ky > 800 - kr) {													//ograniczniki kulki
		ky = 800 - kr
		speed_y = 0
	}

	if (ky - kr < 0) {
		ky = kr
		speed_y = 0
	}

	if (kx > 800 - kr) {
		kx = 800 - kr
		speed_x = 0
	}

	if (kx - kr < 0) {
		kx = kr
		speed_x = 0
	}
}


for (let i = 0; i < n; i++) {
	dziury[i] = new dziura()
	for (let j = 0; j < i; j++) {
		if (Math.abs(dziury[i].return_x() - dziury[j].return_x()) < 50) {						//sprawdzamy czy dziura nie znajduje się zbyt blisko jednej z dziur które zostały już wylosowane w płaszczyźnie x
			i--
			break
		}

		if (Math.abs(dziury[i].return_y() - dziury[j].return_y()) < 50) {						//sprawdzamy czy dziura nie znajduje się zbyt blisko jednej z dziur które zostały już wylosowane w płaszczyźnie y
			i--
			break
		}

	}
}

setInterval("rysuj()", 5)
setInterval("czas()", 1000)







