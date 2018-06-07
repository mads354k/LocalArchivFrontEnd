using GameApp.Model;
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
        private List<Player> Players { get; set; }
        private List<Round> Questions { get; set; }

        public ScoreBoard (List<Player> players, List<Round> questions)
		{
			InitializeComponent ();
            this.Players = players;
            this.Questions = questions;

            ShowScore();

            Device.StartTimer(new TimeSpan(0,0,0,0,10000), () => { ChangePage(); return false; });
		}

        private void ShowScore()
        {
            for (int i=0; i < this.Players.Count; i++)
            {
                Label l = new Label();
                l.Text = "Spiller " + (i + 1) + ": " + this.Players[i].Score;
                this.playerScores.Children.Add(l);
            }

            this.rundeLabel.Text = "Næste Runde: " + (9 - this.Questions.Count);
        }

        private void ChangePage()
        {
            Navigation.PushAsync(new QuestionPage(this.Players, this.Questions));
        }
	}
}