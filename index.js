"use strict";
const drumEl = document.querySelectorAll(".drum");

const createSound = function (key) {
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
  }
};

const buttonAnimation=function(key){
  const pressedElement=document.querySelector("."+key)
  pressedElement.classList.add("pressed")
  setTimeout(
    function(){
      pressedElement.classList.remove("pressed")
    },
    100
  )
}

for (let i = 0; i < drumEl.length; i++) {
  // console.log(drumEl[i].textContent);
  drumEl[i].addEventListener("click", function () {
    createSound(this.textContent);
    buttonAnimation(this.textContent)
  });
}

keyPress = document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  createSound(e.key);
  buttonAnimation(e.key)
});
