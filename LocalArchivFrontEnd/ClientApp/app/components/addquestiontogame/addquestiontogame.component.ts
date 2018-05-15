import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from '../../game/game.model';
import { Question } from '../../question/question.model';

@Component({
    selector: 'addquestiontogame',
    templateUrl: './addquestiontogame.component.html'
})
export class QuestionToGameComponent implements OnInit {
    ngOnInit() {

    }
}