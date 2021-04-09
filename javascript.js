//De convert variabele zorgt ervoor dat de ingevulde nummers van string naar int worden geconvert zodat we daar een berekening mee kunnen doen.//

document.querySelector('#calculate').addEventListener("click", (e) => {
    const playerXPos = document.querySelector('#xPlayer').value;
        playerXPosConvert = parseInt(playerXPos);
    const playerYPos = document.querySelector('#yPlayer').value;
        playerYPosConvert = parseInt(playerYPos);
    const playerStartDegrees = document.querySelector('#startDegrees').value;
        playerStartDegreesConvert = parseInt(playerStartDegrees);
    const enemyXPos = document.querySelector('#xEnemy').value;
        enemyXPosConvert = parseInt(enemyXPos);
    const enemyYPos = document.querySelector('#yEnemy').value;
        enemyYPosConvert = parseInt(enemyYPos);
            const perpendicular =  enemyXPosConvert - playerXPosConvert;
            const base = enemyYPos - playerYPos;
            const inverseTan = Math.atan(base / perpendicular) * (180 / Math.PI);
            //const finalDegreeChange = playerStartDegreesConvert - tanInDegrees;
            alert(inverseTan)
})





let x = 39;
let y = 324;
let kijkrichting = 23;

let player = document.querySelector(".player");
if(player){
    player.style.top = y + "px";
    player.style.left = x + "px";
    player.style.transform = "rotate(" + kijkrichting + "deg)";
    player.style.transform = `rotate(${kijkrichting}deg)`
}