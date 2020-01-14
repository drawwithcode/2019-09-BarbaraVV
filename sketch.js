function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // create a button
  button = createButton('START');
  button.style("background-color", "#1E90FF");
  button.style("color", "white");
  button.style("border", "6px solid white");
  button.style("font-size", "100px");
  button.style("font-family", "Fira Sans");
  button.style("padding", "50px 50px");
  button.style("border-radius", "20px");
  button.position(windowWidth / 2 - 185, windowHeight / 2 - 100);

  // link the button to the other sketch
  button.touchStarted(
    function() {
      window.open('index2.html', '_self');
    })

}

// draw the text
function draw() {
  background("#1E90FF");
  let testo = 'Play with a YO-YO!';
  textFont("Fira Sans");
  textAlign(CENTER);
  textSize(50);
  textStyle(BOLD);
  text(testo, windowWidth / 2, windowHeight / 5 + 200);
  fill("white");
}

// prevent dragging the screen around
function touchMoved() {
  return false;
}


// request permission
function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()

}
