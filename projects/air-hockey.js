var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

//Air Hockey Table
canvas.width = 1000;
canvas.height = 500;


//Player 1 - Arrow Keys
var xa = 250,
    ya = 250,
    viya = 0,
    vixa = 0,
    speeda = 2,
    frictiona = 0.98,
    keysa = [];

function playerOne() {

    if (keysa[38]) { //up
        if (viya > -speeda) {
            viya--;
        }
    }
    
    if (keysa[40]) { //down
        if (viya < speeda) {
            viya++;
        }
    }
    if (keysa[39]) { //right
        if (vixa < speeda) {
            vixa++;
        }
    }
    if (keysa[37]) { //left
        if (vixa > -speeda) {
            vixa--;
        }
    }

    viya *= frictiona;
    ya += viya;
    vixa *= frictiona;
    xa += vixa;

    if (xa >= 485) {
        xa = 485;
    } else if (xa <= 15) {
        xa = 15;
    }

    if (ya > 485) {
        ya = 485;
    } else if (ya <= 15) {
        ya = 15;
    }

    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(xa, ya, 15, 0, Math.PI * 2);
    ctx.stroke();

    setTimeout(playerOne, 10);
}

playerOne();

document.body.addEventListener("keydown", function (e) {
    keysa[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keysa[e.keyCode] = false;
});


//Player 2 - WASD
var xb = 850,
    yb = 350,
    viyb = 0,
    vixb = 0,
    speedb = 2,
    mass = (Math.PI * 225),
    frictionb = 0.98,
    keysb = [];

function playerTwo() {

    if (keysb[87]) { //W
        if (viyb > -speedb) {
            viyb--;
        }
    }
    
    if (keysb[83]) { //S
        if (viyb < speedb) {
            viyb++;
        }
    }
    if (keysb[68]) { //D
        if (vixb < speedb) {
            vixb++;
        }
    }
    if (keysb[65]) { //A
        if (vixb > -speedb) {
            vixb--;
        }
    }

    viyb *= frictionb;
    yb += viyb;
    vixb *= frictionb;
    xb += vixb;

    if (xb >= 985) {
        xb = 985;
    } else if (xb <= 515) {
        xb = 515;
    }

    if (yb > 485) {
        yb = 485;
    } else if (yb <= 15) {
        yb = 15;
    }

    ctx.clearRect(500, 0, 1000, 500);
    ctx.beginPath();
    ctx.arc(xb, yb, 15, 0, Math.PI * 2);
    ctx.stroke();

    setTimeout(playerTwo, 10);
}

playerTwo();

document.body.addEventListener("keydown", function (e) {
    keysb[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keysb[e.keyCode] = false;
});


//Puck
var xp = 500,
    yp = 250,
    rp = 10,
    viyp = 0,
    vixp = 0,
    speedp = 2,
    massp = (Math.PI * 100),
    frictionp = 0.98;
    //keysp = [];

function puck() {

    hit = checkCollision();
    if (hit === true) {
        collision();
    }

    viyb *= frictionb;
    yb += viyb;
    vixb *= frictionb;
    xb += vixb;

    if (xb >= 990) {
        xb = 990;
    } else if (xb <= 10) {
        xb = 10;
    }

    if (yb > 490) {
        yb = 490;
    } else if (yb <= 10) {
        yb = 10;
    }

    ctx.clearRect(0, 0, 1000, 500);
    ctx.beginPath();
    ctx.arc(xb, yb, 10, 0, Math.PI * 2);
    ctx.fill();

    setTimeout(puck, 10);
}

puck();


//Dealing with Collisions - Check for collisions and then do something when collisions are true
// Check for a collision - p is a puck, m is one of the mallets
function checkCollision() {
    //Find distance from center of puck to center of mallet at current position
    var distxi = xp - xa;
    var distyi = yp - ya;
    var distancei = Math.sqrt(distxi * distxi + distyi * distyi)
    
    var distxo = xp - xb;
    var distyo = yp - yb;
    var distanceo = Math.sqrt(distxo * distxo + distyo * distyo)

    //it is hit with player 1's mallet
    if (distanceo < rp + 15) { // If the distance is less than distance btwn centerpoints
        collisionType = "mallet1"; //do i really need this line though
        return true;
    }
    //it is hit with player 2's mallet
    else if (distanceo < rp + 15) { // If the distance is less than distance btwn centerpoints
        collisionType = "mallet2"; //do i really need this line though
        return true;
    }
    //it hits the edge of the canvas
    else if (xp <= rp || xp >= (1000 - xp) || yp <= rp || yp >= (500 - yp))
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
    else if (collisionType === "mallet1") {
        vixp = ((massp * vixp) + (mass * vixa)) / massp
        viyp = ((massp * viyp) + (mass * viya)) / massp
    }
    else if (collisionType === "mallet2") {
        vixp = ((massp * vixp) + (mass * vixb)) / massp
        viyp = ((massp * viyp) + (mass * viyb)) / massp
    }
}
