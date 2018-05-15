import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from '../../game/game.model';

@Component({
    selector: 'gamelist',
    templateUrl: './gamelist.component.html'
})
export class GameListComponent implements OnInit{
    games: Game[] = [];  // THE MODEL 
    private http: Http;

    gameWasSelected(game: Game): void {
        console.log('This game was chosen:' + JSON.stringify(game));
        if (localStorage.getItem('ActiveGame') != null) {
            localStorage.removeItem('ActiveGame');
        }
        localStorage.setItem('ActiveGame', game.gameId + '');
        alert('Game selected');
    }

    constructor(http: Http) {
        this.http = http;
    }

    ngOnInit() {
        this.http.get('').subscribe(result => {
            this.games = result.json() as Game[];
        }, error => console.log(error))
    }
}

