using System;
using System.Collections.Generic;
using System.Text;

namespace GameApp
{
    public class GameQuestion
    {
        public int Id { get; set; }
        public int GameId { get; set; }
        public int QuestionId { get; set; }

        public GameQuestion(int id, int gameId, int questionId)
        {
            this.Id = id;
            this.GameId = gameId;
            this.QuestionId = questionId;
        }
    }
}
