import * as readline from 'readline-sync';
import SecretWord, { LetterMatches} from "./SecretWord.js";
import Player, { HumanPlayer, ComputerPlayer, IPlayer } from "./Players.js";
import GameRenderCLI from "./GameRenderCLI.js";

type PlayerScores = {
    [playerName: string]: string;
};

class HangmanGameLogic {
    player?: IPlayer;
    secretWord?: SecretWord;
    difficult?: number;
    guessedLetters: number = 0;
    guessingsLeft: number = 6;
    scoreBoard: PlayerScores = {};
    gameRenderCLI?: GameRenderCLI;

    constructor() {
        let playerOption;
        let difficultyOption;
        
        do {
            playerOption = Number(readline.question("Um novo jogo vai começar, quem vai jogar? [0 - Humano | 1 - Computador]\n"));
        } while (playerOption < 0 || playerOption > 1 )

        do {
            difficultyOption = Number(readline.question("Digite a dificuldade desejada? [0 - Fácil | 1 - Regular | 2 - Difícil | 3 - Desafio]\n"));
        } while (difficultyOption < 0 || difficultyOption > 3 )

        switch (playerOption) {
            case 0:
                this.initGameForHumanPlayer();
            case 1:
                this.initGameForComputerPlayer();
        }

        // Implementar uma maneira de escolher a dificuldade do jogo

        this.secretWord = new SecretWord(this.difficult); // passar dificuldade aqui
        this.gameRenderCLI = new GameRenderCLI();

        

    }

    private askForPlayerGuessing(): LetterMatches {
        let userInput: string = readline.question("Guessing (letter): ");
        let matches: LetterMatches = this.player?.guessLetter(userInput[0], this.secretWord);
        return matches;
    }

    private initGameForHumanPlayer() {
        let playerName = readline.question("Digite seu nome:\n")
        this.player = new HumanPlayer(playerName);
    }

    private initGameForComputerPlayer() {
        this.player = new ComputerPlayer();
    }
}
