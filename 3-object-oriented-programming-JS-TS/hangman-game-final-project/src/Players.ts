import * as readline from "readline-sync"
import SecretWord from "./SecretWord.js";

enum difficultyRatings {
    easy = 0,
    medium = 1,
    hard = 2,
    veryHard = 3
}

export interface IPlayer {
    name: string;
    score: number;
    id: number;
    guessLetter(secretWord: SecretWord): number;
    chooseDifficulty(): number;
}

export default class Player {
    private static classInstances: number = 0;
    name: string;
    score: number = 0;
    id: number;

    constructor(name: string) {
        this.name = name;
        Player.classInstances++;
        this.id = Player.classInstances;
    }
}

export class HumanPlayer extends Player implements IPlayer {
    constructor(name: string) {
        super(name)
    }

    chooseDifficulty(): number {
        let difficulty: number;

        do {
            difficulty = readline.questionInt("Digite a dificuldade desejada?\n 0 - Fácil (3-5 letras)\n 1 - Regular (6-13 letras)\n 2 - Difícil (14-18 letras)\n 3 - Muito Difício (19-23 letras)]\n--> ");
        } while (difficulty < difficultyRatings.easy || difficulty > difficultyRatings.veryHard )

        return difficulty;
    }

    guessLetter(secretWord: SecretWord): number {
        let userInput: string;
        userInput = readline.question("Palpite (letra): ");
        
        return secretWord.guessLetter(userInput[0]) // I've put [0] to make sure it only gets 1 char even if the user types more than 1 letter
    }
}

// Não consegui terminar por completo ainda
export class ComputerPlayer extends Player implements IPlayer {
    constructor() {
        super(`Computer`);
        this.name = `${this.name}ID${this.id}`
    }
    
    guessLetter(secretWord: SecretWord): number {
        secretWord.guessLetter("letter here");
        return 0;
    }

    chooseDifficulty(): number {
        let difficulty: number = Math.floor(Math.random() * difficultyRatings.veryHard);
        console.log(`${this.name} escolheu a dificuldade: ${difficultyRatings[difficulty]}`);

        return difficulty;
    }
}
