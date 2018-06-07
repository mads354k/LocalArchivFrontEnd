using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using System.Net.Http;
using System.Timers;
using GameApp.Model;

namespace GameApp
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class QuestionPage : ContentPage
	{
        private List<Player> Players { get; set; }
        private List<Round> Questions { get; set; }
        private int RandomIndex { get; set; }
        private int Progress { get; set; }
        private bool EndGame { get; set; }

        public QuestionPage (List<Player> players, List<Round> questions)
		{
			InitializeComponent ();

            this.Players = players;
            this.Questions = new List<Round>(questions);
            Random rng = new Random();
            this.RandomIndex = rng.Next(0, this.Questions.Count - 1);
            this.EndGame = false;

            DisplayQuestion();
            DisplayAnswers();

            TimerBarProgress();
        }

        private void TimerBarProgress()
        {
            // this.timerBar.Progress = 0;
            this.Progress = 1;

            Device.StartTimer(new TimeSpan(0, 0, 1), () => {
                this.timerBar.Text = (30 - this.Progress)+"";

                if (this.Progress == 20)
                {
                    DisplayHint();
                    this.timerBar.TextColor = new Color(255,0,0);
                }
                else if (this.Progress == 30)
                {
                    SetTurnToNextPlayer();

                    this.Questions.RemoveAt(this.RandomIndex);

                    if (this.Questions.Count == 0)
                    {
                        Navigation.PushAsync(new SlutPage(this.Players));
                    }
                    else
                    {
                        Navigation.PushAsync(new ScoreBoard(this.Players, this.Questions));
                    }
                    this.EndGame = true;
                }
                this.Progress += 1;

                return !EndGame;
            });
        }

        private void DisplayHint()
        {
            this.hint.Text = "Hint: " + this.Questions[this.RandomIndex].Question.Hint;
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
                GiveScoreToCurrentPlayer();
            }

            SetTurnToNextPlayer();

            this.Questions.RemoveAt(this.RandomIndex);

            if (this.Questions.Count == 0) {
                Navigation.PushAsync(new SlutPage(this.Players));
            }
            else
            {
                Navigation.PushAsync(new ScoreBoard(this.Players, this.Questions));
            }

            this.EndGame = true;
        } 

        private void SetTurnToNextPlayer()
        {
            for (int i = 0; i < this.Players.Count; i++)
            {
                if (this.Players[i].ItsTurn)
                {
                    if (this.Players.Count == i+1)
                    {
                        this.Players[0].ItsTurn = true;
                        this.Players[i].ItsTurn = false;
                    }
                    else
                    {
                        this.Players[i + 1].ItsTurn = true;
                        this.Players[i].ItsTurn = false;
                    }
                }
            }
        }

        private void GiveScoreToCurrentPlayer()
        {
            foreach (var player in this.Players)
            {
                if (player.ItsTurn)
                {
                    /*
                    if (this.Questions[this.RandomIndex].Question.QuestionType.Equals("Text"))
                    {
                        player.Score += 100;
                    }
                    else
                    {
                        player.Score += 150;
                    }
                    */
                    player.Score += 100;
                }
            }
        }
    }
}