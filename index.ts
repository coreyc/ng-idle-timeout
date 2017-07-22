import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeoutService } from './src/timeout.service';

export * from './src/timeout.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: []
})
export class TimeoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TimeoutModule,
      providers: [TimeoutService]
    };
  }
}