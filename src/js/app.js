import {demoButton} from './dom-loader';

demoButton.addEventListener("click", function(){
  // document.getElementById("demo").innerHTML = "Hello World";
  clickedButton();
});

function clickedButton() {

	alert('Hello');
}

// document.getElementById("demo").innerHTML = "Hello World";