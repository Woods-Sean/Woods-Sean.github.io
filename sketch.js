function setup() {
  createCanvas(640, 480);
  
}
var value1 = 255;
var value2 = 0
function draw() {
  if (mouseIsPressed) {
    fill(mouseX, mouseY, value2);
	bezier(mouseX, mouseY, mouseX + mouseY, mouseX*0.5, mouseY*0.5, (mouseX + mouseY)*0.5, mouseX, mouseY, (mouseX + mouseY));
/* 	for (var i = 0; i<sines.length; i++) {
		rotate(sines[i]);
	} */
  } else {
    
	fill(value1, value2, value2);
  }
    angle += 5;
    var val = cos(radians(angle)) * 12.0;
    for (var a = 0; a < 360; a += 75) {
      var xoff = cos(radians(a)) * val;
      var yoff = sin(radians(a)) * val;
      fill(0);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
//  ellipse(mouseX, mouseY, 80, 80);
}

function doubleClicked(){
	if(value1 === 0){
		value1 = 255;
	}else{
		value1 = 0;
	}
	
	if(value2 === 0){
		value2 = 255;
	}else{
		value2	 = 0;
	}
	
}