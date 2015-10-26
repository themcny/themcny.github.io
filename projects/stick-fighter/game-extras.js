function move(){
	var person = document.getElementById('hero');
	var position = parseInt(person.style.left);
	var step = 5;

	person.style.left = position + step + "px";

}

// The Level
//var level = document.getElementById("level");

//Getting position
var xPos = 0;
var yPos = 0;
function getPosition(idString) {
	var element = document.getElementById(idString)    
    while(element) {
        xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPos += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
}

//Assign initial position values to object traits
getPosition('hero');
hero.pos = {};
hero.pos.xPos = xPos;
hero.pos.yPos = yPos;

getPosition('punchingBag');
punchingBag.pos = {};
punchingBag.pos.xPos = xPos;
punchingBag.pos.yPos = yPos;


//Function to move the hero - Will go here


//http://piq.codeus.net/draw

// Moving Left and Right
/*
var itemObject = null;

function position(idString){
	itemObject = document.getElementById(idString);
	itemObject.style.position = 'relative';
	itemObject.style.left = '0px';
};

function move(item, direction){
	if (direction === "left"){
		itemObject.style.left = parseInt(itemObject.style.left) + 5 + "px";
	}
	else if (direction === "right") {
		itemObject.style.left = parseInt(itemObject.style.left) - 5 + "px";
	}
};

//window.onload = position('hero');

// Jumping 

var hopping = false;

function hop() {
	if (hopping === false) {
		hopping = true;
		setTimeout(land, 500);
	}
}

function land() {
	hopping = false;
}
*/

/*document.on('keydown', function(e) {
	if (e.keyCode === 18) {
		addAclass('.hero', 'punch');
		setTimeout(function() { removeAclass('.hero', 'punch'); }, 150);
	}
});*/

// Function 'vector' to group coordinates -- figure out movement
/*function Vector(x, y) {
	this.x = x; this.y = y;
}*/

/*
// positioning traits
var x = 0,
y = 0,
vix = 0, //initial speed/movement
viy = 0, //initial speed/movement
speed = 2, 
friction = 0.98,
keys =[];

// Now establishing all the other functions - punch, kick, equip, move

// Function to Walk
var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 900;

function walk(){
	if (keys[37]) { // moving left
		if (vix > -speed) {
			vix--;
		}
	}
	if (keys[38]) { // moving up
		if (viy > -speed) {
			viy--;
		}
	}
	if (keys[39]) { // moving right
		if (vix < speed) {
			vix++;
		}
	}
	if (keys[40]) { // moving down
		if (viy < speed) {
			viy--;
		}
	}

	//now add some friction to movement
	viy *= friction;
	y += viy;
	vix *= friction;
	x += vix;

	// now add behavior when player reaches the edge of the background

	if (x >= 830) {
		x = 830; //what happens at right most edge
	} else if (x <= 70) {
		x = 70; //what happens at the left most edge
	}

	if (y > 220) {
		y = 220; //what happens at top edge
	} else if (y <= 80) {
		y = 80; //what happens at bottom edge
	}

	// set a timeout
	setTimeout(walk, 15);

}

walk();

document.body.addEventListener("keydown", function (e) {
	keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
	keys[e.keyCode] = false;
});
*/