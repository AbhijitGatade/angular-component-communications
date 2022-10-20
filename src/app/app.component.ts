import { Component, ViewChild } from '@angular/core';
import { Child3Component } from './child3/child3.component';
import { ShareService } from './share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-communication';
  tochildMessage = "";
  message = "";
  fromChildMessage = "";

@ViewChild(Child3Component)
private child3Component : Child3Component = new Child3Component();


constructor(private share:ShareService){

}

  sendMessage(){
    this.message = this.tochildMessage;
  }

  receiveMessage(message:string){
    this.fromChildMessage = message;
  }

  start(){
    this.child3Component.start();
  }

  stop(){
    this.child3Component.stop();
  }


  reset(){
    this.share.updateCounterValue(0);
  }

}
