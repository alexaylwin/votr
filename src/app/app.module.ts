import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { VotrDataService } from './shared/votr-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SetupComponent } from './setup/setup.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    AnswerComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VotrDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
