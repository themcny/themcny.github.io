// Initialize canvas and required variables
var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"), // Create canvas context
		W = window.innerWidth, // Window's width
		H = window.innerHeight, // Window's height
		puck = {}, // puck object
		mallets = [2], // Array containing two paddles
		points = 0, // Variable to store points
		flag = 0, // Flag variable which is changed on collision
		particlePos = {}, // Object to contain the position of collision 
		startBtn = {}, // Start button object
		restartBtn = {}, // Restart button object
		over = 0, // flag variable, changed when the game is over
		init, // variable to initialize animation
		collisionType;

// Add keyboard events to canvas


// Set Canvas height and width
canvas.width = 1000;
canvas.height = 500;

// Function to color the canvas
function initCanvas() {
	ctx.fillStyle = "blue";
	//ctx.fillRect(0,0,W,H);
}


//Player 1 - Mallets
malletOne = {
	x: 100,
	y: 250,
	r: 15,
	//c: "blue",
	vix: 0,
	viy: 0,
	mass: (Math.PI * 15 * 15),

	// Draw the first mallet function
	draw: function() {
		ctx.beginPath();
		//ctx.fillStyle = this.c;
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
		ctx.stroke();
	}
}

//Player 2 - Mallet
malletTwo = {
	x: 900,
	y: 250,
	r: 15,
	//c: "blue",
	vix: 0,
	viy: 0,
	mass: (Math.PI * 15 * 15),

	// Draw the puck function
	draw: function() {
		ctx.beginPath();
		//ctx.fillStyle = this.c;
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
		ctx.fill();
	}
}

// puck
puck = {
	x: 500,
	y: 250,
	r: 10,
	c: "blue",
	vix: 0,
	viy: 0,
	mass: (Math.PI * 100),

	// Draw the puck function
	draw: function() {
		ctx.beginPath();
		ctx.fillStyle = this.c;
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
		ctx.fill();
	}
}

// Draw everything on canvas
function draw() {
	initCanvas();
	puck.draw();
	malletOne.draw();
	malletTwo.draw();
	update();
}

// Keyboard controls
function check(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: 
        	alert("Left"); 
        	break; //Left key
        case 38: 
        	alert("Up"); 
        	break; //Up key
        case 39: 
        	alert("Right"); 
        	break; //Right key
        case 40: 
        	alert("Down"); 
        	break; //Down key
    	case 65:
    		alert("A");
    		break; // A Key - left
    	case 68:
    		alert("D");
    		break; // D key - right
    	case 83:
    		alert("S");
    		break; // S key - down
    	case 87:
    		alert("W");
    		break; //W key - up
        default: 
        	alert(code); //Everything else
    }
}

// Check for a collision - p is a puck, m is one of the mallets
function checkCollision(p, m) {
	//Find distance from center of puck to center of mallet at current position
	var distx = p.x - m.x;
	var disty = p.y - m.y;
	var distance = Math.sqrt(distx * distx + disty * disty) 
	//it is hit with a mallet
	if (distance < p.r + m.r) { // If the distance is less than distance btwn centerpoints
		collisionType = "mallet"; //do i really need this line though
		return true;
	}
	//it hits the edge of the canvas
	else if (p.x <= p.r || p.x >= (canvas.width - p.x) || p.y <= p.r || p.y >= (canvas.height - p.y))
		collisionType = "edge";
		return true;
	// If no collisions happen
	else
		return false;
}

//When a collision happens
function collision() {
	//Action for edge hits
	if (collisionType === "edge"){
		puck.viy = -puck.viy;
		puck.vix = -puck.vix;
	}
	//Action for mallet hits
	else if (collisionType === "mallet") {
		puck.vix = ((puck.mass * puck.vix) + (mallet.mass * mallet.vix)) / puck.mass
		puck.viy = ((puck.mass * puck.viy) + (mallet.mass * mallet.viy)) / puck.mass
	}
}