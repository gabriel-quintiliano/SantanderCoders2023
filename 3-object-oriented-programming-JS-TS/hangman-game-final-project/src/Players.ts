import SecretWord, { LetterMatches } from "./SecretWord.js";

interface IPlayer {
    guessLetter(letter: string, secretWord: SecretWord): LetterMatches | null;
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

    guessLetter(letter: string, secretWord: SecretWord): LetterMatches | null {
        let matches = secretWord.guessLetter(letter[0]);
        if (matches.total > 0) {
            return matches;
        }
        return null;
    }
}

export class ComputerPlayer extends Player implements IPlayer {
    constructor() {
        super(`Computer`);
        this.name = `${this.name}ID${this.id}`
    }
    
    guessLetter(letter: string, secretWord: SecretWord): boolean{
        return true;
    }
}
