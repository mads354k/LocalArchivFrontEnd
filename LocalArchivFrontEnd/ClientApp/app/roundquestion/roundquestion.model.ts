export class RoundQuestion {
    id: number;
    questionId: number;
    answerId: number;
    isCorrectAnswer: boolean;

    constructor(id: number, questionId: number, answerId: number, isCorrectAnswer:boolean) {
        this.id = id;
        this.questionId = questionId;
        this.answerId = answerId;
        this.isCorrectAnswer = isCorrectAnswer;
    }
}