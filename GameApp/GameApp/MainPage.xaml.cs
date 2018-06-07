using GameApp.Model;
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
        private List<Round> Questions { get; set; }
        private HttpInterface http = new HttpInterface("http://10.176.164.17:3000/");

        public MainPage()
		{
            BindingContext = this;
            this.Questions = new List<Round>();
            this.ListOfGames = new ObservableCollection<Game>();
            InitializeComponent();
            this.buttonStartSpil.IsEnabled = false;
            GetGames();
        }

        private async void GetGames()
        {
            var games = await http.MakeGetRequest<List<Game>>("games");
            foreach (var game in games)
            {
                ListOfGames.Add(game);
            }           
        }

        private async void GetRounds()
        {
            var gameQuestions = await http.MakeGetRequest<List<GameQuestion>>("gamequestions");
            List<Question> questions = new List<Question>();

            // get questions for this game
            foreach (var item in gameQuestions)
            {
                if (item.GameId == this.GameId)
                {
                    var question = await http.MakeGetRequest<Question>("questions/" + item.QuestionId);
                    questions.Add(question);
                }
            }

            var roundQuestions = await http.MakeGetRequest<List<RoundQuestion>>("roundquestions");
            List<List<Answer>> listOfAnswers = new List<List<Answer>>();
            List<RoundQuestion> correctAnswers = new List<RoundQuestion>();
            
            // get answers for this question, and the correct answer
            foreach (var question in gameQuestions)
            {
                List<Answer> answers = new List<Answer>();
                foreach (var item in roundQuestions)
                {
                    if (item.QuestionId == question.QuestionId)
                    {
                        Answer answer = await http.MakeGetRequest<Answer>("answers/"+item.AnswerId);
                        answers.Add(answer);
                        if (item.IsCorrectAnswer)
                        {
                            correctAnswers.Add(item);
                        }
                    }
                }
                listOfAnswers.Add(answers);
            }

            // add everything to a list
            for (int i = 0; i < questions.Count; i++)
            {
                Round round = new Round(questions[i], listOfAnswers[i], correctAnswers[i]);
                this.Questions.Add(round);
            }

            this.buttonStartSpil.IsEnabled = true;
        }

        private void SelectGame(object sender, EventArgs e)
        {
            if ((Game)this.picker.SelectedItem != null)
            {
                this.GameId = ((Game)this.picker.SelectedItem).GameId;

                GetRounds();
            }
        }

        private void Button_Start_Spil(object sender, EventArgs e)
        {
            List<Player> players = new List<Player>();
            for (int i = 0; i < this.stPlayers.Value; i++)
            {
                Player pl = new Player();
                players.Add(pl);
            }
            players[0].ItsTurn = true;
            Navigation.PushAsync(new QuestionPage(players, this.Questions));
        }
    }
}
