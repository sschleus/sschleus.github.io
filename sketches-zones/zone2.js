

function setup_zone2(sketch) {
    sketch.createCanvas(wW, wH).parent('zone-two'); 
    sketch.fill("blue");
    sketch.textSize(40);
    
}

// Function to draw for the zone2 sketch
function draw_zone2(sketch) {
  sketch.background(200);
  sketch.text("Hello Sacha & Mathieu", 30, 50);
}