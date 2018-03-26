import { Injectable, OnInit } from '@angular/core';
import { VotrDataService } from './votr-data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameStateService {
  //Lazy state management - refactor this to use ng-redux properly
  voteCount:Observable<number>;
  currentQuestion:Observable<string>;
  totalPlayers:number = 1;
  state:Observable<GameState>;


  constructor(private dataService:VotrDataService) {
    this.voteCount = this.dataService.getVoteCount();
    this.currentQuestion = this.dataService.getCurrentQuestion();

    //Logic to set game state
    this.state = new Observable(obs => { obs.next(GameState.Setup) });

   }
}

export enum GameState {
  Setup = 0,
  Asking = 1, 
  Answering = 2
}
