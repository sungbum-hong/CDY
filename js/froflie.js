// Profile //

const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");
const menu4 = document.querySelector("#menu4");
const c_box = document.querySelector(".c-box");
const d_box = document.querySelector(".d-box");
const v_box = document.querySelector(".v-box");

menu1.addEventListener("mouseover", function () {
  c_box.style.display = "block";
  d_box.style.display = "block";
  v_box.style.display = "block";
});

menu2.addEventListener("mouseover", function () {
  c_box.style.display = "block";
  d_box.style.display = "none";
  v_box.style.display = "none";
});

menu3.addEventListener("mouseover", function () {
  c_box.style.display = "none";
  d_box.style.display = "block";
  v_box.style.display = "none";
});

menu4.addEventListener("mouseover", function () {
  c_box.style.display = "none";
  d_box.style.display = "none";
  v_box.style.display = "block";
});
