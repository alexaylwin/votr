import { Component, OnInit } from '@angular/core';
import { VotrDataService } from '../shared/votr-data.service';
import { GameStateService } from '../shared/game-state.service';
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
  }

  onSend() {
    console.log(this.answer);

    this.answer = '';
    this.disabled = true;
  }

}
