function rollDice() {
    let goldCoins = 0; //This will keep track as to how may gold coins a player has won
    let currentCoins = 0;

    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls');
            break;
        }
        if (roll === 4 && goldCoins > 0) {
                goldCoins--;
                currentCoins--;
                alert('I\'m sorry, you lose a coin.\n\n' + 'You have ' + goldCoins + 'gold coins.');
            continue;
        }
        if (roll < 5) {
            continue;
        }
        currentCoins += roll;
        alert('Congratulations, you win ' + roll + 'gold coins!\n\nYou currently have a total of ' + currentCoins + 'gold coins!');
        goldCoins += roll;
    }
    alert('You have won a total of ' + goldCoins + 'gold coins!');
}