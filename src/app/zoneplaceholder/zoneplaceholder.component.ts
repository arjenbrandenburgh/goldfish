import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'zoneplaceholder-component',
    template: `
        <strong>{{zoneName}}</strong> (<span>{{zoneArray.length}}</span>)
        <div class="zone-placeholder card-placeholder"
            (dbclick)="drawCard()"
            [ngClass]="{'deck-placeholder' : isLibrary}"
            [dragula]='"first-bag"'
            [dragulaModel]="zoneArray">

            <card-component *ngFor="let card of zoneArray" [card]="card" [zoneName]="zoneName"></card-component>
        </div>`,
     styles: [ `
		.zone-placeholder {
		    width: 125px;
		    height: 172px;
		    cursor: pointer;
		}

		.deck-placeholder {
			overflow:hidden;
		}
	` ]

})

export class ZonePlaceholderComponent {
	@Input() zoneName: string;
	@Input() zoneArray: any[] = [];

	public isLibrary(): boolean {
		return this.zoneName === 'Library';
	}
}
