using System;
using System.Collections.Generic;
using System.Text;

namespace GameApp.Model
{
    public class Player
    {
        public int Score { get; set; }
        public bool ItsTurn { get; set; }

        public Player()
        {
            this.Score = 0;
            this.ItsTurn = ItsTurn;
        }
    }
}
