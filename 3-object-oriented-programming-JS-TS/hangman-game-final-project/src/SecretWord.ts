// Não consegui terminar por completo ainda

export default class SecretWord {
    private secretWord: string;
    guessedLetters: number = 0;
    previousLetterGuessings: Array<string> = [];

    get length(): number {
        return this.secretWord.length;
    };

    get wasGuessed(): boolean {
        return this.secretWord.length === this.guessedLetters;
    }

    constructor(difficulty: number) { //use enums aqui
        this.secretWord = this.getSecretWord(difficulty);
    }

    private getSecretWord(difficulty: number): string { // método para escolher aleatóriamente uma palavra de um dos arquivos .json dentro de /words
        return "";
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
