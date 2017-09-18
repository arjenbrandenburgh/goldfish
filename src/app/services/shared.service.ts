import { Injectable, EventEmitter } from '@angular/core';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs/Observable';

import { Card } from './../interfaces';

@Injectable()
export class SharedService {
    actionEmitter = new EventEmitter();

    libraryZone: Card[] = [];
    handZone: Card[] = [];
    graveyardZone: Card[] = [];
    exileZone: Card[] = [];
    sideboardZone: Card[] = [];
    battlefieldZone: Card[] = [];

    zones: any = [ this.libraryZone, this.handZone, this.graveyardZone, this.exileZone, this.battlefieldZone, this.sideboardZone ];

    constructor() { }

    public getCardZone(card): any {
      for (let zone of this.zones) {
        let foundCard = zone.find(x => x['goldfishId'] === card['goldfishId']);
        if (foundCard) {
          return zone;
        }
      }
    }

}
