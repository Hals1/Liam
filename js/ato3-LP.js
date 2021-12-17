//end page
let botao = document.querySelector('.botao') 
let rodape = document.querySelector('.rodape')

//caso 1
let select1_a = document.querySelector('.select1-a') 
let select1_b = document.querySelector('.select1-b') 
let selection1_a_b = document.querySelector('.selection1-a_b') 
let dialog1 = document.querySelector('.dialog1') 
let dialog2 = document.querySelector('.dialog2') 
let select2_a = document.querySelector('.select2-a') 
let select2_b = document.querySelector('.select2-b') 
let selection2_a_b = document.querySelector('.selection2-a_b') 
let dialog3 = document.querySelector('.dialog3') 
let dialog4 = document.querySelector('.dialog4') 
let select3_a = document.querySelector('.select3-a') 
let select3_b = document.querySelector('.select3-b') 
let selection3_a_b = document.querySelector('.selection3-a_b') 
let dialog5 = document.querySelector('.dialog5') 
let dialog6 = document.querySelector('.dialog6') 
let select4_a = document.querySelector('.select4-a') 
let select4_b = document.querySelector('.select4-b') 
let selection4_a = document.querySelector('.selection4-a')
let selection4_b = document.querySelector('.selection4-b')

//lets do caso 2
let caso2 = document.querySelector('.caso2') 
let case2_LPR = document.querySelector('.case2-LPR') 
let case3_Ma = document.querySelector('.case3-Ma') 

select1_a.addEventListener('click', function() {
	selection1_a_b.classList.remove('invisivel')
	dialog1.classList.remove('invisivel')
})

select1_b.addEventListener('click', function() {
	selection1_a_b.classList.remove('invisivel')
	dialog2.classList.remove('invisivel')
})

select2_a.addEventListener('click', function() {
	selection2_a_b.classList.remove('invisivel')
	dialog3.classList.remove('invisivel')
})

select2_b.addEventListener('click', function() {
	selection2_a_b.classList.remove('invisivel')
	dialog4.classList.remove('invisivel')
})

select3_a.addEventListener('click', function() {
	selection3_a_b.classList.remove('invisivel')
	dialog5.classList.remove('invisivel')
})

select3_b.addEventListener('click', function() {
	selection3_a_b.classList.remove('invisivel')
	dialog6.classList.remove('invisivel')
})

select4_a.addEventListener('click', function() {
	selection4_a.classList.remove('invisivel')
	caso2.classList.remove('invisivel')
	case2_LPR.classList.remove('invisivel')
})

select4_b.addEventListener('click', function() {
	selection4_b.classList.remove('invisivel')
	caso2.classList.remove('invisivel')
	case3_Ma.classList.remove('invisivel')
})

//2º caso -- LPR
let select5a_c2 = document.querySelector('.select5a-c2') 
let select5b_c2 = document.querySelector('.select5b-c2') 
let selection5a_b_c2 = document.querySelector('.selection5a_b-c2') 
let dialog1_c2 = document.querySelector('.dialog1-c2') 
let dialog2_c2 = document.querySelector('.dialog2-c2')
let select6a_c2 = document.querySelector('.select6a-c2') 
let select6b_c2 = document.querySelector('.select6b-c2') 
let selection6a_b_c2 = document.querySelector('.selection6a_b-c2') 
let dialog3_c2 = document.querySelector('.dialog3-c2') 
let dialog4_c2 = document.querySelector('.dialog4-c2') 
let select7a_c2 = document.querySelector('.select7a-c2') 
let select7b_c2 = document.querySelector('.select7b-c2') 
let selection7a_c2 = document.querySelector('.selection7a-c2') 
let selection7b_c2 = document.querySelector('.selection7b-c2') 

let caso3 = document.querySelector('.caso3')

let case2_LPRv1 = document.querySelector('.case2-LPRv1') 
let case3_LPRv2 = document.querySelector('.case3-LPRv2') 

select5a_c2.addEventListener('click', function() {
	selection5a_b_c2.classList.remove('invisivel')
	dialog1_c2.classList.remove('invisivel')
})

select5b_c2.addEventListener('click', function() {
	selection5a_b_c2.classList.remove('invisivel')
	dialog2_c2.classList.remove('invisivel')
})

select6a_c2.addEventListener('click', function() {
	selection6a_b_c2.classList.remove('invisivel')
	dialog3_c2.classList.remove('invisivel')
})

select6b_c2.addEventListener('click', function() {
	selection6a_b_c2.classList.remove('invisivel')
	dialog4_c2.classList.remove('invisivel')
})

select7a_c2.addEventListener('click', function() {
	selection7a_c2.classList.remove('invisivel')
	caso3.classList.remove('invisivel')
	case2_LPRv1.classList.remove('invisivel')
})

select7b_c2.addEventListener('click', function() {
	selection7b_c2.classList.remove('invisivel')
	caso3.classList.remove('invisivel')
	case3_LPRv2.classList.remove('invisivel')
})

