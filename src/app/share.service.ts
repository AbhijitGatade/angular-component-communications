import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private counterValue = new BehaviorSubject(0);
  currentCounterValue = this.counterValue.asObservable();

  constructor() { }

  updateCounterValue(count:number){
    this.counterValue.next(count);
  }
}
