import { Component, OnInit } from '@angular/core';
import { DataService } from "../Data.Service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'siteHeader',
  templateUrl: './siteHeader.component.html',
  styleUrls: ['./siteHeader.component.css', '../app.component.css']
})
export class siteHeaderComponent implements OnInit {
  subscription: Subscription = new Subscription;
  expandedView: boolean = false;
  constructor(private myService: DataService) { }
  ngOnInit() {
    this.subscription = this.myService.isExpanded.subscribe(newExpandedState => this.expandedView = newExpandedState);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
