import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../../question/question.model';
import { GameQuestion } from '../../../gamequestion/gamequestion.model';

@Component({
    selector: 'presentquestionlist',
    templateUrl: './presentquestionlist.component.html',
})
export class PresentQuestionListComponent {
    questions: Question[] = [];

    constructor(private http: Http) { }

    ngOnInit() {
        var gameId = Number(localStorage.getItem('ChangeGame'));
        this.http.get('http://localhost:3000/gamequestions').subscribe(result => {
            var gameQuestions = result.json() as GameQuestion[];
            var questionIds: number[] = [];
            for (let gameQuestion of gameQuestions) {
                if (gameQuestion.gameId == gameId) {
                    questionIds.push(gameQuestion.questionId);
                }
            }
            for (let questionId of questionIds) {
                this.http.get('http://localhost:3000/questions/' + questionId).subscribe(result => {
                    var question = result.json() as Question;
                    this.questions.push(question);
                }, error => console.log(error));
            }
        }, error => console.log(error));
    }
}