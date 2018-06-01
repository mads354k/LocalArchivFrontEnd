using System;
using System.Collections.Generic;
using System.Text;

namespace GameApp
{
    public class Game
    {
        public int GameId { get; set; }
        public string Name { get; set; }
        public int Date { get; set; }

        public Game(int gameId, string name, int date)
        {
            this.GameId = gameId;
            this.Name = name;
            this.Date = date;
        }
    }
}
