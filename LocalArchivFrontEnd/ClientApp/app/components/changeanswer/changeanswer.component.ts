import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../../answer/answer.model';

@Component({
    selector: 'changeanswer',
    templateUrl: './changeanswer.component.html',
    styleUrls: ['./changeanswer.component.css']
})
export class ChangeAnswerComponent implements OnInit {
    answerType: string;

    constructor(private http:Http) {}

    ngOnInit() {
        var inputD: HTMLInputElement = <HTMLInputElement>document.getElementById('description');
        var inputP: HTMLInputElement = <HTMLInputElement>document.getElementById('picture');
        var answerId = localStorage.getItem('ChangeAnswer');
        this.http.get('http://localhost:3000/answers/' + answerId).subscribe(result => {
            var answer = result.json() as Answer;
            inputD.value = answer.description;
            // TODO: add file
            if (answer.answerType === 'Text') {
                this.answerTypeText();
            } else {
                this.answerTypePicture();
            }
        }, error => console.log(error));
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

    cancelChange() {
        localStorage.removeItem('ChangeAnswer');
        window.location.href = 'answerlist';
    }

    acceptChange() {
        var inputD: HTMLInputElement = <HTMLInputElement>document.getElementById('description');
        var inputP: HTMLInputElement = <HTMLInputElement>document.getElementById('picture');

        if (inputP.files != null) {
            var answer = new Answer(0, inputD.value, this.answerType, inputP.files[0])

            this.http.put('http://localhost:3000/answers/' + localStorage.getItem('ChangeAnswer'), answer).subscribe(result => {
                localStorage.removeItem('ChangeAnswer');
                window.location.href = 'answerlist';
            }, error => console.log(error));
        }
    }
}