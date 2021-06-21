let SPACE_KEY = 32

function setup() {
	background(100);
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	textSize(30)
	text('Beena',0, windowHeight, width)
	textAlign(RIGHT, BOTTOM) // prints 'Beena' in bottom right corner of the screen.
	fill(200);
  rect(0, 0, 100, height); // rectangle for the eraser
  fill(0);
  text('Erase', 90, height/2); // prints 'erase' in rectangle

  fill(0, 0, 0)
	stroke(0,0,0)
	strokeWeight(5)
	rect(mouseX,mouseY,50,50) 
	}

function mousePressed(){ // erases canvas
	 if (mouseX < 100){
  	background(100)
	 }
}

function keyPressed () {
	if (keyCode == SPACE_KEY) { // prints circles when space bar is pressed 
		let d = random (255)
		let e = random (255)
		let f = random (255)
		fill(d, e, f)
		stroke(255)
		strokeWeight(15)
		ellipse(random(windowWidth),(random(windowHeight)), 100, 100)
  }
}
						




