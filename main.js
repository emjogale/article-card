const share = document.querySelector(".share");
const info = document.querySelector(".info");

function toggleShare() {
  info.classList.add(".active");
}

share.addEventListener("click", toggleShare);
