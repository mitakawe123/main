import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToggleService } from './services/toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public toggleService: ToggleService) {}
  ngOnInit(): void {}
}
