import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
export class DataService {

  isExpanded = new BehaviorSubject(false);

  constructor() { }

  changeView(updatedExpandedState: boolean) {
    this.isExpanded.next(updatedExpandedState);
  }

}