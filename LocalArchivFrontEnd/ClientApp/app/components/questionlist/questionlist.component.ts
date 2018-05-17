import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../question/question.model';

@Component({
    selector: 'questionlist',
    templateUrl: './questionlist.component.html'
})
export class QuestionListComponent implements OnInit{
    questions: Question[] = [];  // THE MODEL 
    private http: Http;

    questionWasSelected(question: Question): void {
        console.log('This question was chosen:' + JSON.stringify(question));
        if (localStorage.getItem('ActiveQuestion') != null) {
            localStorage.removeItem('ActiveQuestion');
        }
        localStorage.setItem('ActiveQuestion', question.questionId + '');
        alert('Question selected');
    }

    constructor(http: Http) {
        this.http = http;
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/questions').subscribe(result => {
            this.questions = result.json() as Question[];
        }, error => console.log(error))
    }
}

