// Global Variables
var container = document.getElementById("container");
var circleContainer = document.getElementById("circle-container")
var svgCircle = document.getElementById("svg-circle");
var svgSquare = document.getElementById("svg-square");
var svgSwitch = document.getElementById("svg-switch");
var circle = document.getElementById("circle");
var circleFace = document.getElementById("circle-face");
var square = document.getElementById("square");
var squareFace = document.getElementById("square-face");
var eyes = document.getElementById("eyes");
var switchTrigger = document.getElementById("switch");

// Global Timelines
var toSquareTL = new TimelineMax({paused: true});
var toSquareFaceTL = new TimelineMax({paused: true})
var toCircleTL = new TimelineMax({});
var toSquareCircleTL = new TimelineMax({});

// Variable to determine which morph the shape will be
var isClicked = false;

// Adds event listener to the switch trigger
function addEventListeners() {
  container.addEventListener("click", morph, false);
  container.addEventListener("mouseover", hoverAnimation, false)
}

// ========== Animations ============= //
  function toSquareAnimation(){

// ====== Head Shape Animation ====== //
    toSquareTL
      .to(eyes, 0.5, { x: -25, y: -5, ease: Power3.easeInOut }, "sync")
      .to(circle, .6, {
        morphSVG: {
          shape: square,
          type: "rotational",
        },
        rotation: 180,
        ease: Power3.easeInOut,
        transformOrigin: "center center",
      }, "sync");
    toSquareTL
      .to(eyes, 0.5, { x: -25, y: -5, ease: Power3.easeInOut }, "sync")
      .to(circle, 0.5, {
        morphSVG: {
          shape: square,
          type: "rotational",
        },
        ease: Power3.easeInOut,
        transformOrigin: "center center",
      }, "sync");

// ===== Face Animation ===== //

    // toSquareFaceTL.play()
    toSquareFaceTL
      .to(circleFace, 0.5, {
        morphSVG: {
          shape: squareFace,
          type: "rotational",
        },
        ease: Power3.easeInOut,
        transformOrigin: "center center",
      }, "sync");
  }

// Morphs circle shape into a square if variable 'isClicked' is false and morphs to square if 'isClicked' is true
// This function also checks to see if the animation is active before firing the next animation
function morph() {
	if (!isClicked && !toSquareTL.isActive()) {
    toSquareAnimation()
    toSquareTL.play();
    toSquareFaceTL.play();
    isClicked = true;
    console.log("morph");
	} else if (isClicked && !toSquareTL.isActive()) {
    toSquareTL.reverse()
    toSquareFaceTL.reverse()
		isClicked = false;
	}
}

function init() {
	TweenMax.set([container, svgCircle, svgSquare], {
		yPercent: -50,
		xPercent: -50,
	});
	TweenMax.set(["#container:after"], { yPercent: -50, xPercent: -50 });
	TweenMax.set(svgSwitch, { y: -10, x: -10 });
	TweenMax.fromTo(
		[container, svgCircle, svgSquare],
		0.5,
		{ opacity: 0 },
		{ opacity: 1, onComplete: addEventListeners }
	);
}