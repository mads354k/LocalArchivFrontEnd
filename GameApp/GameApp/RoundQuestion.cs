using System;
using System.Collections.Generic;
using System.Text;

namespace GameApp
{
    public class RoundQuestion
    {
        public int Id { get; set; } 
        public int QuestionId { get; set; }
        public int AnswerId { get; set; }
        public bool IsCorrectAnswer { get; set; }

        public RoundQuestion(int id, int questionId, int answerId, bool isCorrectAnswer)
        {
            this.Id = id;
            this.QuestionId = questionId;
            this.AnswerId = answerId;
            this.IsCorrectAnswer = isCorrectAnswer;
        }
    }
}
