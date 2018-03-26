import { Component, OnInit } from '@angular/core';
import { GameState, GameStateService } from '../shared/game-state.service';

@Component({
  selector: 'votr-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(private gameState:GameStateService) { }

  ngOnInit() {

  }

  onStartClick() {
    this.gameState.setState(GameState.Asking);
  }

}
