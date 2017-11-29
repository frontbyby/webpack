// import printMe from './print.js'; 
import { cube } from './math.js';

function component() {
    // var element = document.createElement('div');
    // var btn = document.createElement('button');

    // element.innerHTML = 'Hello - webpack'
    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;

    // element.appendChild(btn);
    var element = document.createElement('pre');
    element.innerHTML = [
        'hello webpack',
        '5 cube is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());