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
        private int GameId { get; set; }
        private List<int> UsedQuestions { get; set; }
        private Question CurrentQuestion { get; set; }
        private List<Answer> Answers { get; set; }
        private RoundQuestion CorrectAnswer { get; set; }
        private HttpInterface http = new HttpInterface("http://10.176.164.129:3000/");

        public QuestionPage (int score, int gameId, List<int> usedQuestions)
		{
			InitializeComponent ();
            this.Score = score;
            this.GameId = gameId;
            this.UsedQuestions = usedQuestions;      

            GetQuestion();
            GetAnswers();

		}

        private async void GetQuestion()
        {
            var gameQuestions = await this.http.MakeGetRequest<List<GameQuestion>>("gamequestions");
            List<Question> questions = new List<Question>();

            foreach (var item in gameQuestions)
            {
                if (item.GameId == this.GameId)
                {
                    questions.Add(await this.http.MakeGetRequest<Question>("question/"+item.QuestionId));
                }
            }

            Random rng = new Random();

            foreach (var index in this.UsedQuestions)
            {
                questions[index] = null;
            }

            questions.Remove(null);

            int randomNumber = rng.Next(0, questions.Count - 1);

            this.CurrentQuestion = questions[randomNumber];

            this.UsedQuestions.Add(randomNumber);

            DisplayQuestion();
        }

        private async void GetAnswers()
        {
            var roundQuestions = await this.http.MakeGetRequest<List<RoundQuestion>>("roundquestions");

            foreach (var item in roundQuestions)
            {
                if (item.QuestionId == this.CurrentQuestion.QuestionId)
                {
                    this.Answers.Add(await this.http.MakeGetRequest<Answer>("answers/"+item.AnswerId));
                    if (item.IsCorrectAnswer)
                    {
                        this.CorrectAnswer = item;
                    }
                }
            }

            DisplayAnswers();
        }

        private void DisplayQuestion()
        {
            this.question.Text = this.CurrentQuestion.Description;
        }

        private void DisplayAnswers()
        {
            this.answer1.Text = this.Answers[0].Description;
            this.answer2.Text = this.Answers[1].Description;
            this.answer3.Text = this.Answers[2].Description;
            this.answer4.Text = this.Answers[3].Description;
        }

        private bool AnswerIsCorrect(string answer)
        {
            for (int i = 0; i < this.Answers.Count; i++)
            {
                if (this.Answers[i].Description.Equals(answer) && this.Answers[i].AnswerId == this.CorrectAnswer.AnswerId)
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
                if (this.CurrentQuestion.QuestionType.Equals("Text"))
                {
                    this.Score += 100;
                }
                else
                {
                    this.Score += 150;
                }
            }

            if (this.UsedQuestions.Count > 10) {
                Navigation.PushAsync(new SlutPage(this.Score));
            }
            else
            {
                Navigation.PushAsync(new ScoreBoard(this.Score, this.GameId, this.UsedQuestions));
            }
        } 
	}
}