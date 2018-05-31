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
		}

        private void Button_Start_Spil(object sender, EventArgs e)
        {
            Navigation.PushAsync(new QuestionPage(0, this.GameId, new int[0]));
        }
    }
}
