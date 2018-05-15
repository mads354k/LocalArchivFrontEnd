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

    gameWasSelected(answer: Answer): void {
        console.log('This answer was chosen:' + JSON.stringify(answer));

    }

    constructor(http: Http) {
        this.http = http;
    }

    ngOnInit() {
        this.http.get('').subscribe(result => {
            this.answers = result.json() as Answer[];
        }, error => console.log(error))
    }
}

