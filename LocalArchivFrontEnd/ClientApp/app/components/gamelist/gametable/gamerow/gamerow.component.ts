import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from '../../../../game/game.model';

@Component({
    selector: '[gamerow]',
    templateUrl: './gamerow.component.html'
})
export class GameRowComponent implements OnInit{
    @Input() game: Game;

    constructor() { }

    ngOnInit() {
    }
}

