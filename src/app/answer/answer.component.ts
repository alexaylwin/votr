import { Component, OnInit } from '@angular/core';
import { VotrService } from '../shared/votr.service';

@Component({
  selector: 'votr-answer',
  templateUrl: './answer.component.html'
})
export class AnswerComponent implements OnInit {

  players:number = 4;
  votecount:number = 0;

  answer:string = '';
  disabled:boolean = false;

  constructor(private service:VotrService) { }

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
