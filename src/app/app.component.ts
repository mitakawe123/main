import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  promptAnswer: boolean = false;

  propmtAnswerFunction(): boolean {
    return (this.promptAnswer = true);
  }

  cancelDownload(): boolean {
    return (this.promptAnswer = false);
  }
  ngOnInit(): void {}
}
