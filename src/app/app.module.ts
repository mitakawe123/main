import { NgModule, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ServiceWorkerModule,
  SwRegistrationOptions,
} from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js'),
    NgbModule,
  ],
  providers: [
    {
      provide: SwRegistrationOptions,
      useFactory: () => ({
        enabled: false && environment.production,
      }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
