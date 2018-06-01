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
        private int GameId { get; set; }
        private List<int> UsedQuestions { get; set; }

        public ScoreBoard (int score, int gameId, List<int> usedQuestions)
		{
			InitializeComponent ();
            this.Score = score;
            this.GameId = gameId;
            this.UsedQuestions = usedQuestions;

            ShowScore();

            Device.StartTimer(new TimeSpan(0,0,0,0,10000), () => { ChangePage(); return false; });
		}

        private void ShowScore()
        {
            string scoreText = "Din Score: " + this.Score;
            this.scoreLabel.Text = scoreText;

            this.rundeLabel.Text = "Næste Runde: " + (this.UsedQuestions.Count + 1);
        }

        private void ChangePage()
        {
            Navigation.PushAsync(new QuestionPage(this.Score, this.GameId, this.UsedQuestions));
        }
	}
}