const share = document.querySelector(".share");
const static = document.getElementById("static");
const active = document.getElementById("active");
const imgActive = document.getElementById("activeShare");

function toggleActive() {
	active.classList.toggle("notHidden");
}

share.addEventListener("click", toggleActive);

imgActive.addEventListener("click", toggleActive);
