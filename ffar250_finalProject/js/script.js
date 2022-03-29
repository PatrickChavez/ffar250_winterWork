// Initializing the variables
let hamburgerIcon = document.querySelector(".hamburgerIcon");
let navigationCancel = document.querySelector(".cancelButton");
let mainNavigation = document.querySelector(".mainNavigation");
let pageBody = document.querySelector("body");
let toTopIcon = document.querySelector(".toTopIcon");

// Adding functions

// Code based on week 9 exercises
// Clicking on the naviagation icon brings up the menu
hamburgerIcon.onclick = function() {
  mainNavigation.style.width = "50%";
}

// Clicking on the "x" icon closes the menu
navigationCancel.onclick = function() {
  mainNavigation.style.width = "0%";
}


/* To Top Button */
/* Code from W3Schools */
/* https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopIcon.style.display = "block";
  } else {
    toTopIcon.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
toTopIcon.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
