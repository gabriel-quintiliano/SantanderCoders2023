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

    constructor(difficulty: difficultyRatings, environment: StandaloneGameMatch) { //use enums aqui

        const wordLength = this.translateDificultyIntoWordLength(difficulty)
        console.log(`Palavra secreta terá ${wordLength} letras`)
        this.initSecretWord(wordLength);
        this.environment = environment;

    }

    private initSecretWord(desiredWorLength: number): void { // método para escolher aleatóriamente uma palavra de um dos arquivos .json dentro de /words
        import(`./../words/${desiredWorLength}-letter-words.json`, {assert: {type: "json"}})
        .then(({ default: wordsArr }) => {
            const randWordIndex = this.getRandomFromRange(0, wordsArr.length);
            this.secretWord = wordsArr[randWordIndex];
        })
    }

    private getRandomFromRange(min: number, max: number): number { // returns a number between min and max
        return Math.floor(Math.random() * (max - min + 1)) + min; // ChatGPT helped me out with this expression
    }

    guessLetter(letter: string): number {
        if (!this.secretWord) {
            throw new Error("No value for instance attribute 'secretWord' defined yet;\nAs SecretWord's class constructor calls an asynchronous function to define a word for attribute 'secretWord', you may want to instanciate a new class instace and verify via setInterval() or other suitable async function the value of returned by instance's getter 'isAllSet' if there's already any valid value set")
        }
            
        if (this.previousLetterGuessings.includes(letter)){
            console.log(`Você já tentou a digitou '${letter}' como palpite, tente outra letra.`)
            return -1;
        } else {
            this.previousLetterGuessings.push(letter)
        }

        let correctMatches = 0;
        let letterIndex: number = -1; // this ensures that the call below starts looking for a match from index 0 initially (-1 + 1 = 0)

        while ((letterIndex = this.secretWord.indexOf(letter, letterIndex + 1)) != -1) {
            correctMatches++;
        }

        this.guessedLetters += correctMatches;

        return correctMatches;
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

    private translateDificultyIntoWordLength(difficulty: difficultyRatings): number {
        let wordLength: number;
        console.log(`dificuldade selecionada = ${difficulty}`)
        switch (difficulty) {
            case difficultyRatings.easy: // easy word --> 3 up to 5 letters
                wordLength = this.getRandomFromRange(3, 5);
                break;
            case difficultyRatings.medium: // medium word --> 6 up to 13 letters
                wordLength = this.getRandomFromRange(6,13);
                break;
            case difficultyRatings.hard: // hard word --> 14 up to 18 letters
                wordLength = this.getRandomFromRange(14,18);
                break;
            case difficultyRatings.veryHard: // very hard word --> 19 up to 23 letters
                wordLength = this.getRandomFromRange(19,23);
                break;
        }

        return wordLength;
    }
}
