function losuj(n) {															//losuje liczby całkowite
	let r = Math.floor(Math.random()*n)			
	return r
}

function alfa(x1, y1, x2, y2){										//zwraca przeliczony kąt odbicia śnieżki
	c = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))
	a = Math.abs(y2 - y1)
	if(c == 0)
		return 0
	if(a == 0){
		if(x1 > x2){
			if(y1 > y2)
				return 90
			else 
				return 0
		}
	}
	let ret = a / c
	ret = Math.acos(ret) * 180 / Math.PI
	if(x2 >= x1 && y2 > y1) 
		return 360 - ret
	if(x2 >= x1 && y2 <= y1)
		return ret + 180
	if(x2 < x1 && y2 > y1)
		return ret
	if(x2 < x1 && y2 <= y1)
		return 180 - ret
}

//rysuje śnieżki
function rysuj(){
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	for(i = 0; i < sniezki_count; i++){
		sniezki[i].change_y()
		sniezki[i].change_x()
		ctx.beginPath()
		ctx.arc(sniezki[i].return_x(), sniezki[i].return_y(), sniezki[i].return_r(), 0, 2 * Math.PI)
		ctx.strokeStyle = 'gray'
		ctx.fillStyle = "rgba(255, 255, 255, "+sniezki[i].opacity+")"
		ctx.fill()
		ctx.stroke()
	}
}