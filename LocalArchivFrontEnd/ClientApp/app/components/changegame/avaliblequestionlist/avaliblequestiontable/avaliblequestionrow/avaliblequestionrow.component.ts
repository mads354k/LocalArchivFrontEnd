import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../../../../question/question.model';
import { GameQuestion } from '../../../../../gamequestion/gamequestion.model';

@Component({
    selector: '[avaliblequestionrow]',
    templateUrl: './avaliblequestionrow.component.html'
})
export class AvalibleQuestionRowComponent implements OnInit {
    @Input() question: Question;

    updateRecord() {

    }

    constructor(private http: Http) { }

    ngOnInit() {
    }
}

