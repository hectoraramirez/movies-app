import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  @Input() showtime;
  @Output() place  = new EventEmitter();

  listPlaces: any [] = [];
  constructor() { }

  ngOnInit() {
    this.loadPlaces();
  }

  /**
   * iterator for put places
   */
  loadPlaces() {
    let placetmp: any [];
    for (let placeletter = 1; placeletter <= 5; placeletter++) {
      placetmp = [];
      for (let placei = 1; placei <= 8; placei++) {
        if (placeletter === 1 ) {
          placetmp.push({ place: 'A' + placei });
        }

        if (placeletter === 2 ) {
          placetmp.push({ place: 'B' + placei });
        }

        if (placeletter === 3 ) {
          placetmp.push({ place: 'C' + placei });
        }

        if (placeletter === 4 ) {
          placetmp.push({ place: 'D' + placei });
        }

        if (placeletter === 5 ) {
          placetmp.push({ place: 'E' + placei });
        }
      }
      this.listPlaces.push({ arrayplace: placetmp});
    }
  }


  /**
   * send to root component place selected
   * @param placeSelect
   */
  getPlaces(placeSelect) {
    this.place.emit({ place: placeSelect});
  }

}
