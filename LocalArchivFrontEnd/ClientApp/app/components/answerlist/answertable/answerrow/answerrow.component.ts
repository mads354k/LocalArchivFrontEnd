import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../../../answer/answer.model';
import { RoundQuestion } from '../../../../roundquestion/roundquestion.model';

@Component({
    selector: '[answerrow]',
    templateUrl: './answerrow.component.html'
})
export class AnswerRowComponent implements OnInit{
    @Input() answer: Answer;

    updateRecord() {
        if (localStorage.getItem('ChangeAnswer') != null) {
            localStorage.removeItem('ChangeAnswer');
        }
        localStorage.setItem('ChangeAnswer', this.answer.answerId + '');
        window.location.href = 'changeanswer';
    }

    removeRecord() {
        this.http.get('http://localhost:3000/roundquestions').subscribe(result => {
            var gottenList = result.json() as RoundQuestion[];
            for (let item of gottenList) {
                if (item.answerId == this.answer.answerId) {
                    this.http.delete('http://localhost:3000/roundquestions/' + item.id).subscribe(result => {

                    }, error => console.log(error));
                }
            }
            this.http.delete('http://localhost:3000/answers/' + this.answer.answerId).subscribe(result => {
                setTimeout(window.location.reload(), 3000);
            }, error => console.log(error));
        }, error => console.log(error));
    }

    constructor(private http: Http) { }

    ngOnInit() {
    }
}

