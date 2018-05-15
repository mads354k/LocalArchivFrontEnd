import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CreateQuestionComponent } from './components/createquestion/createquestion.component';
import { CreateGameComponent } from './components/creategame/creategame.component';
import { CreateAnswerComponent } from './components/createanswer/createanswer.component';
import { GameListComponent } from './components/gamelist/gamelist.component';
import { GameTableComponent } from './components/gamelist/gametable/gametable.component';
import { GameRowComponent } from './components/gamelist/gametable/gamerow/gamerow.component';
import { QuestionListComponent } from './components/questionlist/questionlist.component';
import { QuestionTableComponent } from './components/questionlist/questiontable/questiontable.component';
import { QuestionRowComponent } from './components/questionlist/questiontable/questionrow/questionrow.component';
import { AnswerListComponent } from './components/answerlist/answerlist.component';
import { AnswerTableComponent } from './components/answerlist/answertable/answertable.component';
import { AnswerRowComponent } from './components/answerlist/answertable/gamerow/answerrow.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CreateGameComponent,
        CreateQuestionComponent,
        CreateAnswerComponent,
        GameListComponent,
        GameTableComponent,
        GameRowComponent,
        QuestionListComponent,
        QuestionTableComponent,
        QuestionRowComponent,
        AnswerListComponent,
        AnswerTableComponent,
        AnswerRowComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'creategame', component: CreateGameComponent },
            { path: 'createquestion', component: CreateQuestionComponent },
            { path: 'createanswer', component: CreateAnswerComponent },
            { path: 'gamelist', component: GameListComponent },
            { path: 'questionlist', component: QuestionListComponent },
            { path: 'answerlist', component: AnswerListComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
