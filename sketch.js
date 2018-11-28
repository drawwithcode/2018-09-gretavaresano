var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiZ3JldGF2YXJlc2FubyIsImEiOiJjanAwYXhoajkydDZtM2tsazN2cnFwcHB3In0.oVpV0O9WOcLEErt413hSzg');

var penwidth = 3;

var r = 0,
  g = 0,
  b = 0;
var options = {
	lat: 0,
	lng: 0,
	zoom: 20,
	style: 'mapbox://styles/gretavaresano/cjp08npfi01602srin9k6wx1z',
	pitch: 60
}

function preload(){

  myLoc = getCurrentPosition();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	options.lat = myLoc.latitude;
	options.lng = myLoc.longitude;

	// Create a tile map with the options declared
	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);

		textSize(18);
		textFont('Roboto');
		fill(0);
		text('Your current position:', 20, 115);
		text(myLoc.latitude, 20, 135);
		text(myLoc.longitude, 20, 155);
}

function draw() {
	push();
	translate(0, 0);
	rotate(0);
	noStroke();
	fill(0, 0, 0); //black
  rect(20, 50, 40, 40, 3, 3, 3, 3);
	fill(183, 41, 61); //red
	rect(80, 50, 40, 40, 3, 3, 3, 3);
	fill(69, 124, 206); //blue
	rect(140, 50, 40, 40, 3, 3, 3, 3);
	fill(84, 178, 108); //green
	rect(200, 50, 40, 40, 3, 3, 3, 3);
	fill(229, 229, 97); //yellow
	rect(260, 50, 40, 40, 3, 3, 3, 3);
	pop();

	if(keyIsPressed && key == 'p'){
	var px = pmouseX,
	py = pmouseY,
	x = mouseX,
	y = mouseY;
	strokeWeight(penwidth);
	stroke(r, g, b);
	line(px, py, x, y);
	if (y < 90) {
		if (x > 20 && x < 70) {
        r = 0;
        g = 0;
        b = 0;
	} else if( x > 80 && x < 130) {
		r = 183;
		g = 41;
		b = 61;
	}  else if( x > 140 && x < 190) {
		r = 69;
		g = 124;
		b = 206;
	}  else if( x > 200 && x < 250) {
		r = 84;
		g = 178;
		b = 108;
	} else if( x > 260 && x < 310) {
		r = 229;
		g = 229;
		b = 97;
	}
	}

}


	if (keyIsPressed && key == 'd') {
	clear();
	noStroke();
	textSize(18);
	textFont('Roboto');
	fill(0);
	text('Your current position:', 20, 115);
	text(myLoc.latitude, 20, 135);
	text(myLoc.longitude, 20, 155);
	}


}
