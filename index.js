// get the click event from the buttons and call the respective functions
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let counter = 0;
let counterDiv = document.getElementById("counter");
let timerDiv = document.getElementById("timer");

// insert the text "Hello World" in the element with id "second-container"
btn1.addEventListener("click", () => {
  document.getElementById("second-box").innerHTML = "Hello World";
});

// count the number of times the button is clicked and display the count in the element with id "counter"
// for every click, add one second to the timer
btn2.addEventListener("click", () => {
  counter++;
  timerDiv.innerHTML = counter;
});

// when "btn3" is clicked, insert a timer in the element with id "timer" that counts that count from 0 to 1000
btn3.addEventListener("click", () => {
  let timerInterval = setInterval(() => {
    if (counter <= 0) {
      clearInterval(timerInterval);
    }
    console.log(`${counter} segundos`);
    timerDiv.innerText = counter--;
  }, 1000);
});
