import { Component, OnDestroy, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './sever-status.component.html',
  styleUrl: './sever-status.component.css'
})
export class SeverStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'unknown';
  private interval?: ReturnType<typeof setInterval>;

  constructor() { }

  ngOnInit() {
    console.log('ON INIT');
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
