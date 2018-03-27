import { Component, OnInit } from '@angular/core';
import { GameStateService, GameState } from '../../shared/game-state.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'votr-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {

  private question:Observable<string>;
  private playerQuestion:string;

  constructor(private gameState:GameStateService) { }

  ngOnInit() {
    this.question = this.gameState.currentQuestion;
  }

  onAsk() {
    this.gameState.askQuestion(this.playerQuestion);
  }

}
