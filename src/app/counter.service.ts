import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  correctAnswersCountSubject = new BehaviorSubject<number>(0);

  sendCountToResults(value: number) {
    this.correctAnswersCountSubject.next(value);
  }
  
}
