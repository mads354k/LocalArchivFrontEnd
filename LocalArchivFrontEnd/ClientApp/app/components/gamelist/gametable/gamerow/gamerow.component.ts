import { Component, Inject, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from '../../../../game/game.model';
import { GameQuestion } from '../../../../gamequestion/gamequestion.model';

@Component({
    selector: '[gamerow]',
    templateUrl: './gamerow.component.html'
})
export class GameRowComponent implements OnInit{
    @Input() game: Game;

    updateRecord() {
        localStorage.setItem('SelectedGame', 'button');
        if (localStorage.getItem('ChangeGame') != null) {
            localStorage.removeItem('ChangeGame');
        }
        localStorage.setItem('ChangeGame', this.game.gameId + '');
        window.location.href = 'changegame';
    }

    removeRecord() {
        localStorage.setItem('SelectedGame', 'button');
        this.http.get('http://localhost:3000/gamequestions').subscribe(result => {
            var gottenList = result.json() as GameQuestion[];
            for (let item of gottenList) {
                if (item.gameId == this.game.gameId) {
                    this.http.delete('http://localhost:3000/gamequestions/' + item.id).subscribe(result => {

                    }, error => console.log(error));
                }
            }
            this.http.delete('http://localhost:3000/games/' + this.game.gameId).subscribe(result => {
                setTimeout(window.location.reload(), 3000);
            }, error => console.log(error));
        }, error => console.log(error));
    }

    constructor(private http: Http) { }

    ngOnInit() {
    }
}

