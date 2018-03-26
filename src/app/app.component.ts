import { Component, OnInit } from '@angular/core';
import { VotrService } from './votr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  players:number = 4;
  votecount:number = 0;

  answer:string = '';
  disabled:boolean = false;
  
  constructor(private service:VotrService){}

  ngOnInit() {
    this.service.getVoteCount().subscribe(data => {
      this.votecount = data;
    });
  }

  onSend() {
    console.log(this.answer);

    this.answer = '';
    this.disabled = true;

  }

}
