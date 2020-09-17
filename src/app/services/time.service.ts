import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  time: Observable<string>;

  constructor() { 
    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toUTCString()), 1000);
    });
  }

  public getTime(){
    return this.time;
  }
}
