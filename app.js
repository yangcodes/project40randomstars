const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

const starsColor = "white";
const starsNumber = 1000;
const size = 0.005; // maximum star size as a fraction of the screen width
const speed = 0.05; // fraction of screen width per second

// Setting up the stars
let stars = [];
let starsSpeed = speed * canvasEl.width;
let horizontalVelocity = starsSpeed * randomSign() * Math.random();
let verticalVelocity =
  Math.sqrt(Math.pow(starsSpeed, 2) - Math.pow(horizontalVelocity, 2)) *
  randomSign();

//randomizing the stars speed, size and location
for (let i = 0; i < starsNumber; i++) {
  let speedBoost = Math.random() * 2.5 + 0.5;
  stars[i] = {
    starRadius: (Math.random() * size * canvasEl.width) / 2,
    horizontalPosition: Math.floor(Math.random() * canvasEl.width),
    verticalPosition: Math.floor(Math.random() * canvasEl.height),
    horizontalVelocity: horizontalVelocity * speedBoost,
    verticalVelocity: verticalVelocity * speedBoost,
  };
}

//--------------------- The Game Loop

//the animation loop
let timeDiff,
  timeLast = 0;
requestAnimationFrame(runStars);

function runStars(timeNow) {
  timeDiff = timeNow - timeLast;
  timeLast = timeNow;
  console.log("running");
  requestAnimationFrame(runStars);
}

//randomSign Function
function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1;
}
