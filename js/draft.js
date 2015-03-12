function gemCollisions(){

        if(player.x < gems.x + 50 && player.x + 50 > gems.x && player.y < gems.y + 50 && player.y + 50 > gems.y ) {
            console.log('you earned a gem');
       gems.sprite = 'images/Heart.png';
       
 
    }
    }


var timeoutID;
function moveHeart(){
    
        if(gems.sprite == 'images/Heart.png') {
        gems.x = 900;
        gems.y = 900;
    }
}

function disappearHeart(){
    timeoutID = window.setTimeout(moveHeart, 8000);
}

function newGem() {
	if(disappearHeart) {
		push new gems;
	}
}



function gemCollisions(player, gem) {
   // gem is now a direct reference for each gem that we want to check
}



















function gemCollisions(){

        if(player.x < gems.x + 50 && player.x + 50 > gems.x && player.y < gems.y + 50 && player.y + 50 > gems.y ) {
            console.log('you earned a gem');
       gems.sprite = 'images/Heart.png';
       
 
    }
    }


window.setTimeOut(function disappearGem(){
        if(gems.sprite == 'images/Heart.png') {
        gems.x = 900;
        gems.y = 900;
    }

}, 1000);


}