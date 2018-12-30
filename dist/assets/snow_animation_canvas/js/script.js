let mouse_x = 0,										//współrzędne kursora
mouse_y = 0,
canvas = document.getElementById("myCanvas"),
ctx = canvas.getContext("2d"),
sniezki = [],
sniezki_count = 1000									//ilość śnieżek
canvas.width = 1920
canvas.height = 1080

document.addEventListener("mousemove", function(e){
	mouse_x = e.clientX
	mouse_y = e.clientY
})
//klasa śnieżka
class Sniezka {
	constructor() {
		this.y = 0 - losuj(5000)						
		this.x = losuj(canvas.width)
		this.r = 2 + losuj(5)
		this.sped_x = 0
		this.spead_y = losuj(30) / 10
		this.a = 0							//kąt pod którym odbijamy śnieżkę
		this.move = 0						//odległość na jaką jest odbijana śnieżka
		this.opacity = 0.3 + losuj(70)/100	//przeźroczystość śnieżek
	}

	return_x(){
		return this.x
	}

	return_y(){
		return this.y
	}

	return_r(){
		return this.r
	}

	change_y(){
		if(this.move === 0){
			this.y = this.y + this.spead_y
			if(this.y > canvas.height){
				this.y = 0 - losuj(5000)
				this.x = losuj(canvas.width)
				this.r = 3 + losuj(20)
			}
		}
		else{
			a = this.a % 90																	
			if((this.a > 270 && this.a <= 360) || (this.a > 180 && this.a <= 270))			
				this.x = this.x + Math.sin(a / 180 * Math.PI) * 2							
			else 
				if(this.a < 90)
					this.x = this.x + Math.sin(a / 180 * Math.PI) * -2
				else 
					this.x = this.x + Math.cos(a / 180 * Math.PI) * -2
			if((this.a >= 270 && this.a <= 360) || (this.a >= 0 && this.a <= 90))
				this.y = this.y + Math.sin(a / 180 * Math.PI) * 2
			else if(this.a < 180)
				this.y = this.y + Math.sin(a / 180 * Math.PI) * -2
			else 
				this.y = this.y + Math.cos(a / 180 * Math.PI) * -2
			this.move = this.move - 1
			if(this.move < 0)
				this.move = 0
		}
	}

	change_x(){
		let w = parseFloat(this.x)/parseFloat(canvas.width)*parseFloat(window.innerWidth),	//Przliczamy pozycję śnieżki w zależnośći od rozmiaru ekranu
		h = parseFloat(this.y)/parseFloat(canvas.height)*parseFloat(window.innerHeight),
		c = Math.sqrt((w-mouse_x) * (w-mouse_x) + (h-mouse_y) * (h-mouse_y))				//odległość śnieżki od myszki
		if(c < 100 && this.move === 0){
			this.a = alfa(mouse_x, mouse_y, w, h)											//ta funkcja zwraca kąt od zera do 360 stopni
			this.move = 200														
		}
	}
}

for(i=0; i<1000; i++){																		//uruchomienie skryptu
	sniezki[i]=new Sniezka()
}
setInterval("rysuj()", 10)



