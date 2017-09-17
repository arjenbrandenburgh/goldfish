import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../interfaces';

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    host: {'(window:keydown)': 'hotkeys($event)'},
    styleUrls: [ './card.styles.css' ]
})

export class CardComponent {
  @Input() card: Card;
  @Input() zoneName: string;
  @Output() onAction = new EventEmitter();

  tapped: boolean = false;
  flipped: boolean = false;
  backside: boolean = false;
  active: boolean = false;
  marked: boolean = false;

  constructor() {

  }

  private hotkeys($event): any {
    const hotKey = $event.keyCode;
    if (hotKey === 69 && this.active) { // 'e' for 'Exile'
      this.moveZone(this.zoneName, 'Exile');
    }
    else if (hotKey === 71 && this.active) { // 'g' for 'Graveyard'
      this.moveZone(this.zoneName, 'Graveyard');
    }
    else if (hotKey === 76 && this.active) { // 'l' for 'Library' (put on top)
      this.moveZone(this.zoneName, 'Library');
    }
    else if (hotKey === 77 && this.active) { // 'm' for 'marked'
      this.marked = !this.marked;
    }
  }

  public doubleClick(): any {
    if (this.zoneName === 'Hand') {
      this.moveZone(this.zoneName, 'Battlefield');
    } else if (this.zoneName === 'Library') {
      this.onAction.next('draw');
    }
  }

  public toggleTap(): any {
    if (this.zoneName === 'Battlefield') {
      this.tapped = !this.tapped;
    }
  }

  public isBackside(): boolean {
    return (this.zoneName === 'Library');
  }

  public mouseOver($event): any {
    this.active = ($event.type === 'mouseenter');
  }

  public moveZone(source, target): any {
    const moveAction = {
      name: 'movezone',
      card: this.card,
      source: source,
      target: target
    }
    this.onAction.next(moveAction);
  }
}
