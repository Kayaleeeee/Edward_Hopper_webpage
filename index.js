const current = document.getElementById("current");
const imgs = document.querySelectorAll(".imgs img");
const opc = 0.4;
const main = document.getElementById("main");

imgs[0].style.opacity = opc;

main;

imgs.forEach(function (img) {
  img.addEventListener("click", imgClick);
});

function imgClick(e) {
  imgs.forEach(function (img) {
    return (img.style.opacity = 1);
  });

  current.src = e.target.src;
  current.classList.add("fade-in");

  setTimeout(function () {
    current.classList.remove("fade-in");
  }, 500);

  e.target.style.opacity = opc;
}
