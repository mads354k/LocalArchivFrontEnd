export class Answer {
    answerId: number;
    description: string;
    answerType: string;
    picture: File;

    constructor(id: number, description: string, answerType: string, picture: File) {
        this.answerId = id;
        this.description = description;
        this.answerType = answerType;
        this.picture = picture;
    }
}