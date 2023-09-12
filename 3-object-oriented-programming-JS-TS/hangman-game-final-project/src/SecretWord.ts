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
}