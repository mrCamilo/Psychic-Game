 // Directions!
 document.getElementById("directions").innerHTML = "Guess what letter I'm thinking of... type any letter from a-z! You get 5 guesses!";

 document.onkeyup=function(event) {
        // variables to store wins, ties, losses, and onkeyup
        var userChoice = event.key;
        var wins = 0;
        var ties = 0;
        var losses = 0;
        
        // array of all letters
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' , 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        // Random letter
        var randomComputerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

        // run through the game
        for (var numGuesses = 5; numGuesses >= 0; numGuesses--) {
            if (randomComputerChoice == userChoice)
            {
                document.getElementById("winText").innerHTML = "You win!";
                break;
                
            }
            else {
                document.getElementById("guessesText").innerHTML = "Tries remaining: " + numGuesses; // count number of guesses
                // document.getElementById("lossText").innerHTML = "You lose!";
            }
        }

    }

