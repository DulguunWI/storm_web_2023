function handleClick(evet) {
    console.log("Button was clicked!");
}
 const button = document.getElementById("myButton");

 button.addEventListener('click', handleClick);

 function handleMouseEvent(event) {
    console.log(`Mouse position:X=${event.clientX},Y=${event.client}` );
 }

 const someElement = document.getElementById("myButton");
 someElement.addEventListener('mousemove', handleMouseEvent);