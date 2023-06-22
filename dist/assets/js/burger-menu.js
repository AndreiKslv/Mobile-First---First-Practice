const menu = document.querySelector('.menu')
const menuContent = document.querySelector('.nav__list')
const body = document.querySelector('body')

menu.addEventListener('click', function() {
	menuContent.classList.toggle('nav__list--active')
	body.classList.toggle('lock')
})