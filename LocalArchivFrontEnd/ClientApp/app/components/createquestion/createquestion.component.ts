import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../question/question.model';
import { Answer } from '../../answer/answer.model';
import { GameQuestion } from '../../gamequestion/gamequestion.model';
import { RoundQuestion } from '../../roundquestion/roundquestion.model';

@Component({
    selector: 'createquestion',
    templateUrl: './createquestion.component.html',
    styleUrls: ['./createquestion.component.css']
})
export class CreateQuestionComponent implements OnInit{
    private http: Http;
    questionsCreated: number;
    questionType: string;
    answerType: string;

    constructor(http: Http) { this.http = http; }

    questionTypePicture() {
        var button1 = document.getElementById('questionT1');
        var button2 = document.getElementById('questionT2');
        if (button1 != null && button2 != null) {
            this.questionType = 'Picture';
            button1.setAttribute('style', 'background-color:dimgrey;');
            button2.setAttribute('style', 'background-color:lawngreen;');
        }
    }

    questionTypeText() {
        var button1 = document.getElementById('questionT1');
        var button2 = document.getElementById('questionT2');
        if (button1 != null && button2 != null) {
            this.questionType = 'Text';
            button2.setAttribute('style', 'background-color:dimgrey;');
            button1.setAttribute('style', 'background-color:lawngreen;');
        }
    }

    answerTypePicture() {
        var button1 = document.getElementById('answerT1');
        var button2 = document.getElementById('answerT2');
        if (button1 != null && button2 != null) {
            this.answerType = 'Picture';
            button1.setAttribute('style', 'background-color:dimgrey;');
            button2.setAttribute('style', 'background-color:lawngreen;');
        }
    }

    answerTypeText() {
        var button1 = document.getElementById('answerT1');
        var button2 = document.getElementById('answerT2');
        if (button1 != null && button2 != null) {
            this.answerType = 'Text';
            button2.setAttribute('style', 'background-color:dimgrey;');
            button1.setAttribute('style', 'background-color:lawngreen;');
        }
    }

    ngOnInit() {
        var gameId: number = Number(localStorage.getItem('ActiveGame'));
        this.http.get('http://localhost:3000/gamequestions').subscribe(result => {
            var gameQuestions = result.json() as GameQuestion[];
            this.questionsCreated = 0;
            for (let gameQuestion of gameQuestions) {
                if (gameQuestion.gameId == gameId) {
                    this.questionsCreated += 1;
                }
            }
        }, error => console.log(error));
        this.questionType = 'Text';
        this.answerType = 'Text';
    }

    cancelCreation() {
        this.http.get('http://localhost:3000/gamequestions').subscribe(result => {
            var gameQuestionList = result.json() as GameQuestion[];
            var questionsToGame: GameQuestion[] = [];
            for (let gameQuestion of gameQuestionList) {
                if (gameQuestion.gameId == Number(localStorage.getItem('ActiveGame'))) {
                    questionsToGame.push(gameQuestion);
                    this.http.delete('http://localhost:3000/gamequestions/' + gameQuestion.id).subscribe(result => {

                    }, error => console.log(error));
                }
            }
            this.http.get('http://localhost:3000/roundquestions').subscribe(result => {
                var roundQuestionList = result.json() as RoundQuestion[];
                var answerToQuestion: RoundQuestion[] = [];
                for (let roundQuestion of roundQuestionList) {
                    for (let qtg of questionsToGame) {
                        if (roundQuestion.questionId == qtg.questionId) {
                            answerToQuestion.push(roundQuestion);
                            this.http.delete('http://localhost:3000/roundquestions/' + roundQuestion.id).subscribe(result => {

                            }, error => console.log(error));
                        }
                    }
                }
                for (let atq of answerToQuestion) {
                    this.http.delete('http://localhost:3000/answers/' + atq.answerId).subscribe(result => {

                    }, error => console.log(error));
                }
                for (let qtg of questionsToGame) {
                    this.http.delete('http://localhost:3000/questions/' + qtg.questionId).subscribe(result => {

                    }, error => console.log(error));
                }
                this.http.delete('http://localhost:3000/games/' + localStorage.getItem('ActiveGame')).subscribe(result => {

                }, error => console.log(error));
                window.location.href = 'home';
            }, error => console.log(error));
        }, error => console.log(error));
    }

    addToGame() {
        var description = <HTMLInputElement>document.getElementById('questionB');
        var picture = <HTMLInputElement>document.getElementById('questionP');
        var hint = <HTMLInputElement>document.getElementById('questionH');

        if (description != null && picture.files != null && hint != null) {
            var file = picture.files[0];
            var question = new Question(0, description.value, this.questionType, file, hint.value);
            this.http.post('http://localhost:3000/questions', question).subscribe(result => {
                var question = result.json() as Question;
                if (localStorage.getItem('ActiveQuestion') != null) {
                    localStorage.removeItem('ActiveQuestion');
                }
                localStorage.setItem('ActiveQuestion', question.questionId + '');

                var inputB1 = <HTMLInputElement>document.getElementById('answerB1');
                var inputP1 = <HTMLInputElement>document.getElementById('answerP1');
                var inputC1 = <HTMLInputElement>document.getElementById('answerC1');

                setTimeout(() => { this.createAndAddAnswer(inputB1, inputP1, inputC1); }, 500);

                var inputB2 = <HTMLInputElement>document.getElementById('answerB2');
                var inputP2 = <HTMLInputElement>document.getElementById('answerP2');
                var inputC2 = <HTMLInputElement>document.getElementById('answerC2');

                setTimeout(() => { this.createAndAddAnswer(inputB2, inputP2, inputC2); }, 1000);

                var inputB3 = <HTMLInputElement>document.getElementById('answerB3');
                var inputP3 = <HTMLInputElement>document.getElementById('answerP3');
                var inputC3 = <HTMLInputElement>document.getElementById('answerC3');

                setTimeout(() => { this.createAndAddAnswer(inputB3, inputP3, inputC3); }, 1500);

                var inputB4 = <HTMLInputElement>document.getElementById('answerB4');
                var inputP4 = <HTMLInputElement>document.getElementById('answerP4');
                var inputC4 = <HTMLInputElement>document.getElementById('answerC4');

                setTimeout(() => { this.createAndAddAnswer(inputB4, inputP4, inputC4); }, 2000);

                var gameQuestion = new GameQuestion(0, Number(localStorage.getItem('ActiveGame')), Number(localStorage.getItem('ActiveQuestion')));
                this.http.post('http://localhost:3000/gamequestions', gameQuestion).subscribe(result => {
                    setTimeout(() => { window.location.reload(); }, 3000);
                }, error => console.log(error));
            }, error => console.error(error));
        }    
    }

    createAndAddAnswer(inputB: HTMLInputElement, inputP: HTMLInputElement, inputC: HTMLInputElement) {
        if (inputB != null && inputC != null && inputP.files != null) {
            var file = inputP.files[0];
            var answer = new Answer(0, inputB.value, this.answerType, file);
            this.http.post('http://localhost:3000/answers', answer).subscribe(result => {
                var answer = result.json() as Answer;
                var roundQuestion = new RoundQuestion(0, Number(localStorage.getItem('ActiveQuestion')), answer.answerId, inputC.checked);
                this.http.post('http://localhost:3000/roundquestions', roundQuestion).subscribe(result => {

                }, error => console.log(error));
            }, error => console.error(error));           
        }
    }
}
