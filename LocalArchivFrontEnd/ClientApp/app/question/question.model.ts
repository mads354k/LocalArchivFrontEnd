export class Question {
    questionId: number;
    description: string;
    questionType: string;
    picture: File;
    hint: string;

    constructor(id: number, description: string, questionType: string, picture: File, hint: string) {
        this.questionId = id;
        this.description = description;
        this.questionType = questionType;
        this.picture = picture;
        this.hint = hint;
    }
}