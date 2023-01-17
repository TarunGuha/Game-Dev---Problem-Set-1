let fontsize = 60;

let paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx;
let ball_x, ball_y, ball_diameter, ball_dx, ball_dy;

let o_x,o_y,o_w,o_h;
let sc=0;

function setup() {
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  
  createCanvas(400, 400);
  background("black");
  
  paddle_width = 150;
  paddle_x = (width / 2) - (paddle_width / 2);
  paddle_y = height - 25;
  paddle_height = 15;
  
  o_w = 100;
  o_x = (width / 2) +10;
  o_y = height-300;
  o_h = 15;
  
  o1w = 100;
  o1x = 50;
  o1y = height-300;
  o1h = 15;
 
  ball_diameter = 20;
  ball_dx =1;
  ball_dy = 2;
  paddle_dx = 3;
  ball_x = (width / 2) - (ball_diameter / 2);
  ball_y = (height / 2) - (ball_diameter / 2);
 
}
 
function draw () {
  background("black");
 
  if(ball_x + (ball_diameter / 2) > width) {
    ball_dx = -ball_dx;
  }
 
  if(ball_x - (ball_diameter / 2) < 0) {
    ball_dx = -ball_dx;
  }
 
  if(ball_y + (ball_diameter / 2) > height) {
    ball_dy = 0;
    ball_dx = 0;
  }
   if(ball_y - (ball_diameter / 2) < 0) {
    ball_dy = -ball_dy;
  }
 
  ball_x = ball_x + ball_dx;
  ball_y = ball_y + ball_dy;
 
  if (keyIsDown(LEFT_ARROW)){
    paddle_x = paddle_x - paddle_dx;
  }
  
    if (keyIsDown(RIGHT_ARROW)){
    paddle_x = paddle_x + paddle_dx;
  }
  
  if((ball_x<o_x+o_w) && 
    (ball_x>o_x) && 
    (ball_y<o_y+(o_h))  && 
    (ball_y>o_y)){
   ball_dy=-ball_dy;
   ball_dx=-ball_dx;
   o_w = 0;
   o_x = (width / 2) +10;
   o_y = height-300;
   o_h = 0;
    sc = sc + 1;
 }
  
if((ball_x<o1x+o1w) && 
    (ball_x>o1x) && 
    (ball_y<o1y+(o1h))  && 
    (ball_y>o1y)){
   ball_dy=-ball_dy;
   ball_dx=-ball_dx;
   o1w = 0;
   o1x = (width / 2) +10;
   o1y = height-300;
   o1h = 0;
  sc = sc + 1;
 }
  
 if((ball_x<paddle_x+paddle_width) && 
    (ball_x>paddle_x) && 
    (ball_y<paddle_y+(paddle_height / 2))  && 
    (ball_y>paddle_y)){
   ball_dy=-ball_dy;
 }
  
  function drawWords(x)
  {
  fill(255);
  text('Score : '+sc,x, 20);
}
 
  drawWords(20);
  circle(ball_x, ball_y, ball_diameter);
  rect(paddle_x, paddle_y, paddle_width, paddle_height);
  rect(o_x,o_y,o_w,o_h);
  rect(o1x,o1y,o1w,o1h);
}