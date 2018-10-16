//Background size - canvas
// var position - initial position on the canvas
var position = 100
function setup () {
  createCanvas(400, 200)
}
//Background (colour) and shape (including size/dimensions)
function draw() {
  console.log('The position is' + position)
  background(100)
//Position + 1 - causes it to move by one each time from original position
position = position + 1
rect(position, 0, 10, 10)
}
