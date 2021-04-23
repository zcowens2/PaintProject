function setup() {
  createCanvas(450, 450);
  background(220)
  textSize(15);
  text('Directions-Draw inside the white box as it is your canvas. The', 3, 325);
  text('boxes along the side will change the color of your brush depending', 3, 340);
  text('on which box you choose and the white box is an eraser. If you', 3, 355)
  text('press keys A or S the thickness of the line/eraser will increase. Key ', 3, 370)
  text('Z will make the line skinnier and key X will clear your canvas.The', 3, 385)
  text('keys will also make your eraser thicker or thinner based on which', 3, 400)
  text('you have chosen.', 3, 415)
  rect(0, 0, 300, 300);

  strokeWeight(1)
  //red button
  fill('red')
  rect(345, 15, 60, 60);
  //green button
  fill('green')
  rect(345, 90, 60, 60);
  //blue button
  fill('blue')
  rect(345, 165, 60, 60);
  //erase button
  fill('white')
  rect(345, 240, 60, 60);
  fill('black')
  text('Red', 360, 50)
  text('Green', 355, 125)
  text('Blue', 360, 200)
  text('Eraser', 353, 275);

}

function draw() {

  //line stays in canvas
  if (mouseX > 0 && mouseX < 300 && mouseY > 0 && mouseY < 300 && mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  //key functions
  if (keyIsPressed) {
    if (key == 'a') { //makes line thicker
      strokeWeight(5)
    } else if (key == 'z') { //makes line skinnier
      strokeWeight(1)
    } else if (key == 's') {
      strokeWeight(10)
    } else if (key == 'x') {
      stroke(1)
      fill(255)
      rect(0, 0, 300, 300)
    }
  }
  //red button
  if (mouseX > 345 && mouseX < 405 && mouseY > 15 && mouseY < 75 && mouseIsPressed) {
    stroke(255, 0, 0);
  }
  //green button
  if (mouseX > 345 && mouseX < 405 && mouseY > 90 && mouseY < 160 && mouseIsPressed) {
    stroke(0, 255, 0);
  }
  //blue button
  if (mouseX > 345 && mouseX < 405 && mouseY > 175 && mouseY < 235 && mouseIsPressed) {
    stroke(0, 0, 255);
  }
  //erase button
  if (mouseX > 345 && mouseX < 405 && mouseY > 250 && mouseY < 325 && mouseIsPressed) {
    stroke(255);
  }

}