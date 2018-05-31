using System;
using System.Collections.Generic;
using System.Text;

namespace GameApp
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string Description { get; set; }
        public string QuestionType { get; set; }
        public string Hint { get; set; }

        public Question(int questionId, string description, string questionType, string hint)
        {
            this.QuestionId = questionId;
            this.Description = description;
            this.QuestionType = QuestionType;
            this.Hint = hint;
        }
    }
}
