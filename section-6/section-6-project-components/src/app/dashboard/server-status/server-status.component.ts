import { Component, DestroyRef, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  //private interval?: ReturnType<typeof setInterval>;

  constructor(private destroyRef: DestroyRef) {
    effect(() => {
      console.log(this.currentStatus());
    });
  }
  ngOnInit(): void {
    const interval = setInterval(() => {
      const val = Math.random();
      if (val < 0.5) {
        this.currentStatus.set('online');
      } else if (val < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearTimeout(interval);
    });
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
