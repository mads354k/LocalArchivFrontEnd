import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../answer/answer.model';
import { Question } from '../../question/question.model';
import { RoundQuestion } from '../../roundquestion/roundquestion.model';

@Component({
    selector: 'specificanswerlist',
    templateUrl: './specificanswerlist.component.html'
})
export class SpecificAnswerListComponent implements OnInit{
    list: ListAnswers[] = [];
    answers: Answer[] = []
    roundQuestions: RoundQuestion[] = [];  // THE MODEL 

    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    ngOnInit() {
        var questionId = Number(localStorage.getItem('SelectedQuestion'));
        this.http.get('http://localhost:3000/roundquestions').subscribe(result => {
            var roundQuestions = result.json() as RoundQuestion[];
            for (let roundQuestion of roundQuestions) {
                if (roundQuestion.questionId == questionId) {
                    this.getSpecificAnswer(roundQuestion.answerId);
                    this.roundQuestions.push(roundQuestion);
                }
            }
             //set timer are to avoid null
            setTimeout(() => {
                for (var i = 0; i < this.roundQuestions.length; i++) {
                    var listItem: ListAnswers = { answerId: this.answers[i].answerId, description: this.answers[i].description, answerType: this.answers[i].answerType, picture: this.answers[i].picture, isCorrectAnswer: this.roundQuestions[i].isCorrectAnswer };
                    this.list.push(listItem);
                }
            }, roundQuestions.length*100);

        }, error => console.log(error));
    }

    getSpecificAnswer(answerId: number) {
        this.http.get('http://localhost:3000/answers/' + answerId).subscribe(result => {
            var answer = result.json() as Answer;
            this.answers.push(answer);
        }, error => console.log(error));
    }
}

interface ListAnswers {
    answerId: number;
    description: string;
    answerType: string;
    picture: File;
    isCorrectAnswer: boolean;
}

