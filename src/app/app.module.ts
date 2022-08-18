import { NgModule, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ServiceWorkerModule,
  SwRegistrationOptions,
} from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { ToggleService } from './services/toggle.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ServiceWorkerModule.register('ngsw-worker.js')],
  providers: [
    // {
    //   provide: SwRegistrationOptions,
    //   useFactory: () => ({
    //     enabled: true && environment.production,
    //   }),
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
