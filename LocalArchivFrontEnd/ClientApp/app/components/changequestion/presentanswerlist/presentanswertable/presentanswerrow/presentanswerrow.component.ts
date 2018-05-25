import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { AnswerListItem } from '../../../../../answerlistitem/answerlistitem.model';
import { RoundQuestion } from '../../../../../roundquestion/roundquestion.model';

@Component({
    selector: '[presentanswerrow]',
    templateUrl: './presentanswerrow.component.html'
})
export class PresentAnswerRowComponent implements OnInit {
    @Input() answer: AnswerListItem;

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
        var inputCheckBox: HTMLInputElement = <HTMLInputElement>document.getElementById('Correct'); 

        inputCheckBox.checked = this.answer.isCorrect;
    }
}

