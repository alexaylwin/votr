import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { VotrDataService } from './shared/votr-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SetupComponent } from './setup/setup.component';
import { AnswerComponent } from './game/answer/answer.component';
import { QuestionComponent } from './game/question/question.component';
import { GameStateService } from './shared/game-state.service';
import { GameComponent } from './game/game.component';

const appRoutes:Routes = [
  { path: 'setup', component: SetupComponent },
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: '/setup', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    AnswerComponent,
    QuestionComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [VotrDataService, GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
