import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../answer/answer.model';
import { Question } from '../../question/question.model';

@Component({
    selector: 'addanswerstoquestion',
    templateUrl: './addanswerstoquestion.component.html'
})
export class AnswerToQuestionComponent implements OnInit {
    ngOnInit() {

    }
}