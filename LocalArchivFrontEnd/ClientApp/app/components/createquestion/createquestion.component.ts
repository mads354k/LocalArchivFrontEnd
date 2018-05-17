import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../question/question.model';

@Component({
    selector: 'createquestion',
    templateUrl: './createquestion.component.html'
})
export class CreateQuestionComponent implements OnInit{
    private http: Http;

    constructor(http: Http) { this.http = http; }

    ngOnInit() {
    }

    onSubmit(form: any) {
        var question = new Question(0, form.description, form.questionType, form.picture, form.hint);
        this.http.post('http://localhost:3000/questions', question).subscribe(result => {
            var question = result.json() as Question;
            if (localStorage.getItem('ActiveQuestion') != null) {
                localStorage.removeItem('ActiveQuestion');
            }
            localStorage.setItem('ActiveQuestion', question.questionId + '');
            alert('Question created and selected');
        }, error => console.error(error));
    }
}
