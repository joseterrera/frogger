

This is my version of frogger. Use the arrows to get to the water. You have 3 lives, and then the game resets. You can earn points if you hit a gem. I added a few more functionalities than the minimum, and there's more to be done, but I'm looking forward to moving to the next projects.

I found these two sites especially helpful:
http://www.html5rocks.com/en/tutorials/canvas/notearsgame/

http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/



First, we tackle the enemies. We need 4, one on each line, and they will go alon the x axis, disappear, and reappear on the other side. We make them go at different speeds, and for a fraction of a second it looks like they disappear, and then they reappear. This is because, the distance they travel is longer than the x canvas.

var Enemy = function Enemy(){}

Enemy.prototype.update
Enemy.prototype.render

We define a Player, emulating the Enemy way of defining it. With update and render, with the added difference that now we have handlInput. That is to say, we need to move it with our keyboard.

var Player = function (){}


Player.prototype.update
Player.prototype.render
Player.prototype.reset

The update method will check the position of the player. It will update score, and reset the game when it hits the water.
Render will put the player on the screen, and reset will move it back to its original position.

Just to make things a bit more like a real game, I added a Gems class.

The position of the gem will be set to random, but it has to stay within the middle section.

var Gems = function(){}
Gems.prototype.update
Gems.prototype.render


After that we call Player, Gems, and Enemies within new variables. For the enemies, since there is 4, I had to push a new enemy, and make sure each of the enemies was on one row, and was moving at different sppeeds.

All the functions are defined and called in engine.js.

I have check collisions which checks for an encounter between player and enemies, via coordenates + 50, for spacing. When a player gets hit, lives and score are modified.

There's another function that emulates a bit the check collisions one. With the addition that if it gets hit, the gem turns into a heart that will be thrown off the canvas, or disappear.


I have added more comments to both engine.js and app.js that explain a bit more what is going on.








