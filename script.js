// var color1 = document.querySelector("#color1");
// var color2 = document.querySelector("#color2");
const [color1 , color2] = document.querySelectorAll('.color');
// var h3 = document.querySelector("h3");
// var body = document.querySelector("body");
const h3 = document.querySelector("h3");
const body = document.querySelector("body");

setGradient = () =>{
	body.style.background = _linearGradient();
	// h3.appendChild(document.createTextNode(body.style.background + ";"));
	h3.appendChild(document.createTextNode(`${body.style.background} ;`));
}

_linearGradient = () =>
{
	return `Linear-Gradient(to right, ${color1.value} , ${color2.value});`;
}
color1.addEventListener('input',setGradient);
color2.addEventListener('input',setGradient);




