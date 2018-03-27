import { Injectable, OnInit } from '@angular/core';
import { VotrDataService } from './votr-data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GameStateService {
  //Lazy state management - refactor this to use ng-redux properly
  voteCount:Observable<number>;
  currentQuestion:Observable<string>;
  totalPlayers:number = 1;
  state:Observable<GameState>;
  name:string;
  
  //protect the uid from modification
  private uid:string;


  constructor(private dataService:VotrDataService) {
    this.voteCount = this.dataService.getVoteCount();
    this.currentQuestion = this.dataService.getCurrentQuestion();

    //Logic to set game state
    this.state = Observable.of(GameState.Setup);

   }

   startGame() {
     console.log("Starting game with " + this.totalPlayers + " players. Player name is " + this.name);
     this.state = Observable.of(GameState.Asking);
     this.uid = this.dataService.createGame(this.totalPlayers, this.name);
   }

   /**
    * Send the new question to the data service.
    * Game state must be asking
    */
   askQuestion(newQuestion:string) {
      //if(this.state == GameState.Asking) {
        this.dataService.sendQuestion();
      //}
   }

}

export enum GameState {
  Setup = 0,
  Asking = 1, 
  Answering = 2
}
