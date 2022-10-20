import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  toParentMessage = "";

  @Output() sendData = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    this.sendData.emit(this.toParentMessage);
  }

}
