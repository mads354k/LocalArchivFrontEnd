import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from '../../game/game.model';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private http: Http) {}

    nextPage() {
        var name = <HTMLInputElement> document.getElementById('name');
        var date = <HTMLInputElement> document.getElementById('date');
        if (name != null && date != null) {
            var game = new Game(0, name.value, Number(date.value));
            this.http.post('http://localhost:3000/games', game).subscribe(result => {
                var game = result.json() as Game;
                if (localStorage.getItem('ActiveGame') != null) {
                    localStorage.removeItem('ActiveGame');
                }
                localStorage.setItem('ActiveGame', game.gameId + '');
                alert('Game created and selected');
            }, error => console.error(error)); 
            window.location.href = 'createquestion';
        }
    }


}
