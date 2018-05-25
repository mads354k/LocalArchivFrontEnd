import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../../../../answer/answer.model';
import { RoundQuestion } from '../../../../../roundquestion/roundquestion.model';

@Component({
    selector: '[avalibleanswerrow]',
    templateUrl: './avalibleanswerrow.component.html'
})
export class AvalibleAnswerRowComponent implements OnInit {
    @Input() answer: Answer;

    updateRecord() {
        var inputCheckBox: HTMLInputElement = <HTMLInputElement>document.getElementById('isCorrect');
        
        var questionId = Number(localStorage.getItem('ChangeQuestion'));
        var roundQuestion = new RoundQuestion(0, questionId, this.answer.answerId, inputCheckBox.checked);
        this.http.post('http://localhost:3000/roundquestions', roundQuestion).subscribe(result => {
            window.location.reload();
        }, error => console.log(error));
    }

    constructor(private http: Http) { }

    ngOnInit() {
    }
}

