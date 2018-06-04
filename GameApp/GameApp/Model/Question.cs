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
        public string Picture { get; set; }
        public string Hint { get; set; }

        public Question(int questionId, string description, string questionType, string picture, string hint)
        {
            this.QuestionId = questionId;
            this.Description = description;
            this.QuestionType = QuestionType;
            this.Picture = picture;
            this.Hint = hint;
        }
    }
}