//2º caso -- Ma
let select5a_c3 = document.querySelector('.select5a-c3') 
let select5b_c3 = document.querySelector('.select5b-c3') 
let selection5a_b_c3 = document.querySelector('.selection5a_b-c3') 
let dialog1_c3 = document.querySelector('.dialog1-c3') 
let dialog2_c3 = document.querySelector('.dialog2-c3')
let select6a_c3 = document.querySelector('.select6a-c3') 
let select6b_c3 = document.querySelector('.select6b-c3') 
let selection6a_b_c3 = document.querySelector('.selection6a_b-c3') 
let dialog3_c3 = document.querySelector('.dialog3-c3') 
let dialog4_c3 = document.querySelector('.dialog4-c3') 
let select7a_c3 = document.querySelector('.select7a-c3') 
let select7b_c3 = document.querySelector('.select7b-c3') 
let selection7a_c3 = document.querySelector('.selection7a-c3') 
let selection7b_c3 = document.querySelector('.selection7b-c3') 

let case4_Mav1 = document.querySelector('.case4-Mav1')
let case5_Mav2 = document.querySelector('.case5-Mav2')

select5a_c3.addEventListener('click', function() {
	selection5a_b_c3.classList.remove('invisivel')
	dialog1_c3.classList.remove('invisivel')
})

select5b_c3.addEventListener('click', function() {
	selection5a_b_c3.classList.remove('invisivel')
	dialog2_c3.classList.remove('invisivel')
})

select6a_c3.addEventListener('click', function() {
	selection6a_b_c3.classList.remove('invisivel')
	dialog3_c3.classList.remove('invisivel')
})

select6b_c3.addEventListener('click', function() {
	selection6a_b_c3.classList.remove('invisivel')
	dialog4_c3.classList.remove('invisivel')
})

//2 macts e 1 lp = tal
select7a_c3.addEventListener('click', function() {
	selection7a_c3.classList.remove('invisivel')
	caso3.classList.remove('invisivel')
	case4_Mav1.classList.remove('invisivel')
})

//3 macts = fica com a Miko
select7b_c3.addEventListener('click', function() {
	selection7b_c3.classList.remove('invisivel')
	caso3.classList.remove('invisivel')
	case5_Mav2.classList.remove('invisivel')
})

//3º caso -- case2 LPRv1
let select8a_c2 = document.querySelector('.select8a-c2') 
let select8b_c2 = document.querySelector('.select8b-c2') 
let selection8a_b_c2 = document.querySelector('.selection8a_b-c2') 

let dialog5_c2 = document.querySelector('.dialog5-c2') 
let dialog6_c2 = document.querySelector('.dialog6-c2')

let select9a_c2 = document.querySelector('.select9a-c2') 
let select9b_c2 = document.querySelector('.select9b-c2') 
let selection9a_b_c2 = document.querySelector('.selection9a_b-c2')

let dialog7_c2 = document.querySelector('.dialog7-c2') 
let dialog8_c2 = document.querySelector('.dialog8-c2') 

let select10a_c2 = document.querySelector('.select10a-c2') 
let select10b_c2 = document.querySelector('.select10b-c2')  
let selection10a_c2 = document.querySelector('.selection10a-c2') 
let selection10b_c2 = document.querySelector('.selection10b-c2') 

select8a_c2.addEventListener('click', function() {
	selection8a_b_c2.classList.remove('invisivel')
	dialog5_c2.classList.remove('invisivel')
})

select8b_c2.addEventListener('click', function() {
	selection8a_b_c2.classList.remove('invisivel')
	dialog6_c2.classList.remove('invisivel')
})

select9a_c2.addEventListener('click', function() {
	selection9a_b_c2.classList.remove('invisivel')
	dialog7_c2.classList.remove('invisivel')
})

select9b_c2.addEventListener('click', function() {
	selection9a_b_c2.classList.remove('invisivel')
	dialog8_c2.classList.remove('invisivel')
})

