//Can use this syntax with webpack and ES6
// import { without } from 'lodash';
// console.log(without);	

//Here we should use browserify to do the above action
var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8,9];
console.log('answer:',_.without(array,3));

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




