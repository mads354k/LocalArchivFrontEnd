import {
    Component, Inject, EventEmitter,
    Input,
    Output,
    OnInit
} from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../../question/question.model';

@Component({
    selector: '[questiontable]',
    templateUrl: './questiontable.component.html'
})
export class QuestionTableComponent implements OnInit{
    @Input() questionList: Question[];
    @Output() onQuestionSelected: EventEmitter<Question>;
    private currentQuestion: Question;

    constructor() {
        this.onQuestionSelected = new EventEmitter();
    }

    clicked(question: Question): void {
        this.currentQuestion = question;
        console.log('This question was clicked on:' + JSON.stringify(question));
        this.onQuestionSelected.emit(question);
    }

    isSelected(question: Question): boolean {
        if (!question || !this.currentQuestion) {
            return false;
        }
        return question.questionId === this.currentQuestion.questionId;
    }

    ngOnInit() {
    }
}

