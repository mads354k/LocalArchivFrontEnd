﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GameApp
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class QuestionPage : ContentPage
	{
		public QuestionPage ()
		{
			InitializeComponent ();
		}

        private void answerSelected(object sender, EventArgs e)
        {
            Navigation.PushAsync(new ScoreBoard());
        } 
	}
}