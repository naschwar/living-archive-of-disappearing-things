import { Component, OnInit } from '@angular/core';
import { DataService } from "../Data.Service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../app.component.css']
})
export class NavComponent implements OnInit {
  subscription: Subscription = new Subscription;
  expandedView: boolean = false;
  constructor(private myService: DataService) { }

  ngOnInit(): void {
    this.subscription = this.myService.isExpanded.subscribe(newExpandedState => this.expandedView = newExpandedState);
  }

}
