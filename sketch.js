var moving = true
var name = 'Laura Jones'
//Background size - canvas
// var position - initial position on the canvas
var position = 100
var moving = true
var speed = 1


function setup() {
  createCanvas(400, 200)
}

function mousePressed() {
  moving = !moving
}
//Background (colour) and shape (including size/dimensions)
function draw() {
  //Add space before speech mark - adds space when it displays it (so number isn't right next to it)
  console.log('The position is' + position)
  background(100)
  text('Moving is ' + moving, 10, 70)
  //Position + 1 - causes it to move by one each time from original position
  position = position + speed
  if (position >= 400) {
   speed = -speed
  }
    if (position == 0) {
   speed = -speed
  }
  rect(position, 0, 10, 10)
  text('My name is ' + name, 10, 30)
}




