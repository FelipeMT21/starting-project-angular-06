import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './sever-status.component.html',
  styleUrl: './sever-status.component.css'
})
export class SeverStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private interval?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    })
  }

  ngOnInit() {
    console.log('ON INIT');
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
