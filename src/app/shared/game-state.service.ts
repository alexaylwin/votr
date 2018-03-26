import { Injectable } from '@angular/core';

@Injectable()
export class GameStateService {
    //Lazy state management - refactor this to use ng-redux properly
    voteCount:number = 0;
    currentQuestion:string = 'What\'s the meaning of life?';
    totalPlayers:number = 0;

  constructor() { }

}
