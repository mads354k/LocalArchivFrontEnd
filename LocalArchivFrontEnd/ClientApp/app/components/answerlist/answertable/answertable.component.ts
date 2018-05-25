import {
    Component, Inject, EventEmitter,
    Input,
    Output,
    OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../../answer/answer.model';

@Component({
    selector: '[answertable]',
    templateUrl: './answertable.component.html'
})
export class AnswerTableComponent implements OnInit{
    @Input() answerList: Answer[];

    constructor() {}

    ngOnInit() {
    }
}

