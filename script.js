// var color1 = document.querySelector("#color1");
// var color2 = document.querySelector("#color2");
// var css = document.querySelector("css");
// var body = document.querySelector("body");
const [color1 , color2] = document.querySelectorAll('.color');
const css = document.querySelector('h3');
const body = document.querySelector("body");

setGradient = () =>{
	body.style.background = linearGradient();
	// css.appendChild(document.createTextNode(body.style.background + ";"));
	css.textContent = `${body.style.background};`;
}

linearGradient = () =>
{
	return `linear-gradient(to right, ${color1.value} , ${color2.value})`;
}
color1.addEventListener('input',setGradient);
color2.addEventListener('input',setGradient);




