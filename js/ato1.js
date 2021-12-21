// final de ato
let botao = document.querySelector(".botao")
let rodape = document.querySelector(".rodape")

//lets do swiish
let w_img = document.querySelector('.w_img')
let w_div = document.querySelector('.w_div')
let w_art = document.querySelector('.w_art')

let mw_img = document.querySelector('.mw_img') 
let mw_art = document.querySelector('.mw_art') 
let mw_div = document.querySelector('.mw_div') 

let rw_img = document.querySelector('.rw_img') 
let rw_art = document.querySelector('.rw_art') 
let rw_div = document.querySelector('.rw_div') 
let rw_div2 = document.querySelector('.rw_div2') 

let selection1 = document.querySelector('.selection1')
let select2_a = document.querySelector('.select2-a')
let select2_b = document.querySelector('.select2-b')
let selection2_a = document.querySelector('.selection2-a')
let selection2_b = document.querySelector('.selection2-b')

let select3_a1 = document.querySelector('.select3_a1')
let select3_b1 = document.querySelector('.select3_b1')
let selection3_a1 = document.querySelector('.selection3_a1')
let selection3_b1 = document.querySelector('.selection3_b1')

let select3_a2 = document.querySelector('.select3_a2')
let select3_b2 = document.querySelector('.select3_b2')
let selection3_a2 = document.querySelector('.selection3_a2')
let selection3_b2 = document.querySelector('.selection3_b2')

var i = w_img
var a = w_art
var d = w_div


function mostra() {
	if (i.classList.contains('invisivel') == false) {

		a.classList.remove('invisivel')
		a.classList.remove('blur')
		a.classList.add('no-blur')

		d.classList.remove('invisivel')
		d.classList.remove('blur')
		d.classList.add('no-blur')
	} else {
		i.classList.remove('invisivel')
		i.classList.remove('blur')
		i.classList.add('no-blur')
	}
}

//eventos
document.addEventListener('mousemove', function() {
	setInterval(mostra, 500)
	clearInterval()
})

select2_a.addEventListener('click', function() {
	i = mw_img
	a = mw_art
	d = mw_div

	selection1.classList.add('invisivel', 'blur')
	selection1.classList.remove('no-blur')

	selection2_a.classList.remove('invisivel', 'blur')
	selection2_a.classList.add('no-blur')

	setInterval(mostra, 1000)
	clearInterval()
})

select2_b.addEventListener('click', function() {
	i = rw_img
	a = rw_art
	d = rw_div

	selection1.classList.add('invisivel', 'blur')
	selection1.classList.remove('no-blur')

	selection2_b.classList.remove('invisivel', 'blur')
	selection2_b.classList.add('no-blur')

	setInterval(mostra, 1000)
	clearInterval()

	rw_div2.classList.remove('invisivel', 'blur')
	rw_div2.classList.add('no-blur')
})

select3_a1.addEventListener('click', function() {
	selection3_a1.classList.remove('invisivel', 'blur')
	selection3_a1.classList.add('no-blur')

	botao.classList.remove('invisivel', 'blur')
	botao.classList.add('no-blur')

	rodape.classList.remove('invisivel', 'blur')
	rodape.classList.add('no-blur')
})

select3_b1.addEventListener('click', function() {
	selection3_b1.classList.remove('invisivel', 'blur')
	selection3_b1.classList.add('no-blur')

	botao.classList.remove('invisivel', 'blur')
	botao.classList.add('no-blur')

	rodape.classList.remove('invisivel', 'blur')
	rodape.classList.add('no-blur')
})

select3_a2.addEventListener('click', function() {
	selection3_a2.classList.remove('invisivel', 'blur')
	selection3_a2.classList.add('no-blur')

	botao.classList.remove('invisivel', 'blur')
	botao.classList.add('no-blur')

	rodape.classList.remove('invisivel', 'blur')
	rodape.classList.add('no-blur')
})

select3_b2.addEventListener('click', function() {
	selection3_b2.classList.remove('invisivel', 'blur')
	selection3_b2.classList.add('no-blur')

	botao.classList.remove('invisivel', 'blur')
	botao.classList.add('no-blur')

	rodape.classList.remove('invisivel', 'blur')
	rodape.classList.add('no-blur')
})