import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../../../answer/answer.model';

@Component({
    selector: '[answerrow]',
    templateUrl: './answerrow.component.html'
})
export class AnswerRowComponent implements OnInit{
    @Input() answer: Answer;

    constructor() { }

    ngOnInit() {
    }
}

