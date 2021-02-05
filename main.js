const share = document.querySelector(".share");
const static = document.getElementById("static");
const active = document.getElementById("active");

function showActive() {
  console.log("trying to toggle");
  active.style.visibility === "visible";
}

share.addEventListener("click", showActive);
