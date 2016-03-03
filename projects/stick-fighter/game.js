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
	alive: true,
	pos: {
		x: 0,
		y: 0
	}
}

// The Enemy - A Punching Bag
var punchingBag = {
	health: 1000,
	alive: true,
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

//Function to check if Alive or Dead?
/*
function checkLife(person){
	if person.alive === false
		console.log('you are dead');//show game over screen
}
*/

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
      setInterval(
      	function() { 
        	removeAclass('hero', 'walkleft'); 
        }, 1500);
      //var pos = $("#hero").position();
  		//$("#hero").css('left',pos.left - offset);
      break;
    case 38:
      //alert('up');
      break;
    case 39:
      //alert('right');
    	//hero = document.getElementById('hero');
      //hero.style.left = (hero.style.left.replace('px','')*1)+5;
      addAclass('hero', 'walkright');
      setInterval(
      	function() { 
      		removeAclass('hero', 'walkright'); 
      	}, 1500);
      //var pos = $("#hero").position();
    	//$("#hero").css('left', pos.left + offset);
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
