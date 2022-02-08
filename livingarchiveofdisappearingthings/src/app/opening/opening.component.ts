import { Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent implements OnInit {
  @Output() openToggle = new EventEmitter<boolean>();
  constructor() { }
  openArchive() {
    this.openToggle.emit(true);
  }
  ngOnInit(): void {
  }

}
