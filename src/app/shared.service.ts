import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private hideTargetSubject = new Subject<number>();
  hideTarget$ = this.hideTargetSubject.asObservable();
  
  val: number = 1;

  requestHide(val: number) {
    this.hideTargetSubject.next(val);
  }
}