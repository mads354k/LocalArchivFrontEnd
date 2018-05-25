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

    }
}