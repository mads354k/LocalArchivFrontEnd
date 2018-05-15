import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../answer/answer.model';

@Component({
    selector: 'createanswer',
    templateUrl: './createanswer.component.html'
})
export class CreateAnswerComponent implements OnInit{
    private http: Http;

    constructor(http: Http) { this.http = http; }

    ngOnInit() {
    }

    onSubmit(form: any) {
        var answer = new Answer(0, form.description, form.answerType, form.picture);
        this.http.post('', answer).subscribe(result => {
            alert('Answer created');
        }, error => console.error(error));
    }
}

