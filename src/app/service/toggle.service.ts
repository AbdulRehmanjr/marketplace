import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private toggleState = new Subject();
  public toggleState$ = this.toggleState.asObservable();
  private toggleVal = false;

  emitData(){
     this.toggleVal = !this.toggleVal;
     this.toggleState.next(this.toggleVal);
  }
  constructor() { }
}
