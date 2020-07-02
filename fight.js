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


    let playerAttack = Math.floor(Math.random() * player.power);
    opponent.health -= playerAttack;
    printToScreen();

    attackButton.disabled = true;
}

const printToScreen = () => {
    document.getElementById('player-health').innerText = 
    player.health;

    document.getElementById('opponent-health').innerText = 
    opponent.health;
}

printToScreen()