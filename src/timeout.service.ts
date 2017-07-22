import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimeoutService {
  constructor() { }

  handleInactivity() {
    return new Observable(observer => {
      let timeout;

      const setInactive = () => {
        observer.next(true);
      };

      const resetTimer = () => {
        clearTimeout(timeout);
        timeout = setTimeout(setInactive, 10000);
      };

      // events - note: not tested for accessibility
      window.onload = resetTimer;
      document.onmousemove = resetTimer;
      document.onmousedown = resetTimer;
      document.onkeydown = resetTimer;
      document.onscroll = resetTimer;
      document.ontouchstart = resetTimer;
      document.ontouchmove = resetTimer;
    });
  }
}
