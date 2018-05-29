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
        public ScoreBoard ()
		{
			InitializeComponent ();
            Device.StartTimer(new TimeSpan(0,0,0,0,10000), () => { changePage(); return false; });
           
          
		}
        private void changePage()
        {
           
            Navigation.PushAsync(new QuestionPage());
        }
	}
}