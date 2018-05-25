import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CreateQuestionComponent } from './components/createquestion/createquestion.component';
import { GameListComponent } from './components/gamelist/gamelist.component';
import { GameTableComponent } from './components/gamelist/gametable/gametable.component';
import { GameRowComponent } from './components/gamelist/gametable/gamerow/gamerow.component';
import { QuestionListComponent } from './components/questionlist/questionlist.component';
import { QuestionTableComponent } from './components/questionlist/questiontable/questiontable.component';
import { QuestionRowComponent } from './components/questionlist/questiontable/questionrow/questionrow.component';
import { AnswerListComponent } from './components/answerlist/answerlist.component';
import { AnswerTableComponent } from './components/answerlist/answertable/answertable.component';
import { AnswerRowComponent } from './components/answerlist/answertable/answerrow/answerrow.component';
import { SpecificAnswerListComponent } from './components/specificanswerlist/specificanswerlist.component';
import { SpecificQuestionListComponent } from './components/specificquestionlist/specificquestionlist.component';
import { SpecificQuestionTableComponent } from './components/specificquestionlist/specificquestiontable/specificquestiontable.component';
import { SpecificQuestionRowComponent } from './components/specificquestionlist/specificquestiontable/specificquestionrow/specificquestionrow.component';
import { ChangeAnswerComponent } from './components/changeanswer/changeanswer.component';
import { ChangeQuestionComponent } from './components/changequestion/changequestion.component';
import { ChangeGameComponent } from './components/changegame/changegame.component';
import { AvalibleQuestionListComponent } from './components/changegame/avaliblequestionlist/avaliblequestionlist.component';
import { AvalibleQuestionTableComponent } from './components/changegame/avaliblequestionlist/avaliblequestiontable/avaliblequestiontable.component';
import { AvalibleQuestionRowComponent } from './components/changegame/avaliblequestionlist/avaliblequestiontable/avaliblequestionrow/avaliblequestionrow.component';
import { PresentQuestionListComponent } from './components/changegame/presentquestionlist/presentquestionlist.component';
import { PresentQuestionTableComponent } from './components/changegame/presentquestionlist/presentquestiontable/presentquestiontable.component';
import { PresentQuestionRowComponent } from './components/changegame/presentquestionlist/presentquestiontable/presentquestionrow/presentquestionrow.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CreateQuestionComponent,
        GameListComponent,
        GameTableComponent,
        GameRowComponent,
        QuestionListComponent,
        QuestionTableComponent,
        QuestionRowComponent,
        AnswerListComponent,
        AnswerTableComponent,
        AnswerRowComponent,
        SpecificAnswerListComponent,
        SpecificQuestionListComponent,
        SpecificQuestionTableComponent,
        SpecificQuestionRowComponent,
        ChangeAnswerComponent,
        ChangeQuestionComponent,
        ChangeGameComponent,
        AvalibleQuestionListComponent,
        AvalibleQuestionTableComponent,
        AvalibleQuestionRowComponent,
        PresentQuestionListComponent,
        PresentQuestionTableComponent,
        PresentQuestionRowComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'createquestion', component: CreateQuestionComponent },
            { path: 'gamelist', component: GameListComponent },
            { path: 'questionlist', component: QuestionListComponent },
            { path: 'answerlist', component: AnswerListComponent },
            { path: 'specificanswerlist', component: SpecificAnswerListComponent },
            { path: 'specificquestionlist', component: SpecificQuestionListComponent },
            { path: 'changeanswer', component: ChangeAnswerComponent },
            { path: 'changequestion', component: ChangeQuestionComponent },
            { path: 'changegame', component: ChangeGameComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
