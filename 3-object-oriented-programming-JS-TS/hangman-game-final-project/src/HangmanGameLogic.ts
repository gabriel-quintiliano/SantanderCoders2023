import * as readline from 'readline-sync';
import SecretWord from "./SecretWord.js";
import Player, { HumanPlayer, ComputerPlayer } from "./Players.js";

type PlayerScores = {
    [playerName: string]: string;
};
class HangmanGameLogic {
    player?: Player;
    secretWord?: SecretWord;
    guessedLetters: number = 0;
    guessingsLeft: number = 6;
    scoreBoard: PlayerScores = {};

    constructor() {
        let playerOption: number = Number(readline.question("Um novo jogo vai começar, quem vai jogar? [1 - Humano | 2 - Computador]\n"));
        
        while (playerOption < 1 || playerOption > 2 ) {
            playerOption = Number(readline.question("Um novo jogo vai começar, quem vai jogar? [1 - Humano | 2 - Computador]\n"));
        }

        switch (playerOption) {
            case 1:
                this.initGameForHumanPlayer();
            case 2:
                this.initGameForComputerPlayer();
        }
    }

    private initGameForHumanPlayer() {
        let playerName = readline.question("Digite seu nome:\n")
        this.player = new HumanPlayer(playerName);
    }

    private initGameForComputerPlayer() {
        this.player = new ComputerPlayer();
    }
}