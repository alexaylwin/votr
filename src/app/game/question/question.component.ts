import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../../shared/game-state.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'votr-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {

  private question:Observable<string>;

  constructor(private gameState:GameStateService) { }

  ngOnInit() {
    this.question = this.gameState.currentQuestion;
  }

}
