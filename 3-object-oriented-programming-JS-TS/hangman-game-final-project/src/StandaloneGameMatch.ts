import * as readline from 'readline-sync';
import SecretWord, { LetterMatches} from "./SecretWord.js";
import { HumanPlayer, ComputerPlayer, IPlayer } from "./Players.js";
import GameRenderCLI from "./GameRenderCLI.js";

enum difficultyRatings {
    easy = 0,
    medium = 1,
    hard = 2,
    veryHard = 3
}

class StandaloneGameMatch {
    player: IPlayer;
    secretWord: SecretWord;
    guessedLetters: number = 0;
    guessingsLeft: number = 6;
    score: number = 0;
    gameRenderCLI: GameRenderCLI;

    constructor(player: IPlayer, secretWordLength: number) {
        // fazer um verificador para caso 'secretWordLength' for maior que 23 (maior palavra) ou
        // menor que 4 (menor palavra), seja raised um erro correspondente de valor fora do range de length
       
        this.player = player;
        this.secretWord = new SecretWord(secretWordLength);
    }

    startMatch() {
        while (this.guessingsLeft || !this.secretWord.wasGuessed) {
            this.player.guessLetter(this.secretWord)
            this.guessingsLeft--;

            // atualizar o render do puppet no console
        }
    }
}
