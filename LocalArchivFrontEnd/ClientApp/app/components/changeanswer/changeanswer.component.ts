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
}