import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../../../../question/question.model';
import { GameQuestion } from '../../../../../gamequestion/gamequestion.model';

@Component({
    selector: '[presentquestionrow]',
    templateUrl: './presentquestionrow.component.html'
})
export class PresentQuestionRowComponent implements OnInit {
    @Input() question: Question;

    updateRecord() {
        var gameId = Number(localStorage.getItem('ChangeGame'));

        this.http.get('http://localhost:3000/gamequestions').subscribe(result => {
            var gameQuestions = result.json() as GameQuestion[];
            var gameQuestionId;
            for (let gameQuestion of gameQuestions) {
                if (gameQuestion.gameId == gameId && gameQuestion.questionId == this.question.questionId) {
                    gameQuestionId = gameQuestion.id;
                    break;
                }
            }
            this.http.delete('http://localhost:3000/gamequestions/' + gameQuestionId).subscribe(result => {
                window.location.reload();
            }, error => console.log(error));
        }, error => console.log(error));
    }

    constructor(private http: Http) { }

    ngOnInit() {
    }
}

