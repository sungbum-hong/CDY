
// writed_popup //
var openButton = document.querySelector("#reset");
openButton.onclick = () => {
document.querySelector("#writed_popup").style.display = "block";
document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.1)";
document.querySelector("#footer").style.backgroundColor = "rgba(0,0,0,0.1)";
};

var closeButton = document.querySelector("#closebtn");
closeButton.onclick = () => {
document.querySelector("#writed_popup").style.display = "none";
document.querySelector("body").style.backgroundColor = "white";
document.querySelector("#footer").style.backgroundColor = "#fff";
};

// remove_popup //

var openButton = document.querySelector("#remove");
openButton.onclick = () => {
document.querySelector("#remove_popup").style.display = "block";
document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.1)";
document.querySelector("#footer").style.backgroundColor = "rgba(0,0,0,0.1)";
};

var closeButton = document.querySelector("#closebtn1");
closeButton.onclick = () => {
document.querySelector("#remove_popup").style.display = "none";
document.querySelector("body").style.backgroundColor = "white";
document.querySelector("#footer").style.backgroundColor = "#fff";
};
