import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items: any=[];

  constructor() {
    this.items = [
      {title: "Pyro",image:"assets/pyro.png", link: "pyro"},
      {title: "Hydro",image:"assets/hydro.png", link: "hydro"},
      {title: "Anemo", image:"assets/anemo.png", link: "anemo"},
      {title: "Electro",image:"assets/electro.png", link: "electro"},
      {title: "Cryo",image:"assets/cryo.png", link: "cryo"},
      {title: "Geo",image:"assets/geo.png", link: "geo"},
    ];
   }

filterItems(searchTerm) {
  return this.items.filter(item => {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
 }
}


