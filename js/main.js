// Global Variables
var container = document.getElementsByClassName("container")
var svgCircle = document.getElementById("svg-circle")
var svgSquare = document.getElementById("svg-square")
var svgSwitch = document.getElementById("svg-switch")
var circle = MorphSVGPlugin.convertToPath("#circle");
var square = document.getElementById("square")
var switchTrigger =  document.getElementById("switch")

// Variable to determine which morph the shape will be
var isClicked = false

// Adds event listener to the switch trigger
function addEventListeners(){
  switchTrigger.addEventListener("click", morph, false)
}

// Morphs circle shape into a square if variable 'isClicked' is false and morphs to square if 'isClicked' is true
function morph(){
  if (!isClicked) {
    TweenMax.to(circle, 1, {
			morphSVG: square,
			rotation: 360,
			ease: Power3.easeInOut,
			transformOrigin: "center center",
    });
    isClicked = true
  } else {
    TweenMax.to(circle, 1, {
			morphSVG: circle,
			rotation: 0,
			ease: Power3.easeInOut,
			transformOrigin: "center center",
    });
    isClicked = false
  }
}

function init(){
   TweenMax.set([container, svgCircle, svgSquare], {yPercent: -50, xPercent: -50})
   TweenMax.set(svgSwitch, {y: -10, x: -10})
   TweenMax.fromTo([container, svgCircle, svgSquare], .5, {opacity: 0}, {opacity: 1, onComplete: addEventListeners})
   
}


