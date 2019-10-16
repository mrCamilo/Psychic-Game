    // Directions!
    // document.getElementById("directions").innerHTML = "Guess what letter I'm thinking of... type any letter from a-z! You get 9 guesses!";

    // variables start off at 0 wins and losses and 9 tries
    var wins = 0;
    var losses = 0;
    var tries = 9;

    // Stats display
    var guessesText = document.getElementById("guessesText")//.innerHTML = "Tries remaining: " + tries;
    var winsText = document.getElementById("winsText")//.innerHTML = "Wins: " + wins;
    var lossText = document.getElementById("lossText")//.innerHTML = "Losses: " + losses;
    var yourGuesses = document.getElementById("yourGuesses")//.innerHTML = "Your guesses: " + arrGuesses;

    // Computer picks from this array of letters
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' , 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var arrGuesses = []; // an array of the guesses so far...
    
     document.onkeyup=function(event) {     // when user types a key... 
        var userChoice = event.key.toLowerCase(); // user input is saved as var userChoice
        //arrGuesses.push(userChoice); // adds the user's letter into the array
        var randomComputerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        // run through the game
            // if (tries === 0)
            // {
            //     losses += 1; // add a loss once the condition is met (tries are at 0)             
            //     tries = 9; // once tries hits zero, reset tries back to 9.
            //     arrGuesses = []; // reset the array of guesses           
            // }
            // else if (randomComputerChoice !== userChoice)
            // {                         
            //     tries --; // decrease number of attempts every incorrect guess
            //     numGuesses++; // count number of guesses
            //     arrGuesses = []; // reset the array of guesses
            // }
            // else {
            //      wins++; // add a W.
            //      tries = 9; // once tries hits zero, reset tries back to 9.
            //      arrGuesses = []; // reset the array of guesses          
            // }
       if (userChoice === randomComputerChoice) {
           alert("Winner!");
           wins++;
           tries = 9;
           arrGuesses = [];
       }

       if (userChoice !== randomComputerChoice)
       {
           arrGuesses.push(userChoice);
           tries --;
       }
       // tries = tries -1;

       if (tries === 0)
       {
          alert("Game over!");
          losses ++;
          tries = 9;
          arrGuesses=[];
       }

       guessesText.textContent = "Tries remaining: " + tries;
       winsText.textContent = "Wins: " + wins;
       lossText.textContent = "Losses: " + losses;
       yourGuesses.textContent = "Your guesses: " + arrGuesses;

       


}