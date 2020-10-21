var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomBackground")
var reverse = document.getElementById("reverse");
var reverseDirection = "left"

window.onload = function() {
	setGradient();
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomGradient(){
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);

	setGradient();
}

function reverseGradient() {
	body.style.background = "linear-gradient(to " 
	+ reverseDirection
	+ ", " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	if (reverseDirection === "left") {
		reverseDirection = "right";
	} else {
		reverseDirection = "left";
	}
	

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient);

reverse.addEventListener("click", reverseGradient);

