export class Game {
    gameId: number;
    name: string;
    date: number;

    constructor(id: number, name: string, date: number) {
        this.gameId = id;
        this.name = name;
        this.date = date;
    }
}