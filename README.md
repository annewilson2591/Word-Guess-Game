# WordGuessGame

Web based application of a simplied hangman style game.

## How to Play

To begin: player selects any letter to start game. Non alpha keys are ignored. The game  randomly select word from the internal list, displaying underscores to represent the letters of the word. 

If a correct letter is guessed, the game will reveal the letter; if an incorrect letter is guessed, the guess count will be decremented.

If the user guesses the word before running out of letters, the user score increments and the game is reset. If the user does not guess the word within the allocated number of guesses, the game is reset.

## Technology

* HTML5
* CSS
* Javascript