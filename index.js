// get the click event from the element with id "btn1" and call the function "addText"
document.getElementById("btn1").addEventListener("click", addText);

function addText() {
  document.getElementById("second-box").innerHTML = "Hello World";
}

// insert the text "Hello World" in the element with id "second-container"
