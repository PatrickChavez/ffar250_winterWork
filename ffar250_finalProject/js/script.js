// Initializing the variables
let hamburgerIcon = document.querySelector(".hamburgerIcon");
let navigationCancel = document.querySelector(".cancelButton");
let mainNavigation = document.querySelector(".mainNavigation");
let pageBody = document.querySelector("body");
let toTopIcon = document.querySelector(".toTopIcon");

// Adding music/sfx variables
let pageMusic;
let intro1Music = new Audio("assets/sounds/n60.mp3");
let intro2Music = new Audio("assets/sounds/MusMus-BGM-026.mp3");
let dinnerMusic = new Audio("assets/sounds/c6.mp3");
let picnicMusic = new Audio("assets/sounds/MusMus-BGM-130.mp3");
let departureMusic = new Audio("assets/sounds/MusMus-BGM-131.mp3");
let phoneMusic = new Audio("assets/sounds/MusMus-BGM-013.mp3");
let hubMusic = new Audio("assets/sounds/MusMus-BGM-070.mp3");
let ending01Music = new Audio("assets/sounds/v9.mp3");
let ending02Music = new Audio("assets/sounds/c4.mp3");
let demonDefeatSFX = new Audio("assets/sounds/slash4.mp3");
let rainSFX = new Audio("assets/sounds/rain2.mp3");

// Adding a setup that activates when the webpage has loaded
window.onload = setupDocument;

function setupDocument() {
  handlePageMusic();
}

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
window.onscroll = function() {
  scrollFunction()
};

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

// handlePageMusic
//
// Plays a specific song/SFX depending on the webpage
// Code refined thanks to C-Lab/Sabine Rosenburg
function handlePageMusic() {
  // The changing variable
  // An array is used in order to select the first class of the body
  pageBody = document.querySelector("body").classList[0];

  console.log(pageBody);

  if (pageBody === "intro1Body") {
    pageMusic = intro1Music;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "intro2Body") {
    pageMusic = intro2Music;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "hubBody") {
    pageMusic = hubMusic;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "demonDefeatBody") {
    pageMusic = demonDefeatSFX;
    pageMusic.loop = false;
    pageMusic.volume = 0.7;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "birdDemon02Body") {
    pageMusic = rainSFX;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "birdDemon03Body") {
    pageMusic = dinnerMusic;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "frogDemon02Body") {
    pageMusic = picnicMusic;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "oxDemon02Body") {
    pageMusic = rainSFX;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "oxDemon03Body") {
    pageMusic = departureMusic;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "phoneBody") {
    pageMusic = phoneMusic;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "ending01Body") {
    pageMusic = ending01Music;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "ending02Body") {
    pageMusic = ending02Music;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  }
}
