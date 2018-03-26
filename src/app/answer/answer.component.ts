import { Component, OnInit } from '@angular/core';
import { VotrDataService } from '../shared/votr-data.service';

@Component({
  selector: 'votr-answer',
  templateUrl: './answer.component.html'
})
export class AnswerComponent implements OnInit {

  players:number = 4;
  votecount:number = 0;

  answer:string = '';
  disabled:boolean = false;

  constructor(private service:VotrDataService) { }

  ngOnInit() {
    this.getVoteStatus();
  }

  onSend() {
    console.log(this.answer);

    this.answer = '';
    this.disabled = true;
  }

  getVoteStatus() {
    this.service.getVoteCount().subscribe(data => {
      this.votecount = data;
    });
  }

}
