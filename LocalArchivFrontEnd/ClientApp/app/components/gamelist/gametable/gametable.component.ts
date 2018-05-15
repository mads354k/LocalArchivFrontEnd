import {
    Component, Inject, EventEmitter,
    Input,
    Output,
    OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from '../../../game/game.model';

@Component({
    selector: '[gametable]',
    templateUrl: './gametable.component.html'
})
export class GameTableComponent implements OnInit{
    @Input() gameList: Game[];
    @Output() onGameSelected: EventEmitter<Game>;
    private currentGame: Game;

    constructor() {
        this.onGameSelected = new EventEmitter();
    }

    clicked(game: Game): void {
        this.currentGame = game;
        console.log('This game was clicked on:' + JSON.stringify(game));
        this.onGameSelected.emit(game);
    }

    isSelected(game: Game): boolean {
        if (!game || !this.currentGame) {
            return false;
        }
        return game.gameId === this.currentGame.gameId;
    }

    ngOnInit() {
    }
}

