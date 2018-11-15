function setup (){
  // (width, height);
  createCanvas (500, 500);
  // sets background color
  background (255);
    stroke(108, 60, 38);
  strokeWeight(4);
  fill (122, 79, 46);
  ellipse (250, 250, 495);
  
  // cheese
  stroke(186, 153, 117);
  strokeWeight(3);
  fill (241, 216, 188); 
  ellipse (250, 250, 400);
  
  // slices
  stroke(68, 48, 25, 100);  
  strokeWeight(1);
  line (75, 75, 425, 425); // top left to bottom right
  line (75, 425, 425, 75); // bottom left to top right
  line (0, 250, 500, 250); // horizontal
  line (250, 0, 250, 500); // vertical
  
  }
function mousePressed() {
  // pepperoni!
  stroke(150, 58, 58);
  strokeWeight(2);
  fill (124, 29, 29);
  ellipse(mouseX, mouseY, 42);
  
  // pick random topping: pepperoni, pineapple, sausage, green pepper, black olives
  // place at random rotation @ cursor  
}

function draw (){

}