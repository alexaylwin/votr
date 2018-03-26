import { Component, OnInit } from '@angular/core';
import { VotrDataService } from '../shared/votr-data.service';
import { GameStateService, GameState } from '../shared/game-state.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'votr-answer',
  templateUrl: './answer.component.html'
})
export class AnswerComponent implements OnInit {

  voteCount:Observable<number>;
  answer:string = '';
  disabled:boolean = false;

  constructor(private gameState:GameStateService) { }

  ngOnInit() {
    this.voteCount = this.gameState.voteCount;
    this.gameState.state.subscribe((state:GameState) => {
      console.log(state);
      if(state == GameState.Setup) {
        this.disabled = true;
      }
    });
  }

  onSend() {
    console.log(this.answer);

    this.answer = '';
    this.disabled = true;
  }

}
