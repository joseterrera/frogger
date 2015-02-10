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