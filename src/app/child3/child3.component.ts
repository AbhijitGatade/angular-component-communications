import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  counter = 0;
  timer : any;

  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.timer = setInterval(()=>{
      this.counter = this.counter + 1;
    }, 1000);
  }

  stop(){
    clearInterval(this.timer);
  }

}
