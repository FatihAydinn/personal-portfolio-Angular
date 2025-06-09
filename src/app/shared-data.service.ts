import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private arraySource = new BehaviorSubject<any[]>([]);
  array$ = this.arraySource.asObservable();

  setArray(newArray: any) {
    this.arraySource.next(newArray);
  }
}
