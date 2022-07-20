        function runGame() {
        let guessString = '';
        let guessNumber = 0;
        let correct = false;
        let numTries = 0;

        const target = Math.floor(Math.random() * 100) + 1; //this gives a random number between 1 and 100;

        do {

                guessString = prompt('I am thinking of a number in the range 1 and 100.\n\nWhat is the number?');
                guessNumber = +guessString // the + here is a javascript way to convert a string into a number.
                if (guessString === null) {
                        return;
                } // this fixes the "cancel" behavior.
                numTries += 1;
                correct = checkGuess(guessNumber, target);
        } while(!correct);

        alert('You got it! the number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly.')
        }

        function checkGuess(guessNumber, target) {
        let correct = false;
        if (isNaN(guessNumber)) {
                alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range.');
        } else if (guessNumber < 1 || guessNumber > 100) {
                alert('Please enter an integer in the 1-100 range.');
        } else if (guessNumber > target) {
                alert('Your number is too large!');
        } else if (guessNumber < target) {
                alert('Your number is too small!');
        } else {
                correct = true;
        }
        return correct;
}