import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../../../question/question.model';

@Component({
    selector: '[specificquestionrow]',
    templateUrl: './specificquestionrow.component.html'
})
export class SpecificQuestionRowComponent implements OnInit{
    @Input() question: Question;

    constructor() { }

    ngOnInit() {
    }
}

