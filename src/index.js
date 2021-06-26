import sayHello from './js/sayHello'
import './css/style.css'

console.log(sayHello());

let test = document.querySelector('body');
let test2 = document.createElement('div');
test2.innerText = 'hi';
test.appendChild(test2);