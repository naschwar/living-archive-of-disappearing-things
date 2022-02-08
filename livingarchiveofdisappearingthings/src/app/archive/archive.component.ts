import { Component, OnInit, Renderer2, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Utils } from '../utils';
import { DataService } from "../Data.Service";

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  entries = Utils.entries;
  hoverIndex = -1;
  expandedIndex = -1;
  @ViewChild('expandedEntry', { static: false }) expandedEntry: ElementRef<HTMLInputElement> = {} as ElementRef;
  constructor(private renderer: Renderer2, private myService: DataService){
    window.addEventListener('click',(e:Event)=>{
      if((this.expandedIndex != -1) && (!this.expandedEntry.nativeElement.contains(e.target as HTMLElement))){
        this.expandedIndex = -1;
        this.myService.changeView(false);
      }
    }, true);
  }
  ngOnInit(): void {
  }

  readMore = (index: number) => {
    if (this.hoverIndex == index){
      this.hoverIndex = -1;
    }else{
      this.hoverIndex = index;
    }
  }

  hover = (index: number) => {
    this.hoverIndex = index;
  }

  leave = () => {
    this.hoverIndex = -1;
  }

  expand = (index: number) => {
    this.expandedIndex = index;
    console.log(this.myService)
    this.myService.changeView(true);
    console.log(this.myService)
  }

  splitDescription() {
    return "living".split('\n');
}
}

