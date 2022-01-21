import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count!: number;
  constructor(private myCounter:CounterService) { }

  ngOnInit() {
    this.count = this.myCounter.correctAnswersCountSubject.getValue();
    this.sendCountToQuizService(this.count);
  }

  sendCountToQuizService(newValue: any) {
    this.count = newValue;
    this.myCounter.sendCountToResults(this.count);
  }

}
