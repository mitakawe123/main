import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  promptAnswer: boolean = false;

  propmtAnswerFunction(): void {
    this.promptAnswer = true;
  }

  cancelDownload(): void {
    this.promptAnswer = false;
  }
}
