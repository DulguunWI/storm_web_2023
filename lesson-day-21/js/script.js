console.log('Lesson day 21 - JS dom Create Element/Styling Attributes');
//recapture
// JS arrays
let numberArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numberArrays);
console.log('length of array: ' , numberArrays.length);

// access of element in array

var fifthElement = numberArrays[4];
console.log('fifth element: ' , fifthElement);

//change element in array
numberArrays[4] = 15;
console.log(numberArrays);

//looping in array
for (let i = 0; i < numberArrays.length; i++) {
    numberArrays[i] = numberArrays[i] * 5;
}

console.log(numberArrays);

//JS DOM

var input = prompt('Enter your name: ');
///get element by id
var contentElement = document.getElementById('content');
console.log(contentElement);

contentElement.innerHTML = input;

///get ellements by tag
 var listsOfElements = document.getElementsByTagName('li');
 console.log(listsOfElements);
  listsOfElements[0].innerHTML = 'First : 1';

  for (var i = 0; i < listsOfElements.length; i++) {
    listsOfElements[i].innerHTML = 'First : ' + (i + 1);
  }

  //create element and append to Dom

  var fourthLi = document.createElement('li');

  console.log(fourthLi);

  fourthLi.innerHTML = 'Fourth : 4';

  var ulElement = document.getElementsByTagName('ul');
  console.log(ulElement);
  ulElement[0].appendChild(fourthLi);