import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private count = new BehaviorSubject<number>(0);
  getCount(): BehaviorSubject<number> { return this.count; }
  incrementCount(): void { this.count.next(this.count.getValue() + 1); }
  decrementCount(): void { this.count.next(this.count.getValue() - 1); }
  constructor() { }
}
