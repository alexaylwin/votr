import { Component, OnInit } from '@angular/core';
import { VotrService } from './shared/votr.service';

@Component({
  selector: 'votr-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  
  constructor(private service:VotrService){}

  ngOnInit() {
  }

}
