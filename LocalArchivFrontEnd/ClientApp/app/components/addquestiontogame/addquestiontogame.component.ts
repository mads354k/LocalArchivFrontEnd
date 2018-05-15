import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { GameQuestion } from '../../gamequestion/gamequestion.model';

@Component({
    selector: 'addquestiontogame',
    templateUrl: './addquestiontogame.component.html'
})
export class QuestionToGameComponent implements OnInit {
    private http: Http;

    constructor(http: Http) { this.http = http; }

    ngOnInit() {

    }

    addQuestionToGame() {
        if (localStorage.getItem('ActiveGame') != null && localStorage.getItem('ActiveQuestion') != null) {
            var gameId: number = Number(localStorage.getItem('ActiveGame'));
            var questionId: number = Number(localStorage.getItem('ActiveQuestion'));
            var gameQuestion = new GameQuestion(0, gameId, questionId);
            this.http.post('', gameQuestion).subscribe(result => {
                alert('Question added to game');
            }, error => console.log(error));
        } else {
            alert('Not everythings is selected correctly');
        }
    }
}