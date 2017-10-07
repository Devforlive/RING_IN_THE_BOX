(function () {
	'use strict';

	const btns = document.querySelectorAll('.stuff__btn');

	btns.forEach(function (btn) {
		btn.addEventListener('click', function() {	// callback
			alert('Btn clicked');
// this - ссылка на btn parentNode - родительский узел (classList(DOMtokenList))
			 if (this.parentNode.classList.contains('special-offer')) {		// метод contains (аргумент special-offer)
				this.dispatchEvent(specialEvent);
			 	alert('special-offer');
			} else {
				alert('Btn clicked');
		}
	});
});
// выборка всех элементов кнопок "special offer"
const btns = document.querySelectorAll('.special-offer > .stuff__btn');	// CSS селектор: '.special-offer > .stuff__btn'

btnsSpecial.forEach(function(btn) {
	btn.addEventListener('click', function() {
		alert('Special Offer');
	});
});


const specialEvent = new Event ('special-event');	// добавили обработчик нового события

console.log(specialEvent);


