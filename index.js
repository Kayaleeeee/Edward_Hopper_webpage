const current = document.getElementById("current");
const imgs = document.querySelectorAll(".imgs img");
const opc = 0.4;
const main = document.getElementById("main");
const intro = document.getElementById("intro");
const box = document.getElementById("box");
const exp = document.getElementById("exp");

imgs[0].style.opacity = opc;

function mainClick(e) {
  main.classList.add("tracking-in-expand");
}
main.addEventListener("click", mainClick);

imgs.forEach(function (img) {
  img.addEventListener("click", imgClick);
});

function imgClick(e) {
  imgs.forEach(function (img) {
    return (img.style.opacity = 1);
  });

  current.src = e.target.src;
  current.classList.add("fade-in");
  exp.innerText = e.target.id;

  setTimeout(function () {
    current.classList.remove("fade-in");
  }, 500);

  e.target.style.opacity = opc;
}

intro.addEventListener("click", showBox);
function showBox() {
  box.style.display = "block";
  box.classList.add("tracking-in-expand");
  intro.style.display = "none";
}

box.addEventListener("click", clearBox);
function clearBox(e) {
  box.style.display = "none";
  intro.style.display = "flex";
}
