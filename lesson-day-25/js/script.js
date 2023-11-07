let h1Element = document.createElement('h1');
h1Element.innerHTML = 'Welcome to my Website';
h1Element.setAttribute('style', 'font-size:30px');
let headerElement = document.createElement('header');
headerElement.appendChild(h1Element);
document.body.appendChild(headerElement);

let pElement1 = document.createElement('p');
pElement1.innerHTML = 'This is a small website created using HMTL and JavaScript'
let mainElement = document.createElement('main');
mainElement.appendChild(pElement1);
document.body.appendChild(mainElement);

let pElement2 = document.createElement('p');
pElement2.innerHTML = '&copy; 2023 Your Name';
let footerElement = document.createElement('footer');
footerElement.appendChild(pElement2);
document.body.appendChild(footerElement);