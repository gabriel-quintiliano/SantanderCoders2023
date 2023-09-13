import * as readline from "readline-sync"
import SecretWord, { LetterMatches } from "./SecretWord.js";

export interface IPlayer {
    name: string;
    score: number;
    id: number;
    guessLetter(secretWord: SecretWord): LetterMatches;
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
    constructor() {
        let name: string = readline.question("Digite seu nome:\n");
        super(name);
    }

    guessLetter(secretWord: SecretWord): LetterMatches {
        let userInput: string = readline.question("Guessing (letter): ");
        return secretWord.guessLetter(userInput[0]); // I've put [0] to make sure it only gets 1 char even if the user types more than 1 letter
    }
}

export class ComputerPlayer extends Player implements IPlayer {
    constructor() {
        super(`Computer`);
        this.name = `${this.name}ID${this.id}`
    }
    
    guessLetter(secretWord: SecretWord): LetterMatches{
        return secretWord.guessLetter("letter here");
    }
}
