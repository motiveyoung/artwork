var a = 0;

function setup() {
  createCanvas(850,800);
  noStroke();
  fill(218,112,10);
  rect(0,0,850,300);
  fill(139,52,34);
  rect(0,300,850,500);
}

function draw() {
  face();
  mouth();
    if(mouseIsPressed){
    a += 5;
    }
}