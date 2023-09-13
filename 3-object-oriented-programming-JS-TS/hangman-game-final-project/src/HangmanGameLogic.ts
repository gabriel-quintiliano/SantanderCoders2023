import * as readline from 'readline-sync';
import SecretWord, { LetterMatches} from "./SecretWord.js";
import { HumanPlayer, ComputerPlayer, IPlayer } from "./Players.js";
import GameRenderCLI from "./GameRenderCLI.js";

type PlayerScores = {
    [playerName: string]: string;
};

enum difficultyRating {
    easy = 0,
    medium = 1,
    hard = 2,
    veryHard = 3
}

class HangmanGameLogic {
    humanPlayer: HumanPlayer;
    computerPlayer: ComputerPlayer;
    curPlayer: IPlayer;
    secretWord: SecretWord;
    difficulty: number;
    guessedLetters: number = 0;
    guessingsLeft: number = 6;
    scoreBoard: PlayerScores = {};
    gameRenderCLI: GameRenderCLI;

    constructor() {
        this.humanPlayer = new HumanPlayer;
        this.curPlayer = this.humanPlayer; // Human plays first always
        this.computerPlayer = new ComputerPlayer;
        
        do {
            this.difficulty = Number(readline.question("Digite a dificuldade desejada? [0 - Fácil | 1 - Regular | 2 - Difícil | 3 - Muito Difício]\n"));
        } while (this.difficulty < difficultyRating.easy || this.difficulty > difficultyRating.veryHard )

        this.secretWord = new SecretWord(this.difficulty); // passar dificuldade aqui
        this.gameRenderCLI = new GameRenderCLI();
    }

    private askForPlayerGuessing(): LetterMatches {
        return this.curPlayer.guessLetter(this.secretWord);
    }

}
