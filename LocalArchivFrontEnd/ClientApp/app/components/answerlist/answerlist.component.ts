import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../answer/answer.model';

@Component({
    selector: 'answerlist',
    templateUrl: './answerlist.component.html'
})
export class AnswerListComponent implements OnInit{
    answers: Answer[] = [];  // THE MODEL 
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/answers').subscribe(result => {
            this.answers = result.json() as Answer[];
        }, error => console.log(error))
    }
}

