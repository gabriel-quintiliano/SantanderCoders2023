interface IPlayer {
    guessLetter(letter: string): boolean;
}

class Player {
    name: string;
    score: number = 0;

    constructor(name: string) {
        this.name = name;
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
    constructor(name: string) {
        super(name);
    }
    
    guessLetter(letter: string): boolean{
        return true;
    }
}