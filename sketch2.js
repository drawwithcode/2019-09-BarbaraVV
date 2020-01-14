var positionY; // y position of the elements
var incrementY = 0; // y movement of the elements

function preload() {
  myImage = loadImage("./assets/star.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  positionY = windowHeight / 2;
  frameRate(70);
}

function draw() {
  background("#1E90FF");
  ellipseMode(CENTER);
  imageMode(CENTER);

  // move the elements when the device is rotated
  incrementY = map(rotationX, 180, -180, 180, -180);
  positionY = positionY + incrementY;

  if (positionY > height - 150) {
    positionY = height - 150;
  } else if (positionY < 150) {
    positionY = 150;
  }

  // draw the elements
  stroke("white");
  strokeWeight(6);
  line(width / 2, 0, width / 2, positionY);

  noStroke();
  fill("green");
  ellipse(width / 2, positionY, 300);

  noStroke();
  fill("white");
  ellipse(width / 2, positionY, 200);

  image(myImage, width / 2, positionY, 100, 100);

}

// prevent dragging the screen around
function touchMoved() {
  return false;
}

// request permission
function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}
