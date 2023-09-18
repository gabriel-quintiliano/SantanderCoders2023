// Não consegui terminar por completo ainda
import * as readline from 'readline-sync';
import StandaloneGameMatch from "./StandaloneGameMatch.js";

enum difficultyRatings {
    easy = 0,
    medium = 1,
    hard = 2,
    veryHard = 3
}
export default class SecretWord {
    private secretWord?: string;
    private environment: StandaloneGameMatch;
    guessedLetters: number = 0;
    previousLetterGuessings: Array<string> = [];
    get length(): number { return this.secretWord ? this.secretWord.length : 0 };
    get wasGuessed(): boolean { return this.secretWord ? this.secretWord.length === this.guessedLetters : false };

    constructor(wordLength: number, environment: StandaloneGameMatch) { //use enums aqui
        this.initSecretWord(wordLength);
        this.environment = environment;
    }

    private initSecretWord(desiredWorLength: number): void { // método para escolher aleatóriamente uma palavra de um dos arquivos .json dentro de /words
        import(`./../words/${desiredWorLength}-letter-words.json`, {assert: {type: "json"}})
        .then(({ default: wordsArr }) => {
            console.log("\n\nTAMANHO DO ARRAY DE PALAVRAS = ", wordsArr.length, ` palavra secreta: ${this.secretWord}`)
            const randWordIndex = this.getRandomFromRange(0, wordsArr.length);
            this.secretWord = wordsArr[randWordIndex];
        })
    }

    private getRandomFromRange(min: number, max: number): number { // returns a number between min and max
        return Math.floor(Math.random() * (max - min + 1)) + min; // ChatGPT helped me out with this expression
    }

    guessLetter(letter: string): boolean {
        if (!this.secretWord) {
            throw new Error("No value for instance attribute 'secretWord' defined yet;\nAs SecretWord's class constructor calls an asynchronous function to define a word for attribute 'secretWord', you may want to instanciate a new class instace and verify via setInterval() or other suitable async function the value of returned by instance's getter 'isAllSet' if there's already any valid value set")
        }
            
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

    get isAllSet(): boolean {
        if (this.secretWord) {
            console.log(`PALAVRA SECRETA ---> ${this.secretWord}`) // remover depois
            return true;
        }
        return false;
    }

    revealWord() {
        if (this.environment.isMatchEnded) return this.secretWord
        return '******* [The secret word can only be reveled after the end of the game match]'
    }
}
