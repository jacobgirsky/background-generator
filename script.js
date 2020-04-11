var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

let arr = [1, 5, 6, 6, 6];


function setTextContent() {
    css.textContent = body.style.background + ";";
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " +
        color1.value + ", " + color2.value + ")";

    setTextContent();
}

function pageLoad() {
    body.style.background = "linear-gradient(to right, " +
        color1.value + ", " + color2.value + ")";

    setTextContent();
}

const getRandomColor = () => {
    var c1 = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    var c2 = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    color1.value = c1;
    color2.value = c2;
    body.style.background = "linear-gradient(to right, " +
        c1 + ", " + c2 + ")";
    setTextContent();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", getRandomColor);
document.addEventListener("readystatechange", pageLoad);