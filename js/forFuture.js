//I dont understand:

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //this.x = this.x  + (this.speed * dt);

    if (this.x < 505) {
        this.x = this.x + (this.speed * dt);
    } else {
        this.x = -100;
    }

}

function checkCollisions(){
	for(var enemy = 0; enemy < allEnemies.length;enemy++){
		if(player.x < allEnemies[enemy].x + 50 && player.x + 50 > allEnemies[enemy].x && player.y < allEnemies[enemy].y + 50 && player.y + 50 > allEnemies[enemy].y ) {
			player.reset();
		}
	}
}


var allGems = [];
function moreGems() {
if (gemCollisions == true) {
   allGems.push(new Gems());
}
}