import * as flsFunctions from "./modules/functions.js";
import $ from "jquery";

flsFunctions.isWebp();

//Mask for phone number
$('phone').on('input', function (e) {
	var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
	e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
 });

 //Validation for form
 document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form');
	$('form').on('submit', formSend);

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
	const numBgColors = $('.bg_grad').length;
	const bggrads = $('.bg_grad');
	let activeIndex = 0;
	const bgtrans = setInterval(function () {
		if (numBgColors == 0) {
			return 
		} else {
			bggrads[activeIndex].classList.remove('active');
			activeIndex = (activeIndex + 1) % numBgColors;
			bggrads[activeIndex].classList.add('active');
		}
	}, 7000);

	// Modal
	$(".form_button").on("click", function(){
		$(".overlay, #thanks").fadeIn("slow");
	});
	$(".modal_close").on("click", function(){
		$(".overlay, #thanks").fadeOut("slow");
	});
})

