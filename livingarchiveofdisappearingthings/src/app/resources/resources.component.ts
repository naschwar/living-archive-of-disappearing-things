import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit {
  support = support;
  education = education;
  constructor() { }
  ngOnInit(): void {
  }

}

const support: Array<{name: String, desc: String, link: String}> = [
  {
    name: " ",
    desc: "placeholder",
    link: "#"
  },
]

const education: Array<{name: String, desc: String, link: String}> = [
  {
    name: " ",
    desc: "placeholder",
    link: "#"
  },
]