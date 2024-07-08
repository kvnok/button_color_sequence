const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1'];
let currentIndex = 0;

function changeBackgroundColor() {
	document.body.style.backgroundColor = colors[currentIndex];
	currentIndex = (currentIndex + 1) % colors.length;
}
