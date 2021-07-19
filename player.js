const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    playerWalk = playerWalk + 1;
    if (playerWalk %2 == 1) {
      
      player.style.backgroundImage= "url('../jeux/asset/images/dos.png')";
      console.log(playerWalk);
     }
     else{
      player.style.backgroundImage= "url('../jeux/asset/images/dos2.png')";
     }
    player.style.top = (player.offsetTop - moveSize) + "px";
  } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
    if (playerWalk %2 == 1) {
      
    player.style.backgroundImage= "url('../jeux/asset/images/droite.png')";
    console.log(playerWalk);
   }
   else{
    player.style.backgroundImage= "url('../jeux/asset/images/droite2.png')";
   }
   player.style.left = (player.offsetLeft + moveSize) + "px";
  } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
    if (playerWalk %2 == 1) {
      
      player.style.backgroundImage= "url('../jeux/asset/images/face.png')";
      console.log(playerWalk);
     }
     else{
      player.style.backgroundImage= "url('../jeux/asset/images/face2.png')";
     }
    player.style.top = (player.offsetTop + moveSize) + "px";
  } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
    if (playerWalk %2 == 1) {
      
      player.style.backgroundImage= "url('../jeux/asset/images/gauche.png')";
      console.log(playerWalk);
     }
     else{
      player.style.backgroundImage= "url('../jeux/asset/images/gauche2.png')";
     }
    player.style.left = (player.offsetLeft - moveSize) + "px";
  }
});
