import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {

  counter = 0;

  constructor(private share:ShareService) { }

  ngOnInit(): void {
    this.share.currentCounterValue.subscribe((count)=>{
      this.counter = count;
    });
  }

  decrement(){
    this.counter--;
    this.share.updateCounterValue(this.counter);
  }

}
