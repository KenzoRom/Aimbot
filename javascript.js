//De convert variabele zorgt ervoor dat de ingevulde nummers van string naar int worden geconvert zodat we daar een berekening mee kunnen doen.//

document.querySelector('.calculate').addEventListener("click", (e) => {
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
            const setGlobalToLocalX = enemyXPosConvert - playerXPosConvert;
            const setGlobalToLocalY = enemyYPosConvert - playerYPosConvert;
            const degreePlayerEnemy = Math.atan2(setGlobalToLocalX, setGlobalToLocalY) * (180 / Math.PI);
            /*if(playerStartDegrees > degreePlayerEnemy){*/
            var totalDegrees = playerStartDegreesConvert - degreePlayerEnemy;
            alert(totalDegrees);
            /*}else
            var totalDegrees = degreePlayerEnemy - playerStartDegreesConvert;
            alert(totalDegrees);*/

})

/*Deze 3 eventlisteners zorgen ervoor dat de positie van de player + rotation en enemy geset kan worden*/
document.querySelector('.set-enemy-pos').addEventListener("click", (e) => {
        
    const enemyXPos = document.querySelector('#xEnemy').value;
    enemyXPosConvert = parseInt(enemyXPos);
    const enemyYPos = document.querySelector('#yEnemy').value;
    enemyYPosConvert = parseInt(enemyYPos);
        let xEnemy = enemyXPosConvert * 78;
        let yEnemy = enemyYPosConvert * 78;
        let enemy = document.querySelector(".enemy");
        if(enemy){
            enemy.style.top = xEnemy + "px";
            enemy.style.left = yEnemy + "px";
        }
})

document.querySelector('.set-player-pos').addEventListener("click", (e) => {
        
    const playerXPos = document.querySelector('#xPlayer').value;
    playerXPosConvert = parseInt(playerXPos);
    const playerYPos = document.querySelector('#yPlayer').value;
    playerYPosConvert = parseInt(playerYPos);
        let xPlayer = playerXPosConvert * 78;
        let yPlayer = playerYPosConvert * 78;
        let player = document.querySelector(".player");
    if(player){
        player.style.top = xPlayer + "px";
        player.style.left = yPlayer + "px";
    }
})

document.querySelector('.set-player-rot').addEventListener("click", (e) => {
        
    const playerStartDegrees = document.querySelector('#startDegrees').value;
    playerStartDegreesConvert = parseInt(playerStartDegrees);
    const playerXPos = document.querySelector('#xPlayer').value;
    playerXPosConvert = parseInt(playerXPos);
    const playerYPos = document.querySelector('#yPlayer').value;
    playerYPosConvert = parseInt(playerYPos);
    let xPlayer = playerXPosConvert * 76;
    let yPlayer = playerYPosConvert * 76; 
    let rot = document.querySelector(".rot");
    if(rot){
        rot.style.top = xPlayer + "px";
        rot.style.left = yPlayer + "px";
        rot.style.transform = "rotate(" + playerStartDegrees + "deg)";
    }
})

