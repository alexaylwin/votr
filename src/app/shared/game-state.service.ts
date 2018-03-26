import { Injectable, OnInit } from '@angular/core';
import { VotrDataService } from './votr-data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameStateService {
    //Lazy state management - refactor this to use ng-redux properly
    voteCount:Observable<number>;
    currentQuestion:Observable<string>;
    totalPlayers:number = 1;

  constructor(private dataService:VotrDataService) {
    this.voteCount = this.dataService.getVoteCount();
    console.log(this.voteCount);
    this.currentQuestion = this.dataService.getCurrentQuestion();
   }
}
