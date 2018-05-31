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
		public SlutPage (int score)
		{
			InitializeComponent ();

            ShowScore(score);

            Device.StartTimer(new TimeSpan(0, 0, 0, 0, 10000), () => { ChangePage(); return false; });
        }

        private void ShowScore(int score)
        {
            string scoreText = "Din Score: " + score;
            this.endScore.Text = scoreText;
        }

        private void ChangePage()
        {
            Navigation.PushAsync(new MainPage());
        }
    }
}