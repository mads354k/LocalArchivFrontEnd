import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../../answer/answer.model';
import { RoundQuestion } from '../../../roundquestion/roundquestion.model';

@Component({
    selector: 'presentanswerlist',
    templateUrl: './presentanswerlist.component.html',
})
export class PresentAnswerListComponent {
    answers: Answer[] = [];

    constructor(private http: Http) { }

    ngOnInit() {
        var questionId = Number(localStorage.getItem('ChangeQuestion'));
        this.http.get('http://localhost:3000/roundquestions').subscribe(result => {
            var roundQuestions = result.json() as RoundQuestion[];
            var answerIds: number[] = [];
            for (let roundQuestion of roundQuestions) {
                if (roundQuestion.questionId == questionId) {
                    answerIds.push(roundQuestion.answerId);
                }
            }
            for (let answerId of answerIds) {
                this.http.get('http://localhost:3000/answers/' + answerId).subscribe(result => {
                    var answer = result.json() as Answer;
                    this.answers.push(answer);
                }, error => console.log(error));
            }
        }, error => console.log(error));
    }
}