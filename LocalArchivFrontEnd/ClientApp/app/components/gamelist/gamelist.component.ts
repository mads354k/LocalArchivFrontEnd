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
        if (localStorage.getItem('SelectedGame') != null) {
            localStorage.removeItem('SelectedGame');
        }
        localStorage.setItem('SelectedGame', game.gameId + '');
        window.location.href = '';
    }

    constructor(http: Http) {
        this.http = http;
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/games').subscribe(result => {
            this.games = result.json() as Game[];
        }, error => console.log(error))
    }
}

