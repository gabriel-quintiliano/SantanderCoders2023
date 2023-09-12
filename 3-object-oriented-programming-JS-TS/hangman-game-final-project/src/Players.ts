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

class HumanPlayer extends Player implements IPlayer {
    constructor(name: string) {
        super(name)
    }

    guessLetter(letter: string): boolean{
        return true;
    }
}

class ComputerPlayer extends Player implements IPlayer {
    constructor(name: string) {
        super(name);
    }
    
    guessLetter(letter: string): boolean{
        return true;
    }
}