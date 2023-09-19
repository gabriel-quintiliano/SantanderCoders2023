import * as readline from 'readline-sync';
import SecretWord from "./SecretWord.js";
import { HumanPlayer, ComputerPlayer, IPlayer } from "./Players.js";
import GameRenderCLI from "./GameRenderCLI.js";
import StandaloneGameMatch from "./StandaloneGameMatch.js";

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
    guessedLetters: number = 0;
    guessingsLeft: number = 6;
    scoreBoard: PlayerScores = {};
    // gameRenderCLI: GameRenderCLI;

    constructor() {
        console.log(`Um novo jogo da forca está preste a começar, digite o nome de cada jogador conforme solicitado:\n(- Digite '${initGameOptions.computerPlayer}')\n(- Digite '${initGameOptions.done}' para salvar os jogadores)\n`);
        this.players = this.initPlayersArray();

        // this.gameRenderCLI = new GameRenderCLI();
    }

    startGame() {

        const firstToPlayIndex = Math.floor(Math.random() * this.players.length);
        let curPlayer: IPlayer;
        let standaloneGameMatch: StandaloneGameMatch;
        let difficulty: number;

        let curPlayerIndex: number = firstToPlayIndex;
        let nextPlayerIndex: number;

        let isCurGameMatchEnded: boolean = true; // Para que o primeiro condicional abaixo funcione corretamente

        let loop = 1;
        const intervalID = setInterval(() => {
            console.log("==================== dentro do setInterval HangmanGameLogic ====================")
            console.log(`loop ${loop}`)
            loop++;

            if (isCurGameMatchEnded) {
                curPlayer = this.players[curPlayerIndex];
                nextPlayerIndex = (curPlayerIndex + 1) % this.players.length;

                console.log(`nextPlayerIndex --> ${nextPlayerIndex}`)
                console.log(`curPlayerIndex --> ${curPlayerIndex}`)
                console.log(`É sua vez de jogar ${curPlayer.name}.`)

                let difficulty = curPlayer.chooseDifficulty();
                standaloneGameMatch = new StandaloneGameMatch(curPlayer, difficulty);
                standaloneGameMatch.startMatch()

                curPlayerIndex = nextPlayerIndex;
            }

            if (nextPlayerIndex == firstToPlayIndex) {
                console.log("==================== VAI TERMINAR! ====================")
                clearInterval(intervalID)
            }

            isCurGameMatchEnded = standaloneGameMatch.isMatchEnded

        }, 100)
    }

    private initPlayersArray(): Array<IPlayer> {
        const players: Array<IPlayer> = [];
        let curPlayerCount: number = 0;

        while (true) {
            let userInput = readline.question(`Player${curPlayerCount + 1}: `)

            if (userInput == initGameOptions.done){
                if (curPlayerCount == 0) {
                    console.log("Você adicionar no mínimo 1 player para jogar")
                    continue;
                }
                return players;
            }
            
            switch (userInput) {
                case initGameOptions.computerPlayer:
                    players.push(new ComputerPlayer())
                default:
                    players.push(new HumanPlayer(userInput))
            }

            curPlayerCount++;
        }
    }


}

(new HangmanGameLogic()).startGame()