import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//Mask for phone number
if (document.getElementById('phone')) {
document.getElementById('phone').addEventListener('input', function (e) {
	var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
	e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
 });
}

 //Validation for form

 document.addEventListener('DOMContentLoaded', function() {
	if (document.getElementById('form')) {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	 async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.status === 200) {
				form.reset();
				form.classList.remove('_sending')
				if (document.querySelector('.form_button')) {
					// Get the button and the modal elements
					const button = document.querySelector('.form_button');
					const overlay = document.querySelector('.overlay');
					const modal = document.querySelector('#thanks');
					const close = document.querySelector('.modal_close');
				
					// Add a click event listener to the button
					button.addEventListener('click', function() {
					// Show the overlay and the modal
					overlay.style.display = 'block';
					modal.style.display = 'block';
					});
				
					// Add a click event listener to the close button
					close.addEventListener('click', function() {
					// Hide the overlay and the modal
					overlay.style.display = 'none';
					modal.style.display = 'none';
					});
				}
			} else {
				alert("Error");
				form.classList.remove('_sending')
			}
		} else {
			alert("Please fill out the required fields")
		}
	 }
	
	 function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if(input.classList.contains('_email')) {
				if( emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	 }
	

	 function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	 }

	 function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	 }
	}

	 //Function for test email
	 function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
	 }
});

window.addEventListener('DOMContentLoaded', () => {

	//Menu
	const menu = document.querySelector('.menu');
	const menuItem = document.querySelectorAll('.menu_item');
	const hamburger = document.querySelector('.hamburger');
	const body = document.querySelector('body');


	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		})
	})

	body.addEventListener('click', () => {
		body.classList.toggle('lock');
	});

	//Animation for background
	if (document.querySelectorAll('.bg_grad').length != 0 ) {
		var transTime = 7000;
		var numBgColors = document.querySelectorAll('.bg_grad').length;
		var bggrads = document.querySelectorAll('.bg_grad');
		var activeIndex = 0;
		var bgtrans = setInterval(function () {
		  bggrads[activeIndex].classList.remove('active');
		  activeIndex = (activeIndex + 1) % numBgColors;
		  bggrads[activeIndex].classList.add('active');
		}, transTime);
	}

})



