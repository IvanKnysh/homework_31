const block = document.querySelector(".block");
const width = window.innerWidth - 100;
const height = window.innerHeight - 100;

const random = (val) => Math.floor(Math.random() * val);

// change color
setInterval(() => {
	block.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(
		255
	)})`;
}, 500);

// change position
setInterval(() => {
	block.style.top = random(height) + "px";
	block.style.left = random(width) + "px";
}, 1000);
