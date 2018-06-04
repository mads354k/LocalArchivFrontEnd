using System;
using System.Collections.Generic;
using System.Text;

namespace GameApp
{
    public class Round
    {
        public Question Question { get; set; }
        public List<Answer> Answers { get; set; }
        private RoundQuestion correctAnswer;

        public Round(Question question, List<Answer> answers, RoundQuestion correctAnswer)
        {
            this.Question = question;
            this.Answers = answers;
            this.correctAnswer = correctAnswer;
        }

        public Answer GetCorrectAnswer()
        {
            Answer correct = null;

            foreach (var item in this.Answers)
            {
                if (item.AnswerId == this.correctAnswer.AnswerId)
                {
                    correct = item;
                    break;
                }
            }

            return correct;
        }
    }
}
