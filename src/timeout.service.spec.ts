
import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { TimeoutService } from '../src/timeout.service';

describe('TimeoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeoutService]
    });
  });

  it('should return that session has timed out', fakeAsync(inject([TimeoutService], timeoutService => {
    tick(10);
    timeoutService.handleInactivity().subscribe(val => {
      expect(val).toBe(true);
    });
  })));
});
