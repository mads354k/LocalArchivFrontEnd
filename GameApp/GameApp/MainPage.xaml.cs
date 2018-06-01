using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace GameApp
{
	public partial class MainPage : ContentPage
	{
        private int GameId { get; set; }

		public MainPage()
		{
			InitializeComponent();

            GetGames();
		}

        private async void GetGames()
        {
            HttpInterface http = new HttpInterface("http://10.176.164.129:3000/");

            var x = await http.MakeGetRequest<List<Game>>("games");
            if (x.Count > 0)
            {
                DisplayAlert("test", x[0].Name, "close");
            }
        }

        private void SelectGame()
        {
            
        }

        private void Button_Start_Spil(object sender, EventArgs e)
        {
            SelectGame();
            Navigation.PushAsync(new QuestionPage(0, this.GameId, new int[0]));
        }
    }
}
