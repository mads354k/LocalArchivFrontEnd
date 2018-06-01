using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace GameApp
{
	public partial class MainPage : ContentPage
	{
        public ObservableCollection<Game> ListOfGames { get; set; }
        private int GameId { get; set; }

		public MainPage()
		{
            BindingContext = this;
            this.ListOfGames = new ObservableCollection<Game>();
            InitializeComponent();
            GetGames();
        }

        private async void GetGames()
        {
            HttpInterface http = new HttpInterface("http://10.176.164.129:3000/");

            var games = await http.MakeGetRequest<List<Game>>("games");
            foreach (var game in games)
            {
                ListOfGames.Add(game);
            }           
        }

        private void SelectGame()
        {
            this.GameId = ((Game)this.picker.SelectedItem).GameId;
        }

        private void Button_Start_Spil(object sender, EventArgs e)
        {
            SelectGame();
            Navigation.PushAsync(new QuestionPage(0, this.GameId, new int[0]));
        }
    }
}
