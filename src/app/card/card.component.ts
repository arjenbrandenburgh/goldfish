import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { SharedService } from './../services/shared.service';
import { Card } from '../interfaces';

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    host: {'(window:keydown)': 'hotkeys($event)'},
    styleUrls: [ './card.styles.css' ]
})

export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() zoneName: string;

  tapped: boolean = false;
  flipped: boolean = false;
  active: boolean = false;
  marked: boolean = false;

  constructor(private readonly _sharedService: SharedService) {
    this._sharedService.actionEmitter.subscribe((event) => {
      this.performAction(event);
    });
  }

  ngOnInit() {
    if (this.zoneName === 'Library') {
      this.flipped = true;
    }
  }

  private hotkeys($event): any {
    const hotKey = $event.keyCode;
    // console.log(hotKey);
    if (this.active) {
      if (hotKey === 66) { // 'b' for 'bottom of library'
        this.moveZone(this._sharedService.libraryZone, 'bottom');
      }
      else if (hotKey === 69) { // 'e' for 'Exile'
        this.moveZone(this._sharedService.exileZone);
      }
      else if (hotKey === 70) { // 'f' for 'flipped'
        if (this.zoneName === 'Library' || this.zoneName === 'Hand' || this.zoneName === 'Battlefield') {
          // Only flip if we're in the Library, Hand or Battlefield
          this.flipped = !this.flipped
        }
      }
      else if (hotKey === 71) { // 'g' for 'Graveyard'
        this.moveZone(this._sharedService.graveyardZone);
      }
      else if (hotKey === 76) { // 'l' for 'Library' (put on top)
        this.moveZone(this._sharedService.libraryZone);
      }
      else if (hotKey === 77) { // 'm' for 'marked'
        this.marked = !this.marked;
      }
      else if (hotKey === 84) { // 't' for 'tapped'
        this.toggleTap();
      }
    }
  }

  private performAction(event): any {
    if (event === 'untap_all') {
      // Untap all cards
      this.tapped = false;
    } else if (event === 'flip_hand') {
      // Only flip if we're in the handZone
      // const foundCard = this._sharedService.handZone.find(x => x['goldfishId'] === this.card['goldfishId']);
      if (this.zoneName === 'Hand') {
        this.flipped = !this.flipped;
      }
    }
  }

  public doubleClick(): any {
    if (this.zoneName === 'Hand') {
      // If a doubleclick occurs while in hand, then move to the battlefieldZone
      this.moveZone(this._sharedService.battlefieldZone);
    } else if (this.zoneName === 'Library') {
      // If a doubleClick occurs while in library (meaning we're on top of the library)
      // then draw a card
      this._sharedService.actionEmitter.next('draw')
    }
  }

  public toggleTap(): any {
    if (this.zoneName === 'Battlefield') {
      // We can only tap when we're in the battlefieldZone
      this.tapped = !this.tapped;
    }
  }

  public backsideImage(): string {
    // When a card is in hand or in library, we do not want to show the flip-side of a card
    if (this.zoneName !== 'Hand' && this.zoneName !== 'Library') {
      if (this.card.image_flip || this.card.lowest_print.image_flip) {
        return this.card.image_flip || this.card.lowest_print.image_flip;
      }
    }

    return './assets/backside.jpg';
  }

  public mouseOver($event): any {
    this.active = ($event.type === 'mouseenter');
  }

  public moveZone(target, notes = null): any {
    let source = this._sharedService.getCardZone(this.card);
    const index = source.indexOf(this.card, 0);

    if (index > -1) {
        source.splice(index, 1);

        if (notes === 'bottom') {
          target.push(this.card);
        } else {
          target.unshift(this.card);
        }
    }
  }
}
