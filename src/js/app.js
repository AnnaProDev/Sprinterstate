import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

window.addEventListener('DOMContentLoaded', () => {
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
})