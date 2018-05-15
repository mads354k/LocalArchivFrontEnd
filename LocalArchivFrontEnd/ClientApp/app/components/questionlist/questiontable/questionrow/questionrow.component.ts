import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../../../question/question.model';

@Component({
    selector: '[questionrow]',
    templateUrl: './questionrow.component.html'
})
export class QuestionRowComponent implements OnInit{
    @Input() question: Question;

    constructor() { }

    ngOnInit() {
    }
}

