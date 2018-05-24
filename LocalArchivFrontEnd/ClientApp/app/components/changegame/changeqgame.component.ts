import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../question/question.model';
import { GameQuestion } from '../../gamequestion/gamequestion.model';
import { Game } from '../../game/game.model';

@Component({
    selector: 'changegame',
    templateUrl: './changegame.component.html',
    styleUrls: ['./changegame.component.css']
})
export class ChangeGameComponent implements OnInit {
    constructor(private http:Http) {}

    ngOnInit() {
        
    }

    cancelChange() {
        localStorage.removeItem('ChangeGame');
        window.location.href = 'gamelist';
    }

    acceptChange() {
        var inputN: HTMLInputElement = <HTMLInputElement>document.getElementById('name');
        var inputD: HTMLInputElement = <HTMLInputElement>document.getElementById('date');

        var game = new Game(0, inputN.value, Number(inputD.value));

            this.http.put('http://localhost:3000/games/' + localStorage.getItem('ChangeGame'), game).subscribe(result => {
                localStorage.removeItem('ChangeGame');
                window.location.href = 'gamelist';
            }, error => console.log(error));
        }
    }
}