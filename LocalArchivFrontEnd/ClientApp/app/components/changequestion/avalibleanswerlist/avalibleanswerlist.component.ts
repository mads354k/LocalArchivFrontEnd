import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../../question/question.model';

@Component({
    selector: 'avaliblequestionlist',
    templateUrl: './avaliblequestionlist.component.html',
})
export class AvalibleQuestionListComponent {
    questions: Question[];

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('http://localhost:3000/questions').subscribe(result => {
            this.questions = result.json() as Question[];
        }, error => console.log(error));
    }
}