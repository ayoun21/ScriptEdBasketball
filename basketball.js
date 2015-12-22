function promptForPlayerName(player){
    player = prompt("whats " + player + " name?");
    if(player.length > 15) {
        alert("Thats a really long name");
    }
    return player;
}

function tryMidrangeShot(){
    var shot = Math.random();
    var missed = Math.random();
    if(shot > 0.2 && missed > 0.2){
        return true;
    }else {
        return false;
    }
}

function tryThreePointShot(){
    var shot = Math.random();
    var missed = Math.random();
    if(shot <= 0.2 || missed >= 0.8){
        return true;
    }else {
        return false;
    }
}

function getShotString(player,pointer,goodorbad){
    var goodorbad;
    if(goodorbad) {
        goodorbad = "all water";
    } else {
        goodorbad = "brick";
    }
    var message = player + " attempted a " + pointer + ". it was " + goodorbad + "!!!";
    return message;
}

function updateScore(allnet,score,howmany){
   if (allnet){
      return score + howmany;
      }
      else {
         return score;
      }
}

function isEndOfGame (score, playersname){
   if(score>=20){
      alert ("the game is over " + playersname + " is the champion");
      return true;
   }
   else {
    return   false;
   }
}
