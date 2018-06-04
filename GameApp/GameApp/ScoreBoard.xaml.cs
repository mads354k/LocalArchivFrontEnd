using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Timers;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GameApp
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class ScoreBoard : ContentPage
	{
        private int Score { get; set; }
        private List<Round> Questions { get; set; }

        public ScoreBoard (int score, List<Round> questions)
		{
			InitializeComponent ();
            this.Score = score;
            this.Questions = questions;

            ShowScore();

            Device.StartTimer(new TimeSpan(0,0,0,0,10000), () => { ChangePage(); return false; });
		}

        private void ShowScore()
        {
            string scoreText = "Din Score: " + this.Score;
            this.scoreLabel.Text = scoreText;

            this.rundeLabel.Text = "Næste Runde: " + (9 - this.Questions.Count);
        }

        private void ChangePage()
        {
            Navigation.PushAsync(new QuestionPage(this.Score, this.Questions));
        }
	}
}