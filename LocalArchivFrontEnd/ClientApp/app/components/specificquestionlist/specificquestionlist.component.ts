import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../question/question.model';
import { GameQuestion } from '../../gamequestion/gamequestion.model';

@Component({
    selector: 'specificquestionlist',
    templateUrl: './specificquestionlist.component.html'
})
export class SpecificQuestionListComponent implements OnInit{
    questions: Question[] = [];  // THE MODEL 
    private http: Http;

    questionWasSelected(question: Question): void {
        console.log('This question was chosen:' + JSON.stringify(question));
        if (localStorage.getItem('SelectedQuestion') != null) {
            localStorage.removeItem('SelectedQuestion');
        }
        localStorage.setItem('SelectedQuestion', question.questionId + '');
        window.location.href = 'specificanswerlist';
    }

    constructor(http: Http) {
        this.http = http;
    }

    ngOnInit() {
        var gameId: number = Number(localStorage.getItem('SelectedGame'));
        this.http.get('http://localhost:3000/gamequestions').subscribe(result => {
            var gameQuestions = result.json() as GameQuestion[];
            for (let gameQuestion of gameQuestions) {
                if (gameId == gameQuestion.gameId) {
                    this.getSpecificQuestion(gameQuestion.questionId);
                }
            }
        }, error => console.log(error))
    }

    getSpecificQuestion(questionId: number) {
        this.http.get('http://localhost:3000/questions/' + questionId).subscribe(result => {
            var question = result.json() as Question;
            this.questions.push(question);
        }, error => console.log(error));
    }
}

