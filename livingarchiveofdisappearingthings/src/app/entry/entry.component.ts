import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  constructor(public name: String, public shortDesc: String, public longDesc: String, public imgSrc: String) { 

  }
  ngOnInit(): void {
  }

}

export const entries: Array<{name: String, shortDesc: String, longDesc: String, imgSrc: String}> = [
  {
    name: "Maldives",
    shortDesc: "The Maldives,a collection of 1190 islands in the Indian Ocean, is the flattest country on the planet.",
    longDesc: "The Maldives, a collection of 1190 islands in the Indian Ocean, is the flattest country on the planet. With 80% of the country less than 1m above sea level, the Maldives are extremely vulnerable to rising sea levels. Although the Maldives are only responsible for 0.0003% of global emissions, they are already suffering from the servere impact of climate change due to the location and size of the islands. Currently, 90% of the islands have experienced flooding, 97% have experienced shoreline erosion and 64% have experienced serial erosion.",
    imgSrc: "../assets/maldives_nasa.png"
},
{
    name: "Tuvalu",
    shortDesc: "Tuvalu is a collection of 9 small islands in the Pacific ocean, located midway between Hawaii and Australia. Positioned only 3m above sea level and only 20m across (at its narrowest region), Tuvalu is at high risk of submergence due to rises in sea level and heavy coastal erosion from increasingly intense weather patterns.",
    longDesc: "Tuvalu is a collection of 9 small islands in the Pacific ocean, located midway between Hawaii and Australia. Positioned only 3m above sea level and only 20m across (at its narrowest region), Tuvalu is at high risk of submergence due to rises in sea level and heavy coastal erosion from increasingly intense weather patterns. In addition to frequent flooding, Tuvalu experiences extreme temperatures as a result of green house gas emissions from industrialised nations. Many locals predict that their land will be fully submerged and uninhabitable within the next 50 years. While Australia has offered Tuvuluans citizenship, it is contigent on Tuvuluans giving up their fishing and maritime rights. The Tuvaluan government has rejected this as imperialist behavior and remain committed to preserving their land, culture and sovereignity.",
    imgSrc: "../assets/tuvalu.jpg"
}
]