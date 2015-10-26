//Stick Fighter - Prototype

// 1st establish objects - hero(s), weapon(s), enemy(s)?
// The Hero - A Stick Figure
var hero = {
	health: 100,
	damage: {
		hand: 5,
		foot: 10
	},
	weapon: false,
	pos: {
		x: 0,
		y: 0
	}
}

// The Enemy - A Punching Bag
var punchingBag = {
	health: 1000,
	pos: {
		x: 0,
		y: 0
	}
}

// The Weapon - A Sword
var sword = {
	damage: {
		hand: 15,
		special: 30
	},
	weapon: true,
	pos: {
		x: 0,
		y: 0
	}
}


// Function to equip a sword and increase damage
function equip(item, person){
	if (item.pos == person.pos)
		person.damage.hand = item.damage.hand;
		person.weapon = item.weapon;
}

// Function to punch an enemy if the enemy is in the same place
function punch(person, enemy){
	if (enemy.pos === hero.pos)
		enemy.health -= person.damage.hand;
}

// Function to kick an enemy
function kick(person, enemy){
	if (enemy.pos === person.pos)
		enemy.health -= person.damage.foot;
}

// Function to use a weapon's special traits
function weapon(person, enemy){
	if (person.weapon === true){
		if (enemy.pos === person.pos){
			enemy.health -= person.damage.special;
		} else {
			person.health -= 1;
		}
	} else {
		// Alert that there is no weapon equipped
		console.log("You have no weapon equipped.")
	}
}

// Functions for adding and removing a class - for CSS animations
function removeAclass(idString, classString) {
	var id = idString;
	var myClassName = classString;
	var thing;
	thing = document.getElementById(id);
	thing.className = thing.className.replace(myClassName, "")
}

function addAclass(idString, classString) {
	var id = idString;
	var myClassName = classString;
	var thing;
	thing = document.getElementById(id);
	thing.className = thing.className.replace(myClassName, "");
	thing.className = thing.className + myClassName;
}


// Health Bar JavaScript and Damage
function damage(health,htmlid,damage) {
	health = document.getElementById(htmlid);
	health.value = health.value - damage;
};


// recognizing the arrow key presses
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //alert('left');
           	//hero = document.getElementById('hero');
            //hero.style.left = (hero.style.left.replace('px','')*1)-5;
            addAclass('hero', 'walkleft');
            setInterval(function() { removeAclass('hero', 'walkleft'); }, 1500);
            break;
        case 38:
            //alert('up');
            break;
        case 39:
            //alert('right');
          	//hero = document.getElementById('hero');
            //hero.style.left = (hero.style.left.replace('px','')*1)+5;
            addAclass('hero', 'walkright');
            setInterval(function() { removeAclass('hero', 'walkright'); }, 1500);
            break;
        case 40:
        	//alert('down');
        	break;
        case 17:
        	addAclass('hero', 'kick');
        	setInterval(function() { removeAclass('hero', 'kick'); }, 1500);
        	kick(hero, punchingBag);
        	damage(punchingBag.health, 'healthEnemy', hero.damage.foot);
        	addAclass('punchingBag','swing');
        	setInterval(function() { removeAclass('punchingBag', 'swing'); }, 1500);
        	break;
    	case 18:
    		addAclass('hero', 'punch');
			setInterval(function() { removeAclass('hero', 'punch'); }, 1500);
    		punch(hero, punchingBag);
    		damage(punchingBag.health, 'healthEnemy', hero.damage.hand);
    		addAclass('punchingBag','swing');
        	setInterval(function() { removeAclass('punchingBag', 'swing'); }, 1500);
    		break;
		case 90:
			//alert('z');
			addAclass('hero', 'sword');
			setInterval(function() { removeAclass('hero', 'sword'); }, 1500);
			weapon(hero, punchingBag);
			damage(punchingBag.health, 'healthEnemy', hero.damage.hand);
			addAclass('punchingBag','swing');
        	setInterval(function() { removeAclass('punchingBag', 'swing'); }, 1500);
			break;
    }
};

/*
Reflection

What was the most difficult part of this challenge?

Keeping it small. I also wanted to get the animation to move across the screen but without
JQuery, it got to be too hard. I think staying focused on the functions that I did make
was important. Also drawing the images was difficult for me as I'm not artistic in that way.


What did you learn about creating objects and functions that interact with one another?

I learned that it is important to keep all my names straight and be careful that I spell
it properly. Additionally, I got better at creating multiple functions that interact with
each other.


Did you learn about any new built-in methods you could use in your refactored solution? If so, what were they and how do they work?

Not for this one. I did learn that I would like to be able to use JQuery. It would have
saved me a lot of headached when adding and removing classes.


How can you access and manipulate properties of objects?

Using the dot syntax or the square brackets syntax. E.g. either object.property or 
object["property"] would acces the properties of the objects. Then they can be manipulated
like variables (basic arithmetic).




*/