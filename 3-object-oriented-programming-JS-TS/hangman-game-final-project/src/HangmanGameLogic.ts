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
    gameRenderCLI: GameRenderCLI;

    constructor() {
        console.log(`Um novo jogo da forca está preste a começar, digite o nome de cada jogador conforme solicitado:\n(- Digite '${initGameOptions.computerPlayer}')\n(- Digite '${initGameOptions.done}' para salvar os jogadores)\n`);
        this.players = this.initPlayersArray();
        
        do {
            this.difficulty = readline.questionInt("Digite a dificuldade desejada? [0 - Fácil | 1 - Regular | 2 - Difícil | 3 - Muito Difício]\n");
        } while (this.difficulty < difficultyRatings.easy || this.difficulty > difficultyRatings.veryHard )

        this.gameRenderCLI = new GameRenderCLI();
    }

    startGame() {
        const firstToPlayIndex = Math.floor(Math.random() * this.players.length);
        let curPlayer: IPlayer = this.players[firstToPlayIndex];
        let standaloneGameMatch: StandaloneGameMatch;
        let difficulty: number;

        let curPlayerIndex: number = firstToPlayIndex;
        let nextPlayerIndex: number;

        do {
            nextPlayerIndex = (curPlayerIndex + 1) % this.players.length;
            console.log(`É sua vez de jogar ${curPlayer.name}.`)
            difficulty = curPlayer.chooseDifficulty();
            standaloneGameMatch = new StandaloneGameMatch(curPlayer, difficulty);

            curPlayerIndex = nextPlayerIndex;
        } while (nextPlayerIndex != firstToPlayIndex) // The loop will go on until every player has player (and we're back to the player 'firstToPlay')
    }

    private initPlayersArray(): Array<IPlayer> {
        const players: Array<IPlayer> = [];
        let curPlayerCount: number = 0;

        while (true) {
            let userInput = readline.question(`Player${curPlayerCount + 1}`)

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
        }
    }
}
