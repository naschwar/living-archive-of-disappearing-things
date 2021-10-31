import { EntryComponent } from './../entry/entry.component';
import { Component, OnInit } from '@angular/core';
import { entries } from '../entry/entry.component';


@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  entries = entries;
  expandedIndex = -1;

  ngOnInit(): void {
  }

  readMore = (index: number) => {
    if (this.expandedIndex == index){
      this.expandedIndex = -1;
    }else{
      this.expandedIndex = index;
    }
  }
}

