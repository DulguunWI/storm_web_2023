console.log('Lesson day 22 js dom');
let h2Element = document.createElement('h2');
h2Element.innerText = 'My Favorite Foods';
h2Element.setAttribute('class', 'my-favorite-food');


let contentElement = document.getElementById('content');
contentElement.appendChild(h2Element);

let foods = ['бууз', 'Хуушуур', 'Цуйван', 'Хорхог', 'Царцаамаг'];
let ulElement = document.createElement('ul');
for (let i = 0; i < foods.length; i++) {
        let liElement = document.createElement('li');
        liElement.innerText = foods[i];
        ulElement.appendChild(liElement);
}

contentElement.appendChild(ulElement)

let h4Element = document.createElement('h4');
h4Element.innerHTML = 'Миний дуртай хоолнууд';

contentElement.insertBefore(h4Element, ulElement);

let clikcMeButton = document.createElement('button');
clikcMeButton.innerText = 'Click Me';
clikcMeButton.setAttribute('style', 'border: 1px solid red; padding: 10px; font-size: 20px;');

contentElement.appendChild(clikcMeButton);

function showAlert(){
    alert('Hello world');
}

clikcMeButton.addEventListener('click', showAlert);