select10a_c2.addEventListener('click', function() {
	selection10a_c2.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

select10b_c2.addEventListener('click', function() {
	selection10b_c2.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

//3º caso -- case3 LPRv2
let select8a_c3 = document.querySelector('.select8a-c3') 
let select8b_c3 = document.querySelector('.select8b-c3') 
let selection8a_b_c3 = document.querySelector('.selection8a_b-c3') 

let dialog5_c3 = document.querySelector('.dialog5-c3') 
let dialog6_c3 = document.querySelector('.dialog6-c3')

let select9a_c3 = document.querySelector('.select9a-c3') 
let select9b_c3 = document.querySelector('.select9b-c3') 
let selection9a_b_c3 = document.querySelector('.selection9a_b-c3')

let dialog7_c3 = document.querySelector('.dialog7-c3') 
let dialog8_c3 = document.querySelector('.dialog8-c3') 

let select10a_c3 = document.querySelector('.select10a-c3') 
let select10b_c3 = document.querySelector('.select10b-c3')  
let selection10a_c3 = document.querySelector('.selection10a-c3') 
let selection10b_c3 = document.querySelector('.selection10b-c3') 

select8a_c3.addEventListener('click', function() {
	selection8a_b_c3.classList.remove('invisivel')
	dialog5_c3.classList.remove('invisivel')
})

select8b_c3.addEventListener('click', function() {
	selection8a_b_c3.classList.remove('invisivel')
	dialog6_c3.classList.remove('invisivel')
})

select9a_c3.addEventListener('click', function() {
	selection9a_b_c3.classList.remove('invisivel')
	dialog7_c3.classList.remove('invisivel')
})

select9b_c3.addEventListener('click', function() {
	selection9a_b_c3.classList.remove('invisivel')
	dialog8_c3.classList.remove('invisivel')
})

select10a_c3.addEventListener('click', function() {
	selection10a_c3.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

select10b_c3.addEventListener('click', function() {
	selection10b_c3.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

//3º caso -- case4 Mav1
let select8a_c4 = document.querySelector('.select8a-c4') 
let select8b_c4 = document.querySelector('.select8b-c4') 
let selection8a_b_c4 = document.querySelector('.selection8a_b-c4') 

let dialog5_c4 = document.querySelector('.dialog5-c4') 
let dialog6_c4 = document.querySelector('.dialog6-c4')

let select9a_c4 = document.querySelector('.select9a-c4') 
let select9b_c4 = document.querySelector('.select9b-c4') 
let selection9a_b_c4 = document.querySelector('.selection9a_b-c4')

let dialog7_c4 = document.querySelector('.dialog7-c4') 
let dialog8_c4 = document.querySelector('.dialog8-c4') 

let select10a_c4 = document.querySelector('.select10a-c4') 
let select10b_c4 = document.querySelector('.select10b-c4')  
let selection10a_c4 = document.querySelector('.selection10a-c4') 
let selection10b_c4 = document.querySelector('.selection10b-c4') 

select8a_c4.addEventListener('click', function() {
	selection8a_b_c4.classList.remove('invisivel')
	dialog5_c4.classList.remove('invisivel')
})

select8b_c4.addEventListener('click', function() {
	selection8a_b_c4.classList.remove('invisivel')
	dialog6_c4.classList.remove('invisivel')
})

select9a_c4.addEventListener('click', function() {
	selection9a_b_c4.classList.remove('invisivel')
	dialog7_c4.classList.remove('invisivel')
})

select9b_c4.addEventListener('click', function() {
	selection9a_b_c4.classList.remove('invisivel')
	dialog8_c4.classList.remove('invisivel')
})

select10a_c4.addEventListener('click', function() {
	selection10a_c4.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

select10b_c4.addEventListener('click', function() {
	selection10b_c4.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

//3º caso -- case5 Mav2
let select8a_c5 = document.querySelector('.select8a-c5') 
let select8b_c5 = document.querySelector('.select8b-c5') 
let selection8a_b_c5 = document.querySelector('.selection8a_b-c5') 

let dialog5_c5 = document.querySelector('.dialog5-c5') 
let dialog6_c5 = document.querySelector('.dialog6-c5')

let select9a_c5 = document.querySelector('.select9a-c5') 
let select9b_c5 = document.querySelector('.select9b-c5') 
let selection9a_b_c5 = document.querySelector('.selection9a_b-c5')

let dialog7_c5 = document.querySelector('.dialog7-c5') 
let dialog8_c5 = document.querySelector('.dialog8-c5') 

let varianDialog1_c5 = document.querySelector('.varianDialog1-c5') 
let varianDialog2_c5 = document.querySelector('.varianDialog2-c5') 

let dialogV1_c5 = document.querySelector('.dialogV1-c5') 
let dialogV2_c5 = document.querySelector('.dialogV2-c5')

select8a_c5.addEventListener('click', function() {
	selection8a_b_c5.classList.remove('invisivel')
	dialog5_c5.classList.remove('invisivel')
})

select8b_c5.addEventListener('click', function() {
	selection8a_b_c5.classList.remove('invisivel')
	dialog6_c5.classList.remove('invisivel')
})

select9a_c5.addEventListener('click', function() {
	selection9a_b_c5.classList.remove('invisivel')
	dialog7_c5.classList.remove('invisivel')
	varianDialog1_c5.classList.remove('invisivel')

	if(case5_Mav2.classList.contains('invisivel') == false) {
		botao.classList.remove('invisivel')
		rodape.classList.remove('invisivel')
	}
})

select9b_c5.addEventListener('click', function() {
	selection9a_b_c5.classList.remove('invisivel')
	dialog8_c5.classList.remove('invisivel')
	varianDialog2_c5.classList.remove('invisivel')


	if(case5_Mav2.classList.contains('invisivel') == false) {
		botao.classList.remove('invisivel')
		rodape.classList.remove('invisivel')
	}
})