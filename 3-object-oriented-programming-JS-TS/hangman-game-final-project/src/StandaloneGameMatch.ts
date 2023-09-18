import * as readline from 'readline-sync';
import SecretWord from "./SecretWord.js";
import { HumanPlayer, ComputerPlayer, IPlayer } from "./Players.js";
import GameRenderCLI from "./GameRenderCLI.js";
import { Console } from 'console';

enum difficultyRatings {
    easy = 0,
    medium = 1,
    hard = 2,
    veryHard = 3
}

export default class StandaloneGameMatch {
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
        this.gameRenderCLI = new GameRenderCLI();
    }

    startMatch(): number {

        const intervalID = setInterval(() => {
            if (!this.secretWord.revealSecret()) {
                console.log("loading...")
                return
            }
            console.log(`Deu certo, o jogo vai começar ${this.player.name}! PALAVRA: ${this.secretWord.revealSecret()}`)

            while (this.guessingsLeft && !this.secretWord.wasGuessed) {
                this.player.guessLetter(this.secretWord)
                this.guessingsLeft--;
                this.score++;
                console.log(`wasGuessed? --> ${this.secretWord.wasGuessed}`)
                // atualizar o render do puppet no console
            }
    
            if (this.secretWord.wasGuessed) {
                this.score += this.bonusForGuessedWord;
            }

            this.secretWord.revealSecret()
            
            console.log(`@@@@@@@@@@@@@@@@ DENTRO ${this.score} @@@@@@@@@@@@@@@@`)
            clearInterval(intervalID);
            return this.score;
        }, 0)
        
        console.log(`@@@@@@@@@@@@@@@@ FORA ${this.score} @@@@@@@@@@@@@@@@`)
        return this.score;
    }

    private get bonusForGuessedWord() {
        let bonus: number;

        if (this.secretWord.length < 6) { // easy word --> up to 5 letters
            bonus = 2;
        } else if (this.secretWord.length < 14) { // medium word --> up to 13 letters
            bonus = 3;
        } else if (this.secretWord.length < 19) { // hard word --> up to 18 letters
            bonus = 5;
        } else { // very hard word --> up to 23 letters
            bonus = 8;
        }

        return bonus;
    }
}


// const novoJogo = new StandaloneGameMatch(new HumanPlayer("Gabriel"), 3)
// let score = novoJogo.startMatch()
// setTimeout(() => {console.log(`@@@@@@@@@@@@@@@@ DEPOIS ${score} @@@@@@@@@@@@@@@@`)
// }, 10000)