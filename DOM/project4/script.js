var crsr = document.querySelector(".crsr");
var maindiv = document.querySelector(".main");
var logo = document.querySelector(".logo");
var hero = document.querySelector("h1");

function customcrsr() {
  maindiv.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
  });
}

function heromouse() {
  hero.addEventListener("mouseenter", function () {
    crsr.style.scale = 5;
  });
  hero.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
  });
}

function logomouse() {
  logo.addEventListener("mouseenter", function () {
    crsr.style.scale = 6;
  });
  logo.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
  });
}

heromouse();
logomouse();
customcrsr();
