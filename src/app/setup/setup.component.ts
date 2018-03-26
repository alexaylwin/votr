import { Component, OnInit } from '@angular/core';
import { GameState, GameStateService } from '../shared/game-state.service';

@Component({
  selector: 'votr-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  playerName:string;
  players:number;

  constructor(private gameState:GameStateService) { }

  ngOnInit() {

  }

  onStartClick() {
    this.gameState.name = this.playerName;
    this.gameState.totalPlayers = this.players;
    this.gameState.startGame();
  }

}
