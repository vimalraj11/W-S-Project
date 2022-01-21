import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from 'src/app/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myCounter: CounterService) { }

  public result!: Observable<number>;

  ngOnInit() {
    this.result = this.myCounter.correctAnswersCountSubject;
  }

}
