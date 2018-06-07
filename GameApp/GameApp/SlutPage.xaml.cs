using GameApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GameApp
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class SlutPage : ContentPage
	{
		public SlutPage (List<Player> players)
		{
			InitializeComponent ();

            ShowScore(players);

            Device.StartTimer(new TimeSpan(0, 0, 0, 0, 10000), () => { ChangePage(); return false; });
        }

        private void ShowScore(List<Player> players)
        {
            for (int i = 0; i < players.Count; i++)
            {
                Label l = new Label();
                l.Text = "Spiller " + (i + 1) + ": " + players[i].Score;
                this.playersScores.Children.Add(l);
            }
        }

        private void ChangePage()
        {
            Navigation.PushAsync(new MainPage());
        }
    }
}