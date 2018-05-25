import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../../../../answer/answer.model';
import { RoundQuestion } from '../../../../../roundquestion/roundquestion.model';

@Component({
    selector: '[presentanswerrow]',
    templateUrl: './presentanswerrow.component.html'
})
export class PresentAnswerRowComponent implements OnInit {
    @Input() answer: Answer;

    updateRecord() {
        var questionId = Number(localStorage.getItem('ChangeQuestion'));

        this.http.get('http://localhost:3000/roundquestions').subscribe(result => {
            var roundQuestions = result.json() as RoundQuestion[];
            var roundQuestionId;
            for (let roundQuestion of roundQuestions) {
                if (roundQuestion.questionId == questionId && roundQuestion.answerId == this.answer.answerId) {
                    roundQuestionId = roundQuestion.id;
                    break;
                }
            }
            this.http.delete('http://localhost:3000/roundquestions/' + roundQuestionId).subscribe(result => {
                window.location.reload();
            }, error => console.log(error));
        }, error => console.log(error));
    }

    constructor(private http: Http) { }

    ngOnInit() {
        var questionId = Number(localStorage.getItem('ChangeQuestion'));
        var inputCheckBox: HTMLInputElement = <HTMLInputElement>document.getElementById('isCorrect'); 

        this.http.get('http://localhost:3000/roundquestions').subscribe(result => {
            var roundQuestions = result.json() as RoundQuestion[];
            for (let roundQuestion of roundQuestions) {
                if (roundQuestion.questionId == questionId && roundQuestion.answerId == this.answer.answerId) {
                    inputCheckBox.checked = roundQuestion.isCorrectAnswer;
                    break;
                }
            }
        }, error => console.log(error));
    }
}

