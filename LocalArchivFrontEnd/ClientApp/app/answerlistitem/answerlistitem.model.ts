export class AnswerListItem{
    answerId: number;
    description: string;
    answerType: string;
    picture: File;
    isCorrect: boolean;

    constructor(id: number, description: string, answerType: string, picture: File, isCorrect: boolean) {
        this.answerId = id;
        this.description = description;
        this.answerType = answerType;
        this.picture = picture;
        this.isCorrect = isCorrect;
    }
}