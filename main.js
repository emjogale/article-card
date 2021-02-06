const share = document.querySelector(".share");
const static = document.getElementById("static");
const active = document.getElementById("active");

function toggleActive() {
  console.log("trying to toggle");
  if ((active.style.visibility = "hidden")) {
    active.style.visibility = "visible";
  } else {
    active.style.visibility = "hidden";
  }
}

share.addEventListener("click", toggleActive);
