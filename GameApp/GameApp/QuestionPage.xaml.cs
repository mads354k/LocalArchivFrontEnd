using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using System.Net.Http;

namespace GameApp
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class QuestionPage : ContentPage
	{
        private int Score { get; set; }
        private List<Round> Questions { get; set; }
        private int RandomIndex { get; set; }

        public QuestionPage (int score, List<Round> questions)
		{
			InitializeComponent ();

            this.Score = score;
            this.Questions = new List<Round>(questions);
            Random rng = new Random();
            this.RandomIndex = rng.Next(0, this.Questions.Count - 1);
        }

        private void DisplayQuestion()
        {
            this.question.Text = this.Questions[this.RandomIndex].Question.Description;
        }

        private void DisplayAnswers()
        {
            this.answer1.Text = this.Questions[this.RandomIndex].Answers[0].Description;
            this.answer2.Text = this.Questions[this.RandomIndex].Answers[1].Description;
            this.answer3.Text = this.Questions[this.RandomIndex].Answers[2].Description;
            this.answer4.Text = this.Questions[this.RandomIndex].Answers[3].Description;
        }

        private bool AnswerIsCorrect(string answer)
        {
            for (int i = 0; i < this.Questions[this.RandomIndex].Answers.Count; i++)
            {
                if (this.Questions[this.RandomIndex].Answers[i].Description.Equals(answer) && this.Questions[this.RandomIndex].Answers[i].AnswerId == this.Questions[0].GetCorrectAnswer().AnswerId)
                {
                    return true;
                }
            }

            return false;
        }

        private void AnswerSelected(object sender, EventArgs e)
        {
            Button obj = (Button)sender;
            if (AnswerIsCorrect(obj.Text))
            {
                if (this.Questions[0].Question.QuestionType.Equals("Text"))
                {
                    this.Score += 100;
                }
                else
                {
                    this.Score += 150;
                }
            }

            this.Questions.RemoveAt(this.RandomIndex);

            if (this.Questions.Count == 0) {
                Navigation.PushAsync(new SlutPage(this.Score));
            }
            else
            {
                Navigation.PushAsync(new ScoreBoard(this.Score, this.Questions));
            }
        } 
	}
}