import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../../answer/answer.model';
import { RoundQuestion } from '../../../roundquestion/roundquestion.model';
import { AnswerListItem } from '../../../answerlistitem/answerlistitem.model';

@Component({
    selector: 'presentanswerlist',
    templateUrl: './presentanswerlist.component.html',
})
export class PresentAnswerListComponent {
    answers: AnswerListItem[] = [];

    constructor(private http: Http) { }

    ngOnInit() {
        var questionId = Number(localStorage.getItem('ChangeQuestion'));
        this.http.get('http://localhost:3000/roundquestions').subscribe(result => {
            var roundQuestions = result.json() as RoundQuestion[];
            var answerIds: number[] = [];
            var isCorrect: boolean[] = [];
            for (let roundQuestion of roundQuestions) {
                if (roundQuestion.questionId == questionId) {
                    answerIds.push(roundQuestion.answerId);
                    isCorrect.push(roundQuestion.isCorrectAnswer);
                }
            }
            for (var i = 0; i < answerIds.length;i++) {
                this.http.get('http://localhost:3000/answers/' + answerIds[i]).subscribe(result => {
                    var answer = result.json() as Answer;
                    var listItem = new AnswerListItem(answer.answerId, answer.description, answer.answerType, answer.picture, isCorrect[i]);
                    this.answers.push(listItem);
                }, error => console.log(error));
            }
        }, error => console.log(error));
    }
}