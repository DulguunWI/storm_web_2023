console.log('lesson day 24');

//function parametr todorhoiloh
 function myFunction(){
    console.log('it is my function');
 }
 // my function call
 myFunction();

 // function - 1 parametr utga butsaadag
 // addtwo - 5 - 7 - jishee

 function addTwo(number){
    let x = number + 2;
    return x;
 }

 console.log(addTwo(5));
 console.log(addTwo(11));
 console.log(addTwo(45));

 // function expression
 const myFunctionTwo = function (){
    console.log('it is my function expression');
 }
 myFunctionTwo();
 const myFunctionTwoWithParamaneter = function (number){
    let x = number + 2;
    return x;
 }
 //call function expression
 //zaaval ehleed function todorhoilsnii daraa duudah estoi
 //console.log(a);
 //let a = 6;

 //Arrow function
 
 const myArrowFunction = () => {
    console.log('it is my arrow function');
 }
 myArrowFunction();
 const myArrowFunctionWithParameter = (number) => {
    let x = number + 2;
    return x;
 }
console.log(myArrowFunctionWithParameter(5));