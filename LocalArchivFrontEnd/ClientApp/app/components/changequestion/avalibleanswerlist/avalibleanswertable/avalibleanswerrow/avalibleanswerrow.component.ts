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
        var gameId = Number(localStorage.getItem('ChangeGame'));
        var gameQuestion = new GameQuestion(0, gameId, this.question.questionId);
        this.http.post('http://localhost:3000/gamequestions', gameQuestion).subscribe(result => {
            window.location.reload();
        }, error => console.log(error));
    }

    constructor(private http: Http) { }

    ngOnInit() {
    }
}

