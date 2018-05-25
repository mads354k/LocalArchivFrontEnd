import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../../question/question.model';
import { GameQuestion } from '../../../gamequestion/gamequestion.model';

@Component({
    selector: 'presentquestionlist',
    templateUrl: './presentquestionlist.component.html',
})
export class PresentQuestionListComponent {
    questions: Question[];

    constructor(private http: Http) { }

    ngOnInit() {

    }
}