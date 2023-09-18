// Não consegui terminar por completo ainda
import * as readline from 'readline-sync';

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

    constructor(wordLength: number) { //use enums aqui

        // switch (difficulty) {
        //     case difficultyRatings.easy: // easy word --> 4 to 5 letters
        //         wordLength = this.getRandomFromRange(4,5);
        //     case difficultyRatings.medium: // medium word --> 6 to 13 letters
        //         wordLength = this.getRandomFromRange(6,13);
        //     case difficultyRatings.hard: // hard word --> 14 to 18 letters
        //         wordLength = this.getRandomFromRange(14,18);
        //     case difficultyRatings.veryHard: // very hard word --> 19 to 23 letters
        //         wordLength = this.getRandomFromRange(19,23);
        //}

        this.initSecretWord(wordLength);
    }

    private initSecretWord(desiredWorLength: number): void { // método para escolher aleatóriamente uma palavra de um dos arquivos .json dentro de /words
        import(`./../words/${desiredWorLength}-letter-words.json`, {assert: {type: "json"}})
        .then(({ default: wordsArr }) => {
            console.log("\n\nTAMANHO DO ARRAY DE PALAVRAS = ", wordsArr.length)
            const randWordIndex = this.getRandomFromRange(0, wordsArr.length);
            this.secretWord = wordsArr[randWordIndex];
            this.revealSecret()
        })
    }

    private getRandomFromRange(min: number, max: number): number { // returns a number between min and max
        return Math.floor(Math.random() * (max - min + 1)) + min; // ChatGPT helped me out with this expression
    }

    guessLetter(letter: string): boolean {

        if (this.previousLetterGuessings.includes(letter)){
            console.log(`Você já tentou a digitou ${letter} como palpite, tente outra letra.`)
            return false;
        }

        let letterIndex: number = -1; // this ensures that the call below starts looking for a match from index 0 initially (-1 + 1 = 0)

        while ((letterIndex = this.secretWord.indexOf(letter, letterIndex + 1)) != -1) {
            console.log(`acertou! --> ${letterIndex}`)
            this.guessedLetters++;
            console.log(`guessedLetters = ${this.guessedLetters}`)
        }

        return true;
    }

    revealSecret(): string {
        // console.log(`Que pena, mais sorte da próxima vez. A palavra secreta era:\n${this.secretWord}`)
        return this.secretWord;
    }
}