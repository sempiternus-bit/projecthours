function load(){
	let img = document.getElementById('image')
	let msg = document.getElementById('d1')
	let data = new Date()
	let horas = data.getHours()
	d1.innerHTML = `Agora são ${horas} horas`
	if (12 >= horas && horas < 13){
		img.src = 'im1.jpg'
		document.body.style.background = '#e2cd0f'

	} else if (13 <= horas && horas < 18){
		img.src = 'im2.jpeg'
		document.body.style.background = '#b9846f'
	} else{
		img.src = 'im3.jpg'
		document.body.style.background = '#515154'
	}
}