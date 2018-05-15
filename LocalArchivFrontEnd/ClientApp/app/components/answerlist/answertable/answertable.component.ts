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
    @Output() onAnswerSelected: EventEmitter<Answer>;
    private currentAnswer: Answer;

    constructor() {
        this.onAnswerSelected = new EventEmitter();
    }

    clicked(answer: Answer): void {
        this.currentAnswer = answer;
        console.log('This answer was clicked on:' + JSON.stringify(answer));
        this.onAnswerSelected.emit(answer);
    }

    isSelected(answer: Answer): boolean {
        if (!answer || !this.currentAnswer) {
            return false;
        }
        return answer.answerId === this.currentAnswer.answerId;
    }

    ngOnInit() {
    }
}

