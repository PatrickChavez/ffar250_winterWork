// Initializing the variables
let numberEntry = document.querySelector(".textInput").value;
let htmlBody = document.querySelector("body");
let checkInputButton = document.querySelector(".inputButton");
let message = document.querySelector(".inputMessage");

// Adding a function for the input button
checkInputButton.onclick = function() {
  inputFunction();
}

// inputFunction
//
// Changes the webpage depending on the number typed, as well as a message change
// Based on CART 211 Exercises

function inputFunction() {
  // Adding the text entry variable
  numberEntry = document.querySelector(".textInput").value;
  // Entering the correct number will change the webpage
  if (numberEntry === "418-555-0032") {
    message.textContent = "It worked!";
    location.href = "ending01.html";
  }
  // Alternate entry
  else if (numberEntry === "4185550032") {
    message.textContent = "It worked!";
    location.href = "ending01.html";
  }

  // A simple message will be displayed if none of the above are typed in
  else {
    message.textContent = "Nothing's happening!?";
  }
}
