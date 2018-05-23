import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../../../question/question.model';
import { GameQuestion } from '../../../../gamequestion/gamequestion.model';
import { RoundQuestion } from '../../../../roundquestion/roundquestion.model';

@Component({
    selector: '[questionrow]',
    templateUrl: './questionrow.component.html'
})
export class QuestionRowComponent implements OnInit{
    @Input() question: Question;

    updateRecord() {

    }

    removeRecord() {
        localStorage.setItem('SelectedQuestion', 'button');
        this.http.get('http://localhost:3000/gamequestions').subscribe(result => {
            var gottenList = result.json() as GameQuestion[];
            for (let item of gottenList) {
                if (item.questionId == this.question.questionId) {
                    this.http.delete('http://localhost:3000/gamequestions/' + item.id).subscribe(result => {

                    }, error => console.log(error));
                }
            }
            this.http.get('http://localhost:3000/roundquestions').subscribe(result => {
                var gottenList = result.json() as RoundQuestion[];
                for (let item of gottenList) {
                    if (item.questionId == this.question.questionId) {
                        this.http.delete('http://localhost:3000/roundquestions/' + item.id).subscribe(result => {

                        }, error => console.log(error));
                    }
                }
                this.http.delete('http://localhost:3000/questions/' + this.question.questionId).subscribe(result => {
                    window.location.reload();
                }, error => console.log(error));
            }, error => console.log(error));
        }, error => console.log(error));
    }

    constructor(private http: Http) { }

    ngOnInit() {
    }
}

