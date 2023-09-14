import * as readline from 'readline-sync';
import SecretWord, { LetterMatches} from "./SecretWord.js";
import { HumanPlayer, ComputerPlayer, IPlayer } from "./Players.js";
import GameRenderCLI from "./GameRenderCLI.js";

type PlayerScores = {
    [playerName: string]: string;
};

enum difficultyRatings {
    easy = 0,
    medium = 1,
    hard = 2,
    veryHard = 3
}

enum initGameOptions {
    done = "!done",
    computerPlayer = "!computer"
}

class HangmanGameLogic {
    players: Array<IPlayer>;
    curPlayer: IPlayer;
    secretWord: SecretWord;
    difficulty: number;
    guessedLetters: number = 0;
    guessingsLeft: number = 6;
    scoreBoard: PlayerScores = {};
    gameRenderCLI: GameRenderCLI;

    constructor() {
        console.log(`Um novo jogo da forca está preste a começar, digite o nome de cada jogador conforme solicitado:\n(- Digite '${initGameOptions.computerPlayer}')\n(- Digite '${initGameOptions.done}' para salvar os jogadores)\n`);
        this.players = this.initPlayersArray();
        
        let randPlayerIndex = Math.floor(Math.random() * this.players.length)
        this.curPlayer = this.players[randPlayerIndex]
        
        do {
            this.difficulty = readline.questionInt("Digite a dificuldade desejada? [0 - Fácil | 1 - Regular | 2 - Difícil | 3 - Muito Difício]\n");
        } while (this.difficulty < difficultyRatings.easy || this.difficulty > difficultyRatings.veryHard )

        this.secretWord = new SecretWord(this.difficulty); // passar dificuldade aqui
        this.gameRenderCLI = new GameRenderCLI();
    }

    startGame() {

    }

    private initPlayersArray(): Array<IPlayer> {
        const players: Array<IPlayer> = [];
        let curPlayerCount: number = 0;
        while (true) {
            let userInput = readline.question(`Player${curPlayerCount + 0}`)
            

        }

        for (let userInput = "", curPlayerCount = 1; userInput != initGameOptions.done; curPlayerCount++) {
        }
    }

    private askForPlayerGuessing(): LetterMatches {
        return this.curPlayer.guessLetter(this.secretWord);
    }

}
