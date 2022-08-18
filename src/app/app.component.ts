import {
  Component,
  EventEmitter,
  Input,
  AfterViewInit,
  Output,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class AppComponent implements AfterViewInit {
  downloadState: boolean = false;
  @ViewChild('mymodal') mymodal: ElementRef | undefined;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngAfterViewInit(): void {
    this.open(this.mymodal);
  }

  open(mymodal: any) {
    this.modalService.open(mymodal);
    this.downloadState = true;
  }

  downloadApp(): void {}
}
