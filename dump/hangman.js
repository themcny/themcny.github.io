
var dictionary = ['words','better','work','i','hope', 'bolo', 'octogon', 'banana', 'orange', 'apple', 'mango'];
var answer = dictionary[Math.floor(Math.random() * dictionary.length)];
var answer_array = answer.split('');
var match = 0;
var place = [];
var blanks = "";
var blanks_array = [];
var message = ""

window.onload = function() {
function createBlank(){
	for (var i=0;i<answer_array.length; i++) {
    	blanks += "_ "
        blanks_array.push("_ ")
    }
    document.getElementById('blanks').innerHTML=blanks
}
}
function checkLetter(){
	for (var index=0; index < answer_array.length; index++) {
		if (answer_array[index] === guess) {
			match++;
			place.push(index);
		}
	}
}

function popGuess(){	
    if (match > 0) {
    	for(var i=0;i<answer_array.length;i++){
        	a_i = place[i]
            blanks_array[a_i] = guess;
        }
        message = "Found " + match + " " + guess + '(s)'
        blanks = blanks_array.join('');
    }
    else {
    	message = "No Matches Found";
    }   
	
};


function update(){
	checkLetter();
	popGuess();

	document.getElementById('guess').innerHTML=blanks;
	document.getElementById('alert').innerHTML=message;
}


function userGuess(){
	var guess = document.getElementById('letter').value;
    //document.getElementById('trial').innerHTML = guess;
    update();
}



//need an update function that updates the blanks after every turn
//fillStroke in canvas does work with a variable - implement that