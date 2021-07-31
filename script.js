function load(){
	let img = document.getElementById('image')
	let msg = document.getElementById('d1')
	let data = new Date()
	let horas = data.getHours()
	d1.innerHTML = `Agora são ${horas} horas`
	if (12 >= horas && horas < 13){
		img.src = 'img1.png'
		document.body.style.background = '#e2cd0f'

	} else if (13 <= horas && horas < 18){
		img.src = 'img2.png'
		document.body.style.background = '#b9846f'
	} else{
		img.src = 'img3.png'
		document.body.style.background = '#515154'
	}
}
