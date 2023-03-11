// Profile //

var menu1 = document.querySelector('#menu1');
var menu2 = document.querySelector('#menu2');
var menu3 = document.querySelector('#menu3');
var menu4 = document.querySelector('#menu4');
var c_box = document.querySelector('.c-box');
var d_box = document.querySelector('.d-box');
var v_box = document.querySelector('.v-box');


menu1.addEventListener('mouseover', function(){
    c_box.style.display = "block";
    d_box.style.display = "block";
    v_box.style.display = "block";
})

menu2.addEventListener('mouseover', function(){
    c_box.style.display = "block";
    d_box.style.display = "none";
    v_box.style.display = "none";
})

menu3.addEventListener('mouseover', function(){
    c_box.style.display = "none";
    d_box.style.display = "block";
    v_box.style.display = "none";
})

menu4.addEventListener('mouseover', function(){
    c_box.style.display = "none";
    d_box.style.display = "none";
    v_box.style.display = "block";
})
