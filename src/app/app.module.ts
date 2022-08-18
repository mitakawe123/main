import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ServiceWorkerModule,
  SwRegistrationOptions,
} from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ServiceWorkerModule.register('ngsw-worker.js')],
  providers: [
    {
      provide: SwRegistrationOptions,
      useFactory: () => ({
        enabled: true,
      }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
