const share = document.querySelector(".share");
const static = document.getElementById("static");
const active = document.getElementById("active");

function toggleShare() {
  console.log("trying to toggle");
  active.style.display === "block";
  static.style.display === "none";
}

share.addEventListener("click", toggleShare);
