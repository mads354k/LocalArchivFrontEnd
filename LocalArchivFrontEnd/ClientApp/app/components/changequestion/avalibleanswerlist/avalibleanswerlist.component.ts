import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../../answer/answer.model';

@Component({
    selector: 'avalibleanswerlist',
    templateUrl: './avalibleanswerlist.component.html',
})
export class AvalibleAnswerListComponent {
    answers: Answer[];

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('http://localhost:3000/answers').subscribe(result => {
            this.answers = result.json() as Answer[];
        }, error => console.log(error));
    }
}