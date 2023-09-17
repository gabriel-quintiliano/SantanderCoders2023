// Não consegui terminar por completo ainda
enum difficultyRatings {
    easy = 0,
    medium = 1,
    hard = 2,
    veryHard = 3
}
export default class SecretWord {
    private secretWord: string = "";
    guessedLetters: number = 0;
    previousLetterGuessings: Array<string> = [];
    get length(): number { return this.secretWord.length };
    get wasGuessed(): boolean { return this.secretWord.length === this.guessedLetters };

    constructor(difficulty: number) { //use enums aqui
        let wordLength: number;

        switch (difficulty) {
            case difficultyRatings.easy: // easy word --> 4 to 5 letters
                wordLength = this.getRandomFromRange(4,5);
            case difficultyRatings.medium: // medium word --> 6 to 13 letters
                wordLength = this.getRandomFromRange(6,13);
            case difficultyRatings.hard: // hard word --> 14 to 18 letters
                wordLength = this.getRandomFromRange(14,18);
            case difficultyRatings.veryHard: // very hard word --> 19 to 23 letters
                wordLength = this.getRandomFromRange(19,23);
        }

        this.initSecretWord(difficulty);
    }

    private initSecretWord(desiredWorLength: number): string { // método para escolher aleatóriamente uma palavra de um dos arquivos .json dentro de /words
        return "";
    }

    private getRandomFromRange(min: number, max: number): number { // returns a number between min and max
        return Math.floor(Math.random() * (max - min + 1)) + min; // ChatGPT helped me out with this expression
    }

    guessLetter(letter: string): boolean {
        if (this.previousLetterGuessings.includes(letter)){
            console.log(`Você já tentou a digitou ${letter} como palpite, tente outra letra.`)
            return false;
        }

        let letterIndex: number;

        while ((letterIndex = this.secretWord.indexOf(letter)) != -1) {
            this.guessedLetters++;
        }

        return true;
    }
}
