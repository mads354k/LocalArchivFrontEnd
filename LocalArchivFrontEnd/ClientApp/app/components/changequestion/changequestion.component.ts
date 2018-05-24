﻿import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../question/question.model';
import { RoundQuestion } from '../../roundquestion/roundquestion.model';
import { Answer } from '../../answer/answer.model';

@Component({
    selector: 'changequestion',
    templateUrl: './changequestion.component.html',
    styleUrls: ['./changequestion.component.css']
})
export class ChangeQuestionComponent implements OnInit {
    answerType: string;

    constructor(private http:Http) {}

    ngOnInit() {
        
    }

    questionTypePicture() {
        var button1 = document.getElementById('questionT1');
        var button2 = document.getElementById('questionT2');
        if (button1 != null && button2 != null) {
            this.answerType = 'Picture';
            button1.setAttribute('style', 'background-color:dimgrey;');
            button2.setAttribute('style', 'background-color:lawngreen;');
        }
    }

    questionTypeText() {
        var button1 = document.getElementById('questionT1');
        var button2 = document.getElementById('questionT2');
        if (button1 != null && button2 != null) {
            this.answerType = 'Text';
            button2.setAttribute('style', 'background-color:dimgrey;');
            button1.setAttribute('style', 'background-color:lawngreen;');
        }
    }

    cancelChange() {
        localStorage.removeItem('ChangeQuestion');
        window.location.href = 'questionlist';
    }

    acceptChange() {
        var inputD: HTMLInputElement = <HTMLInputElement>document.getElementById('description');
        var inputP: HTMLInputElement = <HTMLInputElement>document.getElementById('picture');

        if (inputP.files != null) {
            var answer = new Answer(0, inputD.value, this.answerType, inputP.files[0])

            this.http.put('http://localhost:3000/questions/' + localStorage.getItem('ChangeQuestion'), answer).subscribe(result => {
                localStorage.removeItem('ChangeQuestion');
                window.location.href = 'questionlist';
            }, error => console.log(error));
        }
    }
}