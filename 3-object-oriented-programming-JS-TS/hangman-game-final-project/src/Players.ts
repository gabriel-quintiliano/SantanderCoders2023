interface IPlayer {
    guessLetter(letter: string): boolean;
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

    guessLetter(letter: string): boolean{
        return true;
    }
}

export class ComputerPlayer extends Player implements IPlayer {
    constructor() {
        super(`Computer`);
        this.name = `${this.name}ID${this.id}`
    }
    
    guessLetter(letter: string): boolean{
        return true;
    }
}