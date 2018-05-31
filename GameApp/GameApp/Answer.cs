using System;
using System.Collections.Generic;
using System.Text;

namespace GameApp
{
    public class Answer
    {
        public int AnswerId { get; set; }
        public string Description { get; set; }
        public string AnswerType { get; set; }

        public Answer(int answerId, string description, string answerType)
        {
            this.AnswerId = answerId;
            this.Description = description;
            this.AnswerType = answerType;
        }
    }
}
