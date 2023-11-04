console.log('JS lesson day 24 - events');

const paint = function (element) {
    console.log(element);
    element.style.color = 'red';
}

// content geged id-tai elemented ul elment oruulna
//tuunii huuhed element li element baina
// hervee huuhed deer ni darval random ungunuudeer uurchilnu

const colors = 
[
    'red',
    'blue',
    'orange',
    'pink',
    'yellow',
    'green',
    'white',
    'purple'
];
console.log(colors[0]);
const paintElement = (elEvent) => {
    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(elEvent);
    elEvent.target.style.color = colors[randomIndex];
}
 let ulElement = document.createElement('ul');

for (let i = 0; i < 3; i++) {
    let liElement = document.createElement('li');
    liElement.addEventListener('click', paintElement);
    liElement.innerHTML = 'Element - ' + i;
    ulElement.appendChild(liElement);
}

let contentElement = document.getElementById('content');
contentElement.appendChild(ulElement);
