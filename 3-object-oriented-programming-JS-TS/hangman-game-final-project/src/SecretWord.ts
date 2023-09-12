type LetterMatches = {total: Number, indexes: Array<number>};

class secretWord {
    private secretWord: string;
    get length() {
        return this.secretWord.length;
    };

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
        }

        return matches;
    }
}
