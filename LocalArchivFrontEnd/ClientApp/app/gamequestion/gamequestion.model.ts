export class GameQuestion {
    id: number;
    gameId: number;
    questionId: number;

    constructor(id: number, gameId: number, questionId: number) {
        this.id = id;
        this.gameId = gameId;
        this.questionId = questionId;
    }
}