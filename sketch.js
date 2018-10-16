var moving = true
var name = 'Laura Jones'
//Background size - canvas
// var position - initial position on the canvas
var position = 100
function setup () {
  createCanvas(400, 200)
}
//Background (colour) and shape (including size/dimensions)
function draw() {
  //Add space before speech mark - adds space when it displays it (so number isn't right next to it)
  console.log('The position is' + position)
  background(100)
  text('Moving is ' + moving, 10, 70)
//Position + 1 - causes it to move by one each time from original position
if (moving) {
position = position + 1
}
rect(position, 0, 10, 10)
text('My name is ' + name, 10, 30)
}

function mousePressed() {
  moving = !moving
}
