let player = {
    health: 100,
    power: 20
}

let opponent = {
    health: 100,
    power: 20
}

const attack = () => {
    let attackButton = document.getElementById('attack-button');
    let restartButton = document.getElementById('restart-button');
    let gameMessage = document.getElementById('game-message');

    let playerAttack = determineAttack(player.power);
    opponent.health -= playerAttack;
    printToScreen();

    if (isGameOver(opponent.health)){
        gameMessage.innerText = "Player Won Fight"
        attackButton.hidden = true;
        restartButton.hidden = false;
        return;
    }

    attackButton.disabled = true;
    gameMessage.innerText = "Opponent is about to strike!"

    setTimeout(() =>{
    let opponentAttack = determineAttack(opponent.power);
    player.health -= opponentAttack;
    printToScreen();

    if (isGameOver(player.health)){
        gameMessage.innerText = "Opponent Won Fight"
        attackButton.hidden = true;
        restartButton.hidden = false;
        return;
    }
    attackButton.disabled = false;
    }, 250)
    
}

const determineAttack = (power) => {
    return Math.floor(Math.random() * power);
}

const isGameOver = (health) => {
    return health <= 0;
}

const printToScreen = () => {
    document.getElementById('player-health').innerText = 
    player.health;

    document.getElementById('opponent-health').innerText = 
    opponent.health;
}

printToScreen()