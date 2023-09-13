export type LetterMatches = {total: number, indexes: Array<number>};

export default class SecretWord {
    private secretWord: string;
    guessedLetters: number = 0;

    get length(): number {
        return this.secretWord.length;
    };

    get wasGuessed(): boolean {
        return this.secretWord.length === this.guessedLetters;
    }

    constructor(difficulty: number) { //use enums aqui
        this.secretWord = this.getSecretWord(difficulty);
    }

    private getSecretWord(difficulty: number): string {
        return "";
    }

    guessLetter(letter: string): LetterMatches {
        const matches: LetterMatches = {total: 0, indexes: []};
        let letterIndex: number;

        while ((letterIndex = this.secretWord.indexOf(letter)) != -1) {
            matches.indexes.push(letterIndex);
            this.guessedLetters++;
        }

        return matches;
    }
}
