﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Xamarin.Forms;

namespace GameApp
{
	public partial class App : Application
	{
		public App ()
		{
			InitializeComponent();

            //MainPage = new GameApp.MainPage();
            //MainPage = new GameApp.QuestionPage();
            //MainPage = new GameApp.ScoreBoard();
            //MainPage = new GameApp.SlutPage();
            MainPage = new NavigationPage( new GameApp.MainPage());

        }

		protected override void OnStart ()
		{
			// Handle when your app starts
		}

		protected override void OnSleep ()
		{
			// Handle when your app sleeps
		}

		protected override void OnResume ()
		{
			// Handle when your app resumes
		}
	}
}
