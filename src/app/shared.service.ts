import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private hideTargetSubject = new Subject<void>();
  hideTarget$ = this.hideTargetSubject.asObservable();

  requestHide() {
    this.hideTargetSubject.next();
  }
}