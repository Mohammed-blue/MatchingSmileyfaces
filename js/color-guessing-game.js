const COLORS_ARRAY = ['orange', 'gold', 'yellow', 'gray','magenta', 'green', 'red','cyan', 'white','blue'];

        function runGame() {
            let guess = '';
            let correct = false;
            let numTries = 0;
            const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
            const target = COLORS_ARRAY[targetIndex];
            // console.log(COLORS_ARRAY[targetIndex]);

            do {
                guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.sort().join(', ') + '\n\nWhat color am I thinking of?\n');


                if (guess ===  null) {
                    alert('No value was entered, Goodbye!')
                    return;
                }
                correct = checkGuess(guess.toLowerCase(), target);
                numTries += 1;
                alert('This is your ' + numTries + ' try');

            } while(!correct);

            alert('congratulations you have guessed the color!' + ' it took you ' + numTries + ' guesses to finish the game');

            document.body.style.background = guess;

        };

        function checkGuess(guess, target) {
            let correct = false;

            if (COLORS_ARRAY.indexOf(guess) === -1) {
                // console.log(guess.indexOf(COLORS_ARRAY))
                alert("Sorry, I don't recognize your color.");
            } else if (COLORS_ARRAY.indexOf(guess) > COLORS_ARRAY.indexOf(target)) {
                // console.log(COLORS_ARRAY.indexOf(guess), COLORS_ARRAY.indexOf(target));
                alert('Hint: your color is alphabetically higher than mine.');
            } else if (COLORS_ARRAY.indexOf(guess) < COLORS_ARRAY.indexOf(target)) {
                alert('Hint: your color is alphabetically lower than mine.');
            } else {
                correct = true;
            }
            return correct;
        };