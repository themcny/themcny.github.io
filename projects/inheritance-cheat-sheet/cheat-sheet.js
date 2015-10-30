var classFood = function() {
	this.type = "Food";
}

classFood.prototype.display = function() {
	console.log(this.type)
}

var meat = new classFood();
meat.display();




var classFruit = function() {
    this.type = "Fruit";
    this.name = "Orange";
}

classFruit.prototype = Object.create(classFood.prototype);

var apple = new classFruit();
apple.display();