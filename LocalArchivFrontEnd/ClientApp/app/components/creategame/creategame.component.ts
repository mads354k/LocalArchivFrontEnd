import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from '../../game/game.model';

@Component({
    selector: 'creategame',
    templateUrl: './creategame.component.html'
})
export class CreateGameComponent implements OnInit{
    private http: Http;

    constructor(http: Http) { this.http = http; }

    ngOnInit() {
    }

    onSubmit(form: any) {
        var game = new Game(0, form.name, form.date);
        this.http.post('http://localhost:3000/games', game).subscribe(result => {
            var game = result.json() as Game;
            if (localStorage.getItem('ActiveGame') != null) {
                localStorage.removeItem('ActiveGame');
            }
            localStorage.setItem('ActiveGame', game.gameId + '');
            alert('Game created and selected');
        }, error => console.error(error)); 
    }
}
