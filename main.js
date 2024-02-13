const messages = document.querySelectorAll('.message');
const inputButton = document.querySelector('.input-message');
let currentIndex = 0;
inputButton.addEventListener('click', () => {
	messages[currentIndex % messages.length].classList.add('visible');
	currentIndex++;
});